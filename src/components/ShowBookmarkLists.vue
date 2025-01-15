<template>
  <div class="container">
    <div class="BookmarkListsContainer">
      <div
        v-for="(name, index) in bookmarkListNames"
        :key="index"
        :class="[
          'bookmark-list-item',
          { selected: selectedList === fullBookmarkListNames[index] },
        ]"
        @click="selectBookmarkList(fullBookmarkListNames[index])"
      >
        <!-- Left side icon -->
        <div class="icon-container">
          <i class="pi pi-objects-column list-icon"></i>
        </div>
        <!-- List info -->
        <div class="list-info">
          <h3>{{ name }}</h3>
          <p>{{ getItemCount(fullBookmarkListNames[index]) }} items</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebaseApp from "../firebase.js";
import { inject } from "vue";
import {
  getFirestore,
  doc,
  getDoc,
  updateDoc,
  deleteField,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const separator = ", Description:";

export default {
  data() {
    return {
      bookmarkLists: {},
      bookmarkListNames: [],
      fullBookmarkListNames: [],
      selectedList: "", // Keeps track of the selected list
      confirmationBookmarkListName: "",
      userID: null,
      userDocRef: null,
    };
  },
  async mounted() {
    try {
      await onAuthStateChanged(auth, async (user) => {
        if (user) {
          try {
            this.userID = user.uid; // Set the user ID when a user is logged in
            this.userDocRef = doc(db, "Bookmarks", this.userID);
            console.log(this.userID)

            // Fetch user bookmark lists
            let docSnap = await getDoc(this.userDocRef);
            if (docSnap.exists()) {
              this.bookmarkLists = docSnap.data().bookmarkLists; // Store bookmark lists
              this.fullBookmarkListNames = Object.keys(this.bookmarkLists).sort(); // Full name with description
              this.bookmarkListNames = this.fullBookmarkListNames.map(
                (key) => key.split(separator)[0]
              ); // Extract names
              this.selectedList = this.fullBookmarkListNames[0]; // Automatically select the first list

              // Emit the selected list when the component mounts
              this.$emit("listSelected", this.selectedList);
            } else {
              console.log("No such document!");
            }
          } catch (error) {
            console.error("Error Getting Bookmark Lists: ", error);
          }
        } else {
          console.log("User is not authenticated");
        }
      });
    } catch (error) {
      console.error("Error fetching document: ", error);
    }
  },
  methods: {
    // Method to select a list and emit its full name
    selectBookmarkList(listName) {
      this.selectedList = listName; // Update the selected list
      this.$emit("listSelected", listName); // Emit the full list name
      console.log(listName);
    },
    getItemCount(listName) {
      const fullListName = this.fullBookmarkListNames.find((key) =>
        key.startsWith(listName)
      );
      return this.bookmarkLists[fullListName]?.length || 0; // Return item count or 0
    },
    getIconForList(name) {
      // This is a placeholder. You can use icons based on the list name or use the same icon for all.
      return name === "Favourite"
        ? "/path-to-favourite-icon.png"
        : "/path-to-default-icon.png";
    },
  },
};
</script>

<style scoped>
.BookmarkListsContainer {
  display: flex;
  flex-direction: column;
  gap: 0px;
  z-index: 2;
}

/* Bookmark list item */
.bookmark-list-item {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #f5f5f5;
  cursor: pointer;
  transition: background-color 0.3s;
  justify-content: flex-start; /* Align content to the left */
}

.bookmark-list-item:hover {
  background-color: #f0f0f0;
}

.bookmark-list-item:not(:last-child) {
  border-bottom: 1px solid #e0e0e0; /* Divider line for all except the last item */
}

/* Selected state */
.bookmark-list-item.selected {
  background-color: #f9e5df;
  border-left: 4px solid #f8683b;
}

/* Icon container */
.icon-container {
  margin-right: 10px;
}

.list-icon {
  width: 24px;
  height: 24px;
}

.list-info {
  display: flex;
  flex-direction: column; /* Stack the name and item count vertically */
  align-items: flex-start; /* Ensure both the name and the item count are aligned left */
}

.list-info h3 {
  font-size: 1rem;
  margin: 0;
  font-weight: bold;
  text-align: left; /* Align the list name to the left */
}

.list-info p {
  font-size: 0.9rem;
  margin: 0;
  color: #666;
  text-align: left; /* Align the item count to the left */
}
</style>
