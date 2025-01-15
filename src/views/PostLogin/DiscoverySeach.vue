<template>
  <div class="discovery-search-container">
    <!-- Capture the 'search' event from SearchPlaces -->
    <div class="search-container">
      <SearchPlaces @search="handleSearch" />
    </div>

    <!-- Pass the searchInput to SearchResults as a prop -->
    <div class="result-container">
      <SearchResults :searchInput="searchInput" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SearchPlaces from "../../components/SearchPlaces.vue";
import SearchResults from "../../components/SearchResults.vue";

// Use ref to store the search input
const searchInput = ref("");

// Handle the search event from SearchPlaces
const handleSearch = (query) => {
  searchInput.value = query; // Update the searchInput prop for SearchResults
};
</script>

<style scoped>

.discovery-search-container {
  position: fixed;
  top: 100px;
  left: 0;
  width: 100%;
  height: calc(100vh - 100px); 
  overflow: hidden;
}

.search-container {
  top: 0;
  width: 100%;
  height: 80px; 
  background-color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Bottom shadow */
  z-index: 2;
}

.result-container {
  background-color: #f9f9f9;
  overflow-y: auto;
  z-index: 1;
}


</style>
