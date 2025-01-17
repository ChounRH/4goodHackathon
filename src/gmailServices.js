import { gapi } from "gapi-script";

// Initialize Gmail API
export const initializeGmailAPI = (accessToken) => {
  return new Promise((resolve, reject) => {
    gapi.load("client", async () => {
      try {
        await gapi.client.init({
          apiKey: "AIzaSyDPY23mWkv_eTgMStyTi40vK2t5yhxoGCg",
          discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"],
        });

        // Set the OAuth token
        gapi.auth.setToken({ access_token: accessToken });

        console.log("Gmail API initialized.");
        resolve();
      } catch (error) {
        console.error("Error initializing Gmail API:", error);
        reject(error);
      }
    });
  });
};

// Fetch email threads
export const fetchEmailThreads = async () => {
  try {
    const threadsResponse = await gapi.client.gmail.users.threads.list({
      userId: "me",
      maxResults: 25,
    });

    const threads = threadsResponse.result.threads || [];
    const detailedThreads = await Promise.all(
      threads.map(async (thread) => {
        const threadDetails = await gapi.client.gmail.users.threads.get({
          userId: "me",
          id: thread.id,
        });

        const firstMessage = threadDetails.result.messages[0];
        const headers = firstMessage.payload.headers;

        return {
          id: thread.id,
          snippet: thread.snippet,
          sender: extractHeader(headers, "From"),
          subject: extractHeader(headers, "Subject"),
          date: extractHeader(headers, "Date"),
          body: getMessageBody(firstMessage.payload), // Extract body using helper
        };
      })
    );

    return detailedThreads;
  } catch (error) {
    console.error("Error fetching email threads:", error);
    throw error;
  }
};

// Helper to extract headers
const extractHeader = (headers, headerName) => {
  const header = headers.find(
    (h) => h.name.toLowerCase() === headerName.toLowerCase()
  );
  return header ? header.value : "Unknown";
};

const getMessageBody = (payload) => {
    if (payload.body && payload.body.data) {
      return decodeBody(payload.body.data);
    }
  
    if (payload.parts) {
      for (const part of payload.parts) {
        if (part.mimeType === "text/plain" && part.body.data) {
          return decodeBody(part.body.data);
        }
        if (part.mimeType === "text/html" && part.body.data) {
          return decodeBody(part.body.data);
        }
      }
    }
  
    return "No content available.";
  };
  
  // Clean decoded body
  const decodeBody = (body) => {
    try {
      const decoded = decodeURIComponent(
        escape(window.atob(body.replace(/-/g, "+").replace(/_/g, "/")))
      );
  
      // Remove excessive line breaks and irrelevant content
      return decoded.replace(/(\r\n|\n|\r){2,}/g, "\n").trim();
    } catch (error) {
      console.error("Error decoding body:", error);
      return "Unable to decode content.";
    }
  };
  
  

export const fetchThreadDetails = async (threadId) => {
    try {
      const response = await gapi.client.gmail.users.threads.get({
        userId: "me",
        id: threadId,
      });
  
      // Debug: Log the API response
      console.log("Thread Details Response:", JSON.stringify(response.result, null, 2));
  
      return response.result.messages.map((message) => {
        const headers = message.payload.headers;
        const body = getMessageBody(message.payload);
  
        return {
          id: message.id,
          subject: extractHeader(headers, "Subject"),
          sender: extractHeader(headers, "From"),
          date: extractHeader(headers, "Date"),
          body, // Add the decoded body
        };
      });
    } catch (error) {
      console.error("Error fetching thread details:", error);
      throw error;
    }
  };
  
