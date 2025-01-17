<template>
  <div class="thread-details-container">
    <button @click="$emit('back')" class="back-button">Back</button>
    <div v-for="message in messages" :key="message.id" class="thread-message">
      <h3>{{ message.subject }}</h3>
      <p><strong>From:</strong> {{ message.sender }}</p>
      <p><strong>Date:</strong> {{ message.date }}</p>
      <div class="thread-message-body">{{ message.body }}</div>
    </div>
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
</style>
  