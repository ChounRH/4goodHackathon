<template>
  <div>
    <div v-if="loading">
      <p>Loading place details...</p>
    </div>
      <component :is="selectedComponent" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getPlaces } from "@/tihServices.js"; // Import your API functions

const route = useRoute();
const uuid = route.params.uuid; // Get the uuid from the route params
const place = ref(null); // Store the place data
const selectedComponent = ref(null); // Will store the selected component
const loading = ref(true); // For loading state

// Dynamically import the necessary component based on the dataset
const selectComponent = (dataset) => {
  if (dataset === "events") {
    return import("../../components/Details/EventDetails.vue");
  }
  if (dataset === "food_beverages") {
    return import("../../components/Details/RestaurantDetails.vue");
  }
  if (dataset === "shops") {
    return import("../../components/Details/ShopDetails.vue");
  }
  return null; // Fallback if no match
};

// Fetch the place details
const fetchPlaceDetails = async () => {
  try {
    const response = await getPlaces(
      `search/uuids?searchValues=${uuid}&limit=1`
    );
    if (response.data && response.data.length) {
      place.value = response.data[0]; // Bind place data

      // Dynamically import and set the appropriate component based on the dataset
      const component = await selectComponent(place.value.dataset);
      if (component) {
        selectedComponent.value = component.default;
      }
    }
  } catch (error) {
    console.error("Error fetching place details:", error);
  } finally {
    loading.value = false;
  }
};

onMounted(fetchPlaceDetails);
</script>

<style scoped>
.component-container {
  max-height: calc(100vh - 80px); /* Adjust based on your layout */
  overflow-y: auto;
  padding: 20px; /* Optional padding */
  background-color: #f9f9f9; /* Optional background color */
}

</style>
