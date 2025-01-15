<template>
  <div class="bookmark-view-container">
    <div v-if="items.length === 0" class="empty-message-container">
      <div class="empty-message">
        <p>Seems empty... Explore the wonders of Singapore!</p>
        <button @click="redirectToDiscovery" class="explore-button">Discover Now</button>
      </div>
    </div>
    <div v-else class="vertical-carousel">
      <div
        class="carousel-item"
        v-for="(item, index) in items"
        :key="index"
        @click="goToItem(item.uuid)"
      >
        <div class="image-container">
          <img
            :src="item.imageUrl || require('@/assets/img/EmptyImage.jpg')"
            alt="Image not available"
            class="restaurant-image"
          />
        </div>
        <div class="item-details">
          <div class="restaurant-header">
            <div class="restaurant-title">
              <h3>{{ item.name }}</h3>
            </div>
            <div class="menu-icon" @click.stop="toggleDropdown(index)">
              <i class="pi pi-ellipsis-v"></i>
              <ul v-if="dropdownIndex === index" class="dropdown-menu">
                <li @click.stop="removeBookmark(item.uuid)">
                  <i class="pi pi-trash"></i> Remove
                </li>
              </ul>
            </div>
          </div>
          <p v-if="item.rating" class="rating"><i class="pi pi-star-fill"></i> {{ item.rating }}</p>
          <p v-if="item.address">
            <i class="pi pi-map-marker"></i> {{ formatAddress(item.address) }}
          </p>
          <p v-if="item.phoneNumber">
            <i class="pi pi-phone"></i> {{ item.phoneNumber }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch } from "vue";
import { getPlaces, downloadMedia } from "@/tihServices.js";
import {
  getFirestore,
  doc,
  getDoc,
  updateDoc,
  arrayRemove,
} from "firebase/firestore";
import firebaseApp from "@/firebase";
import { useRouter } from "vue-router";

const db = getFirestore(firebaseApp);

