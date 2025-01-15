<template>
  <div class="discovery-wrapper">
    <div class="scrollable-content">
      <div class="search-bar-container">
        <SearchPlaces />
      </div>
      <TopRestaurants />
      <div class="divider"></div>
      <TopShops />
      <div class="divider"></div>
      <UpcomingEvents />
    </div>
  </div>
</template>

<script setup>
import SearchPlaces from "../../components/SearchPlaces.vue";
import TopRestaurants from "@/components/Trending/TopRestaurants.vue";
import TopShops from "@/components/Trending/TopShops.vue";
import UpcomingEvents from "@/components/Trending/UpcomingEvents.vue";
</script>

<style scoped>

.search-bar-container {
  padding-top: 20px;
}

.discovery-wrapper {
  position: fixed;
  top: 80px;
  left: 0;
  width: 100%;
  height: calc(100vh - 100px); 
  overflow: hidden;
}

.scrollable-content {
  height: 100%;
  padding-bottom: 20%;
  overflow-y: auto;
}

.divider {
  height: 1px;
  margin: 30px auto; /* Centers the divider horizontally */
  width: 80vw; 
  max-width: 1300px;
  border: 0.5px solid #ccc;
}
</style>