<template>
    <div class="star-rating">
      <span 
        v-for="index in stars" 
        :key="index" 
        :class="{'filled': index <= modelValue}"
      >
        ★
      </span>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Props
  const props = defineProps({
    modelValue: {
      type: Number,
      default: 0,
    },
    stars: {
      type: Number,
      default: 5, // Total number of stars
    },
  });
  
  </script>
  
<style scoped>
.star-rating {
  display: flex;
  width: 100%;
  height: 22px;
  font-size: 20px; /* Adjust this value to make the stars smaller */
  color: #ccc; /* Default color for empty stars */
  justify-content: center;
}

.star-rating span {
  cursor: pointer;
  transition: color 0.3s ease;
}

.star-rating span.filled {
  color: #ffcc00; /* Color for filled stars */
}
</style>