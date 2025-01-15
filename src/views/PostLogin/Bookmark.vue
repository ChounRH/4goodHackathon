<template>
  <div class="base-layer">
    <div class="bookmark-container">
      <!-- Left column with bookmark lists -->
      <div class="bookmark-left">
        <h3>Your lists</h3>
        <CreateBookmarkList
          @refresh-bookmark-lists="refreshShowBookmarkLists"
        />
        <div class="divider-line-2"></div>
        <ShowBookmarkLists
          ref="showBookmarkLists"
          @listSelected="updateSelectedList"
        />
      </div>

      <!-- Right column with bookmark description and items -->
      <div class="bookmark-right-container">
        <div class="bookmark-description" v-if="userID && selectedList">
          <BookmarkListDescriptions :list="selectedList" />
        </div>
        <div class="bookmark-right" v-if="userID && selectedList">
          <ItemBookmarkView :listName="selectedList" :userID="userID" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import CreateBookmarkList from "@/components/CreateBookmarkList.vue";
import ShowBookmarkLists from "@/components/ShowBookmarkLists.vue";
import ItemBookmarkView from "@/components/ItemBookmarkView.vue";
import BookmarkListDescriptions from "@/components/BookmarkListDescriptions.vue";

const selectedList = ref("");
const userID = ref(null);

// Selection of selected Bookmark list on the side bar
const updateSelectedList = (fullListName) => {
  selectedList.value = fullListName;
};

const handleModalState = (state) => {
  isModalVisible.value = state;
};

onMounted(() => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      userID.value = user.uid;
    } else {
      console.log("No user logged in");
    }
  });
});
</script>

<script>
export default {
  methods: {
    refreshShowBookmarkLists() {
      // Call the refresh method on ShowBookmarkLists
      this.$refs.showBookmarkLists.refresh();
    },
  },
};
</script>

<style scoped>
.bookmark-left h3 {
  color: #2c3f50;
  flex-grow: 1;
  font-weight: bold;
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.base-layer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: calc(100vh - 80px);
  top: 80px;
  left: 0;
  background-color: #f8f8f8;
  position: fixed;
}

.bookmark-container {
  display: flex;
  max-width: 1400px;
  width: 100%;
  height: calc(100vh - 100px); /* Full viewport height minus navbar height */
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15); /* Slightly stronger shadow */
  border-radius: 10px; /* Rounded corners */
  border: 0.5px solid #ccc;
  margin: 0 auto;
  overflow: hidden; /* Ensures content stays within rounded borders */
}

/* Left column for bookmark lists */
.bookmark-left {
  width: 250px;
  background-color: #f5f5f5;
  padding: 20px;
  overflow-y: auto;
  height: 100%;
  box-shadow: 3px 0 5px rgba(0, 0, 0, 0.1);
  position: relative; /* Enables z-index */
  z-index: 1; /* Raises it above other elements */
}

.divider-line {
  height: 1px;
  background-color: #b4b3b3;
  margin: 5px 0 10px 0;
}

.divider-line-2 {
  height: 1px;
  background-color: #ccc;
  margin-top: 15px;
}

/* Right column for bookmark description and items */
.bookmark-right-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
}

/* Stacking bookmark description above bookmark-right */
.bookmark-description {
  padding: 20px;
  background-color: #f9f9f9;
  border-bottom: 1px solid #ccc;
}

.bookmark-right {
  height: calc(100vh - 200px);
  padding: 0 20px 20px 20px;
  overflow-y: auto;
  background-color: #f0f4f8;
}
</style>
