<template>
  <div class="email-app-container">
    <div class="email-app-header">
      <h1>Email Application</h1>
    </div>
    <div class="email-app-content">
      <EmailThreads
        v-if="!selectedThreadId && threads.length"
        :threads="threads"
        :loading="loading"
        @select-thread="handleSelectThread"
      />
      <ThreadDetails
        v-else-if="selectedThreadId"
        :messages="messages"
        @back="handleBack"
      />
      <p v-else-if="loading" class="text-gray-500">Loading email threads...</p>
      <p v-else>No email threads available.</p>
    </div>
  </div>
</template>
  
  <script>
  import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
  import { initializeGmailAPI, fetchEmailThreads, fetchThreadDetails } from "../gmailServices";
  import EmailThreads from "./EmailThreads.vue";
  import ThreadDetails from "./ThreadDetails.vue";
  
  export default {
    components: {
      EmailThreads,
      ThreadDetails,
    },
    data() {
      return {
        threads: [], // Stores email threads
        messages: [], // Stores selected thread messages
        selectedThreadId: null, // Tracks the selected thread
        loading: true, // Loading state
        accessToken: null, // OAuth token
      };
    },
    async created() {
      try {
        await this.authenticateUser();
        this.threads = await fetchEmailThreads();
      } catch (error) {
        console.error("Error fetching email threads:", error);
      } finally {
        this.loading = false;
      }
    },
    methods: {
      async authenticateUser() {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        provider.addScope("https://www.googleapis.com/auth/gmail.readonly");
  
        const result = await signInWithPopup(auth, provider);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        this.accessToken = credential.accessToken;
  
        await initializeGmailAPI(this.accessToken);
      },
      async handleSelectThread(threadId) {
        this.selectedThreadId = threadId; // Set selected thread
        try {
          this.messages = await fetchThreadDetails(threadId); // Fetch messages
        } catch (error) {
          console.error("Error fetching thread details:", error);
        }
      },
      handleBack() {
        this.selectedThreadId = null; // Clear selected thread to show list again
        this.messages = []; // Reset messages
      },
    },
  };
  </script>
  
  <style scoped>
.email-app-container {
  margin-top: 80px; /* Account for navbar height */
  padding: 20px;
  max-width: 1400px;
  margin: 0 auto;
}
.email-app-header {
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}
.email-app-content {
  margin-top: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
}
</style>
  