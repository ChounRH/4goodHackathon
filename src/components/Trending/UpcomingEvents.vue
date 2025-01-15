<template>
  <div class="top-restaurants">
    <div class="header">
      <div class="title-section">
        <h1>Upcoming Events</h1>
        <p class="sub-title">Uncover the pulse of Singapore</p>
      </div>
    </div>

    <div class="carousel-wrapper" v-if="results.length">
      <button @click="moveLeft" class="carousel-button left-button" :disabled="currentIndex === 0">
        <i class="pi pi-angle-left"></i>
      </button>
      
      <div class="carousel">
        <div class="carousel-item" v-for="(result, index) in visibleResults" :key="index">
          <div class="image-container">
            <img
              :src="images[index + currentIndex] || require('../../assets/img/EmptyImage.jpg')"
              alt="Image not available"
              class="restaurant-image"
              @click="goToItem(result.uuid)"
            />
            <AddToBookmarkList2 
              :itemUUID="result.uuid" 
              @added="handleBookmarkAdded" 
              class="add-to-bookmark-btn"
            />
          </div>
          <div class="restaurant-details" @click="goToItem(result.uuid)">
            <div class="restaurant-info">
              <h3>{{ result.name }}</h3>
              <p v-if="result.startDate && result.endDate" class="event-period">
                {{ formatDateDisplay(result.startDate) }} - {{ formatDateDisplay(result.endDate) }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <button @click="moveRight" class="carousel-button right-button" :disabled="currentIndex + itemsPerPage >= results.length">
        <i class="pi pi-angle-right"></i>
      </button>
    </div>

    <p v-else>No results found.</p>
  </div>
</template>

<script>
import { onMounted, ref, computed, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router'; 
import { getPlaces, downloadMedia } from '@/tihServices.js';
import AddToBookmarkList2 from '@/components/AddToBookmarkList.vue';

export default {
  components: {
    AddToBookmarkList2,
  },
  setup() {
    const router = useRouter();
    const results = ref([]);
    const images = ref([]);
    const currentIndex = ref(0);

    function formatDateDisplay(dateString) {
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      const date = new Date(dateString);
      return date.toLocaleDateString('en-UK', options);
    }

    const calculateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width >= 1400) return 4;
      if (width >= 1100) return 3;
      return 2;
    };

    function formatDateDisplay(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-UK', options);
  }

  // Computed property for event period
  const eventPeriod = computed(() => {
    if (place.value && place.value.startDate && place.value.endDate) {
      const start = formatDateDisplay(place.value.startDate);
      const end = formatDateDisplay(place.value.endDate);
      return `${start} - ${end}`;
    }
    return null;
  });

    const itemsPerPage = ref(calculateItemsPerPage());

    const visibleResults = computed(() => {
      return results.value.slice(currentIndex.value, currentIndex.value + itemsPerPage.value);
    });

    const handleResize = () => {
      itemsPerPage.value = calculateItemsPerPage();
      currentIndex.value = 0; // Reset to the beginning when screen size changes
    };

    const formatDate = (date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };

    const currentDate = new Date();
    const oneMonthLater = new Date();
    oneMonthLater.setMonth(currentDate.getMonth() + 6);

    const startDate = formatDate(currentDate); 
    const endDate = formatDate(oneMonthLater);

    const getImageUrl = async (uuid) => {
      try {
        const response = await downloadMedia(uuid);
        return URL.createObjectURL(response); 
      } catch (error) {
        return '';
      }
    };

    const fetchSearchResults = async () => {
      try {
        const response = await getPlaces(`search?dataset=events&sort=lastupdateddate&sortOrder=desc&distinct=Yes&startDate=${startDate}&endDate=${endDate}&limit=10`);
        results.value = response.data;

        const imagePromises = results.value.map(async (result) => {
          if (result.images && result.images.length > 0) {
            const imageUrl = await getImageUrl(result.images[0].uuid);
            return imageUrl;
          } else {
            return ''; 
          }
        });

        images.value = await Promise.all(imagePromises);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    const moveLeft = () => {
      if (currentIndex.value > 0) {
        currentIndex.value -= itemsPerPage.value;
      }
    };

    const moveRight = () => {
      if (currentIndex.value + itemsPerPage.value < results.value.length) {
        currentIndex.value += itemsPerPage.value;
      }
    };

    const goToItem = (uuid) => {
      router.push(`/item/${uuid}`);
    };

    onMounted(() => {
      fetchSearchResults();
      window.addEventListener("resize", handleResize);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", handleResize);
    });

    return {
      results,
      images,
      currentIndex,
      visibleResults,
      itemsPerPage,
      moveLeft,
      moveRight,
      goToItem,
      formatDateDisplay,
    };
  },
};
</script>

<style scoped>
.top-restaurants {
  padding: 20px 0;
  width: 100%;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.title-section {
  display: flex;
  align-items: center;
  flex-direction: column;
}

h1 {
  font-size: 2rem;
  margin: 0;
  font-weight: bold;
}

.sub-title {
  font-size: 1rem;
  color: #666;
  text-align: center;
}

.carousel-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel {
  display: flex;
  gap: 20px;
}

.carousel-item {
  flex: 0 0 auto;
  width: 300px;
  height: auto;
  cursor: pointer;
}

.restaurant-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
}

.restaurant-details {
  margin-top: 10px;
  text-align: left;
}

.restaurant-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align content to the start for better readability */
  gap: 5px;
}

.event-period {
  font-size: 0.9rem;
  color: #666;
  margin-top: 2px; /* Optional: adds a bit of space between the name and date */
}

.restaurant-info h3 {
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;
  margin: 0;
  max-width: 260px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.image-container {
  position: relative;
  width: 100%;
  height: 180px;
}

.add-to-bookmark-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: #ffd700;
  font-size: 1.5rem;
  background-color: transparent;
  border: none;
  padding: 0;
}

.add-to-bookmark-btn:hover {
  color: #ffcc00;
}

.carousel-button {
  background: none;
  border: none;
  font-size: 2rem;
  color: #666;
  cursor: pointer;
  padding: 0 10px;
  transform: scale(2);
}

.carousel-button:disabled {
  color: #ccc;
  cursor: not-allowed;
}

.left-button {
  margin-right: 10px;
}

.right-button {
  margin-left: 10px;
}
</style>