export default {
  props: {
    listName: {
      type: String,
      required: true,
    },
    userID: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      items: [],
      confirmationUuid: null,
      bookmarkLists: {},
      dropdownIndex: null,
    };
  },
  setup(props) {
    const items = ref([]);
    const uuids = ref([]);
    const router = useRouter();

    watch(
      () => props.listName,
      async () => {
        await fetchItems();
      }
    );

    const redirectToDiscovery = () => {
      router.push("/discovery");
    };

    // fetch all the business profile or events that are saved inside the particular 
    // bookmark list
    const fetchUUIDs = async () => {
      try {
        const userDocRef = doc(db, "Bookmarks", props.userID);
        const docSnap = await getDoc(userDocRef);

        if (docSnap.exists()) {
          const bookmarkLists = docSnap.data().bookmarkLists;
          const matchingKey = Object.keys(bookmarkLists).find((key) =>
            key.startsWith(props.listName)
          );

          if (matchingKey && bookmarkLists[matchingKey]) {
            uuids.value = Object.values(bookmarkLists[matchingKey]);
          } else {
            console.error("No matching bookmark list found");
          }
        } else {
          console.error("No such document!");
        }
      } catch (error) {
        console.error("Error fetching UUIDs from Firestore:", error);
      }
    };

    // fetch the data of the particular place or event
    const fetchItemData = async (uuid) => {
      try {
        const response = await getPlaces(
          `search/uuids?searchValues=${uuid}&limit=1`
        );
        if (response.data && response.data.length) {
          const item = response.data[0];

          let imageUrl = "";
          if (item.images && item.images.length) {
            const response = await downloadMedia(item.images[0].uuid);
            imageUrl = URL.createObjectURL(
              new Blob([response], { type: "image/jpeg" })
            );
          }

          return {
            uuid: item.uuid,
            name: item.name,
            rating: item.rating || "N/A",
            imageUrl,
            address: item.address || "N/A",
            phoneNumber: item.contact?.primaryContactNo || "N/A",
          };
        }
      } catch (error) {
        console.error("Error fetching item details:", error);
        return null;
      }
    };

    const fetchItems = async () => {
      await fetchUUIDs();
      const promises = uuids.value.map(fetchItemData);
      const results = await Promise.all(promises);
      items.value = results.filter((item) => item !== null);
    };

    // go the the business or event details page
    const goToItem = (uuid) => {
      router.push(`/item/${uuid}`);
    };

    onMounted(fetchItems);

    return { items, goToItem, redirectToDiscovery };
  },
  methods: {
    async fetchItems() {
      await this.fetchUUIDs();
      const promises = this.uuids.map(this.fetchItemData);
      const results = await Promise.all(promises);
      this.items = results.filter((item) => item !== null);
    },
    // format the address for displaying
    formatAddress(address) {
      if (!address) return "";
      const { block, streetName, floorNumber, unitNumber, postalCode } = address;
      return [block, streetName, floorNumber, unitNumber, postalCode]
        .filter(Boolean)
        .join(", ");
    },
    // helps remove the bookmarks from the database
    async removeBookmark(uuid) {
      console.log(`Removing bookmark with uuid: ${uuid}`);
      try {
        const userDocRef = doc(db, "Bookmarks", this.userID); // Correct userDocRef
        const docSnap = await getDoc(userDocRef);

        if (docSnap.exists()) {
          const bookmarkLists = docSnap.data().bookmarkLists; // Now in a wider scope

          const matchingKey = Object.keys(bookmarkLists).find((key) =>
            key.startsWith(this.listName)
          );

          if (matchingKey) {
            await updateDoc(userDocRef, {
              [`bookmarkLists.${matchingKey}`]: arrayRemove(uuid),
            });
            console.log("Bookmark removed successfully from list");
          } else {
            console.error("No matching bookmark list found");
          }
        } else {
          console.error("No such document!");
        }
      } catch (error) {
        console.error("Error removing bookmark:", error);
      }
      window.location.reload();
    },
    toggleDropdown(index) {
      this.dropdownIndex = this.dropdownIndex === index ? null : index;
    },
  },
};
</script>

<style scoped>
.bookmark-view-container {
  padding: 0 20px 20px 20px;
}

.vertical-carousel {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0 30vh 0;
  max-height: calc(100vh - 280px);
  overflow-y: auto;
}

.carousel-item {
  display: flex;
  gap: 20px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s ease;
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
  padding: 15px 20px;
  justify-content: center;
}

.restaurant-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.restaurant-title h3 {
  font-size: 1.5rem;
  margin: 0;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: calc(50vw - 110px);
}

.rating {
  display: flex;
  align-items: center;
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
}

.menu-icon {
  position: absolute;
  top: 15px;
  right: 25px;
  cursor: pointer;
  font-size: 1.5rem;
  color: #666;
}

.dropdown-menu {
  position: absolute;
  top: 30px;
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  padding: 10px;
  list-style: none;
  z-index: 1000;
  font-size: 0.85rem; 
  transition: background-color 0.3s ease;
}

.dropdown-menu:hover {
  background-color: #f0f0f0; 
}

.dropdown-menu li {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 5px 0;
}

.dropdown-menu li:hover {
  background-color: transparent; 
}

.vertical-carousel::-webkit-scrollbar {
  width: 6px;
}

.vertical-carousel::-webkit-scrollbar-thumb {
  background-color: #ccc;
  border-radius: 10px;
}

.empty-message-container {
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center vertically */
  align-items: center; /* Center horizontally */
  gap: 20px;
  padding: 20px 0;
  height: calc(100vh - 280px);
  overflow-y: auto;
}

.empty-message {
  text-align: center;
  margin-top: 20px;
}

.empty-message p {
  font-size: 1.2rem;
  color: #555;
}

.explore-button {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #f8683b;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

.explore-button:hover {
  background-color: #fb5522;
}

</style>