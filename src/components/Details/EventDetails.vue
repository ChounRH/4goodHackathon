<template>
  <div v-if="place">
    <div class="base-layer">
      <div class="restaurant-details-container">
        <div class="restaurant-main-content">
          <div class="category-box-container">
            <div class="category-box">
              Events
            </div>
          </div>

          <!-- Restaurant Name with Bookmark Button -->
          <div class="restaurant-header">
            <h2 class="restaurant-name">{{ place.name }}</h2>
            <AddToBookmarkList
              :itemUUID="place.uuid" 
              @added="handleBookmarkAdded"
              class="add-to-bookmark-btn"
            />
          </div>

          <h4 class="restaurant-categories">
            {{ place.description }}
          </h4>

          <!-- Display tags with a toggle to show all or limited -->
          <div class="restaurant-tags">
            <span 
              v-for="(tag, index) in visibleTags" 
              :key="index" 
              class="tag-box"
            >
              {{ tag }}
            </span>
            <span 
              v-if="remainingTagsCount > 0 && !showAllTags" 
              class="tag-box more-tags"
              @click="toggleShowAllTags"
              style="cursor: pointer;"
            >
              +{{ remainingTagsCount }} more
            </span>
            <span 
              v-if="showAllTags" 
              class="show-less" 
              @click="toggleShowAllTags"
              style="cursor: pointer; color: #007bff;"
            >
              Show less
            </span>
          </div>

          <div v-if="mediaUrl" class="restaurant-image">
            <img :src="mediaUrl" alt="Restaurant Image" />
          </div>
          <br>

          <!-- below the image -->
          <div class="below-image">
            <div class="below-image-left">
              <h3>Description</h3>
              <div class="divider-line"></div>

              <!-- event period tab -->
              <div class="Event-information-container">
                <div class="event-information-container">
                  <p v-if="eventPeriod"><strong>Event Period:</strong> {{ eventPeriod }}</p>
                  <p v-if="place.companyDisplayName"><strong>Event Organiser:</strong> {{ place.companyDisplayName }}</p>
                  <p v-if="place.ticketed !== undefined"><strong>Ticketed:</strong> {{ place.ticketed === 'N' ? 'No' : 'Yes' }}</p>
                </div>
              </div>
              <div v-if="place.body" v-html="place.body" class="descriptions-body"></div>
              <br>
              <h3>Nearest MRT</h3>
              <div class="divider-line"></div>
              <p class="descriptions">{{ place.nearestMrtStation || 'No MRT available.' }}</p>
            </div>
            <div class="below-image-right">
              <div class="more-info-container">
                <h3>Information</h3>
                <div class="divider-line"></div>
                <p><i class="pi pi-map-marker"></i> {{ formattedAddress }}</p>
                <p><i class="pi pi-phone"></i> {{ place.contact?.primaryContactNo || 'Not available' }}</p>
                <a :href="formattedOfficialWebsite" target="_blank">
                  <i class="pi pi-globe"></i> Website
                </a>
                <p v-if="place.officialEmail">
                  <i class="pi pi-envelope"></i> 
                  <a :href="`mailto:${place.officialEmail}`">{{ place.officialEmail }}</a>
                </p>

              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar with contact and rating information -->
      </div>
    </div>
  </div>

  <!-- Loading state when place is null -->
  <p v-else>Loading place details...</p>
</template>
  
  <script setup>
  import { onMounted, ref, computed } from 'vue'; 
  import { useRoute } from 'vue-router';
  import { getPlaces, downloadMedia } from '@/tihServices.js';
  import AddToBookmarkList from "@/components/AddToBookmarkList.vue";
  
  const route = useRoute();
  const uuid = route.params.uuid;
  const place = ref(null);
  const mediaUrl = ref(null);
  const formattedAddress = ref('');
  const limitedTags = ref([]);
  const remainingTagsCount = ref(0);
  const showAllTags = ref(false);
  const showOperatingHours = ref(false); // Boolean to control the OperatingHours popup

  const formattedOfficialWebsite = computed(() => {
    const url = place.value?.officialWebsite || '';
    return url.startsWith('http://') || url.startsWith('https://') ? url : `http://${url}`;
  });

  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-UK', options);
  }

  // Computed property for event period
  const eventPeriod = computed(() => {
    if (place.value && place.value.startDate && place.value.endDate) {
      const start = formatDate(place.value.startDate);
      const end = formatDate(place.value.endDate);
      return `${start} - ${end}`;
    }
    return null;
  });
  
  // Function to format the address
  function formatAddress(address) {
    if (!address) return '';
    const { block, streetName, floorNumber, unitNumber, buildingName, postalCode } = address;
    return [block, streetName, floorNumber, unitNumber, buildingName, postalCode].filter(Boolean).join(', ');
  }
  
  // Toggle to show all or limited tags
  function toggleShowAllTags() {
    showAllTags.value = !showAllTags.value;
  }
  
  // Toggle the Operating Hours popup
  function toggleOperatingHours() {
    showOperatingHours.value = !showOperatingHours.value;
  }
  
  // Computed: tags to display (limited or full)
  const visibleTags = computed(() => {
    return showAllTags.value ? place.value.tags : limitedTags.value;
  });
  
  // Fetch media URL for the first image
  const fetchFirstImageUrl = async (imageUuid) => {
    try {
      const response = await downloadMedia(imageUuid);
      const blob = new Blob([response], { type: 'image/jpeg' });
      mediaUrl.value = URL.createObjectURL(blob);
    } catch (error) {
      console.error('Error fetching media:', error);
    }
  };
  
  // Fetch place details using the provided uuid
  const fetchPlaceDetails = async () => {
    try {
      const response = await getPlaces(`search/uuids?searchValues=${uuid}&limit=1`);
      if (response.data && response.data.length) {
        place.value = response.data[0];
        formattedAddress.value = formatAddress(place.value.address);
  
        // Handle tags
        const tags = place.value.tags || [];
        limitedTags.value = tags.slice(0, 5); // Get the first 5 tags
        remainingTagsCount.value = tags.length > 5 ? tags.length - 5 : 0; // Calculate how many tags are left
  
        // Fetch the first image UUID and get its URL
        if (place.value.images && place.value.images.length) {
          const firstImageUuid = place.value.images[0].uuid;
          await fetchFirstImageUrl(firstImageUuid);
        }
      }
    } catch (error) {
      console.error('Error fetching place details:', error);
    }
  };
  
  onMounted(fetchPlaceDetails);
