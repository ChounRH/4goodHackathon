<template>
    <div class="container mx-auto p-6">
      <h1 class="text-2xl font-bold mb-6">Email Application</h1>
  
      <!-- Display Email Threads -->
      <EmailThreads
        v-if="!selectedThreadId && threads.length"
        :threads="threads"
        :loading="loading"
        @select-thread="handleSelectThread"
      />
  
      <!-- Display Email Details -->
      <ThreadDetails
        v-else-if="selectedThreadId"
        :messages="messages"
        @back="handleBack"
      />
  
      <!-- Loading State -->
      <p v-else-if="loading" class="text-gray-500">Loading email threads...</p>
  
      <!-- Empty State -->
      <p v-else class="text-gray-500">No email threads available.</p>
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
  .container {
    max-width: 800px;
  }
  </style>
  