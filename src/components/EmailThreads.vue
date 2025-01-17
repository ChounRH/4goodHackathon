<template>
  <div class="email-threads-container">
    <div
      v-for="thread in threads"
      :key="thread.id"
      class="email-thread"
      @click="$emit('select-thread', thread.id)"
    >
      <div class="email-thread-info">
        <h3>{{ thread.subject || "No Subject" }}</h3>
        <p>{{ thread.sender }}</p>
      </div>
      <p class="email-thread-date">{{ thread.date }}</p>
    </div>
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
.email-threads-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.email-thread {
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background-color: #fff;
  transition: background-color 0.2s ease-in-out;
}
.email-thread:hover {
  background-color: #f9f9f9;
}
</style>
  