</script>
  
<style scoped>
.below-image {
  display: flex; /* Makes the container a flexbox */
  gap: 20px;
}

.below-image-left {
  width: 65%;
}

.below-image-right {
  width: 35%;
}

.event-information-container {
  background-color: #e5f7f7; /* Light background color, adjust as needed */
  text-align: left;
  padding: 15px 25px; 
  border-radius: 10px; /* Rounded corners */
  color: #333; /* Text color */
  margin: 10px 0; /* Spacing around the container */
  font-family: Arial, sans-serif; /* Adjust font family if needed */
}

.event-information-container p {
  margin: 0; /* Remove default paragraph margin */
  font-size: 1rem; /* Font size */
  line-height: 1.5;
  text-align: left;
}

.event-information-container strong {
  font-weight: bold; /* Bold label */
  color: #333; /* Label color */
}

.descriptions-body {
  margin-top: 14px;
  line-height: 1.6;
  text-align: left;
}

.base-layer {
  position: fixed;
  top: 80px;
  left: 0;
  width: 100vw;
  height: calc(100vh - 80px);;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center; /* Centers child horizontally */
  align-items: center;
}

.restaurant-details-container {
  height: calc(100vh - 80px);
  display: flex;
  max-width: 1200px;
  background-color: #f9f9f9;
}


.restaurant-header {
  display: flex;
  align-items: center;
  gap: 10px; /* Space between name and bookmark button */
}

.large-dot {
  font-size: 1.5rem; /* Adjust this to control the dot size */
  vertical-align: middle;
  margin: 0 1px; /* Optional: add spacing around the dot */
  color: #535353;
}

.category-box {
  background-color: white;
  color: #ff6b35; /* Icon and text color */
  padding: 5px 10px 1px 10px;
  border: 2px solid #ff6b35; /* Orange border */
  border-radius: 5px;
  margin: 20px 0 0 0;
  font-size: 1rem;
  font-weight: bold;
  display: inline-flex;
}
.category-box-container {
  text-align: left;
  margin: 0 0 8px 0;
}

h3 {
  font-size: 20px;
  font-weight: bold; 
  text-align: left;
}

h4 {
  text-align: left;
  color: #535353;
  margin-bottom: 15px;
}

.descriptions {
  text-align: left; 
}

.restaurant-main-content {
  flex: 3;
  overflow-y: auto;
  padding: 0 20px 40vh 20px;
  max-height: calc(100vh - 80px);
}

.restaurant-name {
  font-size: 2rem;
  text-align: left;
  font-weight: bold;
}

.restaurant-image img {
  width: 60%; 
  height: auto; 
  border-radius: 10px;
}

.restaurant-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.restaurant-info {
  margin-bottom: 30px;
  text-align: left; /* Ensure the content is left-aligned */
}

.restaurant-info p, 
.restaurant-info a {
  font-size: 0.95rem;
  margin-bottom: 10px;
  color: #007bff;
  display: flex;
  align-items: center; /* Align icons and text vertically */
}

.restaurant-info i {
  color: rgb(0, 70, 144); /* Change the icon color */
  margin-right: 10px; /* Add space between icon and text */
  font-size: 1.2rem; /* Adjust icon size if needed */
  vertical-align: middle; /* Aligns the icon in the middle of the line */
}

.restaurant-info a {
  text-decoration: none;
}

.restaurant-info a:hover {
  text-decoration: underline;
}

.tag-box {
  background-color: #e0e0e0;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.9rem;
  color: #333;
  white-space: nowrap;
}

.more-tags {
  background-color: #d5d5d5;
}

.show-less {
  background-color: transparent; /* No background for "Show less" */
  color: #007bff; /* Blue color like a link */
  text-decoration: underline; /* Underlined to indicate clickable */
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.9rem;
}

.divider-line {
  height: 1px;
  background-color: #ccc; /* You can change the color */
  margin: 10px 0; /* Adjust the space around the line */
}

.divider-line-2 {
  height: 1px;
  background-color: #ccc; /* You can change the color */
  margin: 10px 0 3px 0; /* Adjust the space around the line */
}

.restaurant-image img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.more-info-container {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}

.more-info-container h3 {
  font-size: 20px;
  font-weight: bold;
}

.more-info-container p,
.more-info-container a {
  font-size: 0.95rem;
  margin-bottom: 10px;
  color: #007bff;
  display: flex;
  align-items: center;
  text-align: left;
}

.more-info-container i {
  color: rgb(0, 70, 144);
  margin-right: 10px;
  font-size: 1.2rem;
  margin-left: 2px;
}

.more-info-container a {
  text-decoration: none;
}

.more-info-container a:hover {
  text-decoration: underline;
}
</style>