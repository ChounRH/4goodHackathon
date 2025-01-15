<template>
    <div class="not-found-container">
      <h1 class="error-code">404</h1>
      <p class="error-message">Oops! The page you're looking for doesn't exist.</p>
      <router-link to="/home" class="back-home">Go Back to Home</router-link>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from "vue-router";
  const router = useRouter();
  </script>
  
  <style scoped>
  .not-found-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100vh;
    color: #ff6d00;
    font-family: 'Poppins', Arial, sans-serif;
  }
  
  .error-code {
    font-size: 5rem;
    margin-bottom: 10px;
  }
  
  .error-message {
    font-size: 1.2rem;
    margin-bottom: 20px;
    color: #333;
  }
  
  .back-home {
    font-size: 1rem;
    padding: 10px 20px;
    background-color: #ff6d00;
    color: #fff;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s;
  }
  
  .back-home:hover {
    background-color: #e65c00;
  }
  </style>
  