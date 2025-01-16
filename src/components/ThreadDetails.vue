<template>
    <div class="email-details">
      <button
        @click="$emit('back')"
        class="mb-4 p-2 bg-blue-500 text-white rounded"
      >
        Back to Threads
      </button>
      <div v-if="messages.length">
        <div v-for="message in messages" :key="message.id" class="email-content mb-6">
          <div class="email-header mb-4">
            <h3 class="text-lg font-semibold">{{ message.subject || "No Subject" }}</h3>
            <p class="text-sm text-gray-500">From: {{ message.sender }}</p>
            <p class="text-sm text-gray-500">Date: {{ formatDate(message.date) }}</p>
          </div>
          <div class="email-body" v-html="cleanBody(message.body)"></div>
        </div>
      </div>
      <p v-else class="text-gray-500">No message details available.</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      messages: {
        type: Array,
        default: () => [],
      },
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
    },
  };
  </script>
  
  <style scoped>
  .email-details {
    max-width: 800px;
    margin: auto;
  }
  .email-content {
    border-bottom: 1px solid #e5e7eb;
    padding-bottom: 16px;
  }
  .email-header {
    border-bottom: 1px solid #e5e7eb;
    padding-bottom: 8px;
  }
  .email-body {
    margin-top: 16px;
    line-height: 1.6;
  }
  </style>
  