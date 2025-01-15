<template>
  <div class="result-container">
    <div class="result-header">
      <h1>Search Results for "{{ searchinput }}"</h1>
    </div>

    <div v-if="results.length">
      <div
        class="carousel-item"
        v-for="(result, index) in results"
        :key="index"
        @click="goToItem(result.uuid)"
      >
        <div class="image-container">
          <img
            :src="images[index] || require('../assets/img/EmptyImage.jpg')"
            alt="Image not available"
            class="restaurant-image"
          />
        </div>
        <div class="item-details">
          <div class="restaurant-header">
            <div class="restaurant-title">
              <h3>{{ result.name }}</h3>
            </div>
              <AddToBookmarkList2
              :itemUUID="result.uuid"
              @added="handleBookmarkAdded"
              class="add-to-bookmark-btn"
              @click.stop 
              />
          </div>
          <p v-if="result.rating" class="rating"><i class="pi pi-star-fill"></i> {{ result.rating }}</p>
          <p v-if="result.address">
            <i class="pi pi-map-marker"></i> {{ formatAddress(result.address) }}
          </p>
          <p v-if="result.contact?.primaryContactNo">
            <i class="pi pi-phone"></i> {{ result.contact.primaryContactNo }}
          </p>
        </div>
      </div>
    </div>

    <p v-else>No results found.</p>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getPlaces, downloadMedia } from '@/tihServices.js';
import AddToBookmarkList2 from "@/components/AddToBookmarkList.vue";

export default {
  components: {
    AddToBookmarkList2,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const searchinput = route.params.searchinput;
    const searchtype = route.params.searchtype;
    const rawCategory = route.params.category || "";
    const formattedCategory = rawCategory.replace(/\-/g, ",");
    const results = ref([]);
    const images = ref([]);

    const formatAddress = (address) => {
      if (!address) return 'No Address Provided';
      const { block, streetName, floorNumber, unitNumber, postalCode } = address;
      return [block, streetName, floorNumber, unitNumber, postalCode].filter(Boolean).join(' ');
    };

    const getImageUrl = async (uuid) => {
      try {
        const response = await downloadMedia(uuid);
        return URL.createObjectURL(response);
      } catch (error) {
        console.error('Error fetching media:', error);
        return '';
      }
    };

    const fetchSearchResults = async () => {
      try {
        const categoryParam = formattedCategory ? `&typeId=${formattedCategory}` : "";
        const searchTypeParam = searchtype || 'events,food_beverages,shops';
        const response = await getPlaces(`search?dataset=${searchTypeParam}${categoryParam}&keyword=${searchinput}&limit=15`);
        results.value = response.data;

        const imagePromises = results.value.map(async (result) => {
          if (result.images && result.images.length > 0) {
            return await getImageUrl(result.images[0].uuid);
          } else {
            return '';
          }
        });

        images.value = await Promise.all(imagePromises);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    const goToItem = (uuid) => {
      router.push(`/item/${uuid}`);
    };

    onMounted(fetchSearchResults);

    return {
      searchinput,
      results,
      images,
      formatAddress,
      goToItem,
      AddToBookmarkList2,
    };
  },
};
</script>

<style scoped>
.add-to-bookmark-btn {
  position: absolute;
  top: 25px;
  right: 25px;
  cursor: pointer;
  color: #ffd700;
  font-size: 1.5rem;
  background-color: transparent;
  border: none;
  padding: 0;
}

.restaurant-title h3 {
  font-size: 1.5rem;
  margin: 0;
  font-weight: bold;
  white-space: nowrap;       /* Prevents wrapping */
  overflow: hidden;          /* Hides overflow text */
  text-overflow: ellipsis;   /* Shows "..." for overflowing text */
  max-width: calc(50vw - 80px);          /* Adjust width as needed */
}

.add-to-bookmark-btn:hover {
  color: #ffcc00;
}

.result-container {
  display: flex;
  flex-direction: column;
  align-items: center; /* Centers items horizontally */
  height: calc(100vh - 180px);
  overflow-y: auto;
  padding: 20px 20px 40vh 20px;
}

.result-header {
  padding-bottom: 15px;
}

.carousel-item {
  display: flex;
  width: 80vw;
  min-width: 600px;
  max-width: 1000px;
  gap: 20px;
  padding: 0;
  border-radius: 10px;
  background-color: #fff;
  cursor: pointer;
  margin-bottom: 20px;
  transition: background-color 0.3s ease;
  border: 1px solid #d9d9d9; /* Add a 1px grey border */
  position: relative;
}

.carousel-item:hover {
  background-color: #f0f0f0;
}

.image-container {
  width: 220px;
  height: 180px;
  overflow: hidden;
  border-radius: 10px 0 0 10px;
}

.restaurant-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.item-details {
  display: flex;
  flex-direction: column;
  padding: 15px 20px 10px 20px;
  justify-content: center;
}

.restaurant-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item-details h3 {
  font-size: 1.5rem;
  margin: 0;
  font-weight: bold;
}

.rating {
  display: flex;
  align-items: center; /* Center vertically */
  font-size: 0.85rem;
  color: #666;
  margin-top: 5px;
}

.rating i {
  color: gold;
  font-size: 1rem;
  padding-bottom: 4px;
}

.item-details p {
  font-size: 1rem;
  margin: 5px 0;
  color: #333;
  display: flex;
  align-items: center;
}

.item-details p i {
  margin-right: 8px;
  margin-top: 0px;
}
</style>