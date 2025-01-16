<template>
    <div class="email-threads">
      <h2 class="text-xl font-bold mb-4">Email Threads</h2>
  
      <div v-if="threads.length" class="space-y-4">
        <div
          v-for="thread in threads"
          :key="thread.id"
          class="email-item p-4 border rounded shadow-sm cursor-pointer hover:bg-gray-50"
          @click="$emit('select-thread', thread.id)"
        >
          <div class="flex justify-between">
            <div>
              <p class="text-sm font-semibold text-gray-800">{{ thread.sender }}</p>
              <p class="text-sm text-gray-500">{{ thread.subject || "No Subject" }}</p>
            </div>
            <p class="text-sm text-gray-500">{{ formatDate(thread.date) }}</p>
          </div>
        </div>
      </div>
  
      <p v-else-if="loading" class="text-gray-500">Loading email threads...</p>
      <p v-else class="text-gray-500">No email threads available.</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      threads: Array,
      loading: Boolean,
    },
    methods: {
      formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleString();
      },
    },
  };
  </script>
  
  <style scoped>
  .email-threads {
    max-width: 600px;
    margin: auto;
  }
  .email-item {
    transition: background-color 0.2s;
  }
  </style>
  