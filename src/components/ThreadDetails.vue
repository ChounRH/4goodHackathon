<template>
  <div class="thread-details-container">
    <!-- Back Button -->
    <button @click="$emit('back')" class="back-button">Back</button>

    <!-- Email Messages -->
    <div v-for="message in messages" :key="message.id" class="thread-message">
      <h3>{{ message.subject }}</h3>
      <p><strong>From:</strong> {{ message.sender }}</p>
      <p><strong>Date:</strong> {{ formatDate(message.date) }}</p>
      <div class="thread-message-body">
        <p>{{ cleanBody(message.body) }}</p>
      </div>
    </div>

    <!-- Summarization Section -->
    <div class="summarize-container">
      <button @click="summarizeThread" class="summarize-button">Summarize Thread</button>
      <div v-if="summary" class="summary-text">
        <strong>Summary:</strong>
        <p>{{ summary }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";

export default {
  props: {
    messages: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      summary: "", // Holds the generated summary
    };
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleString();
    },
    cleanBody(rawBody) {
      // Clean and format the email body
      const parser = new DOMParser();
      const doc = parser.parseFromString(rawBody, "text/html");

      // Remove unnecessary links, metadata, and styles
      doc.querySelectorAll("a").forEach((link) => link.remove());
      doc.querySelectorAll("style, script").forEach((node) => node.remove());

      // Return the cleaned content
      return doc.body.innerHTML || "No content available.";
    },
    async summarizeThread() {
      try {
        // Combine all email bodies into a single string
        const threadContent = this.messages.map((message) => message.body).join("\n\n");

        console.log("Sending thread content to summarize:", threadContent); // Debug log

        const response = await axios.post("http://127.0.0.1:5000/summarize", {
          email_body: threadContent,
        });

        console.log("Summary response:", response.data); // Debug log
        this.summary = response.data.summary;
      } catch (error) {
        console.error("Error summarizing thread:", error);
        this.summary = "Failed to generate a summary.";
      }
    },
  },
};
</script>

<style scoped>
.thread-details-container {
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.thread-message {
  margin-bottom: 20px;
}
.back-button {
  margin-bottom: 10px;
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.back-button:hover {
  background-color: #0056b3;
}

/* Summarization section */
.summarize-container {
  margin-top: 20px;
  padding-top: 10px;
  border-top: 1px solid #ccc;
}

.summarize-button {
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.summarize-button:hover {
  background-color: #218838;
}

.summary-text {
  margin-top: 10px;
  font-style: italic;
  color: #333;
}
</style>
