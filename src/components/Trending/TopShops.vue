<template>
  <div class="top-restaurants">
    <div class="header">
      <div class="title-section">
        <h1>Top Shops</h1>
        <p class="sub-title">Discover the newest trends</p>
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
              <p v-if="result.rating" class="rating">
                <i class="pi pi-star-fill"></i> {{ result.rating.toFixed(1) }}
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
import { onMounted, ref, computed, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";
import { getPlaces, downloadMedia } from "@/tihServices.js";
import AddToBookmarkList2 from "@/components/AddToBookmarkList.vue";

export default {
  components: {
    AddToBookmarkList2,
  },
  setup() {
    const router = useRouter();
    const results = ref([]);
    const images = ref([]);
    const currentIndex = ref(0);

    const calculateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width >= 1400) return 4;
      if (width >= 1100) return 3;
      return 2;
    };

    const itemsPerPage = ref(calculateItemsPerPage());

    const visibleResults = computed(() => {
      return results.value.slice(currentIndex.value, currentIndex.value + itemsPerPage.value);
    });

    const handleResize = () => {
      itemsPerPage.value = calculateItemsPerPage();
      currentIndex.value = 0; // Reset to the beginning when screen size changes
    };

    const getImageUrl = async (uuid) => {
      try {
        const response = await downloadMedia(uuid);
        return URL.createObjectURL(response);
      } catch (error) {
        return "";
      }
    };

    const fetchSearchResults = async () => {
      try {
        const response = await getPlaces(
          `search?dataset=shops&filtersource=stb&sort=rating&sortOrder=desc&limit=20`
        );
        results.value = response.data;

        const imagePromises = results.value.map(async (result) => {
          if (result.images && result.images.length > 0) {
            const imageUrl = await getImageUrl(result.images[0].uuid);
            return imageUrl;
          } else {
            return "";
          }
        });

        images.value = await Promise.all(imagePromises);
      } catch (error) {
        console.error("Error fetching search results:", error);
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

    const handleBookmarkAdded = () => {
      // Custom logic for handling bookmark addition
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
      handleBookmarkAdded,
    };
  },
};
</script>

<style scoped>
.top-restaurants {
  padding: 20px;
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
  justify-content: space-between;
  align-items: center;
}

.restaurant-info h3 {
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;
  margin: 0;
  max-width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.rating {
  font-size: 1rem;
  color: #666;
}

.rating i {
  color: gold;
  font-size: 1.2rem;
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