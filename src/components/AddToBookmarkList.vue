<template>
  <div class="container">
    <div class="display">
      <div id="displayBookmarkListsIcon" class="circle-icon" @click="toggleModal">+</div>
    </div>

    <!-- Modal Popup -->
    <transition name="fade">
      <div v-if="isModalVisible" class="modal-overlay">
        <div class="modal">
          <div class="modal-header">
            <button class="cancel-button" @click="toggleModal">Cancel</button>
            <h3 class="modal-title">Save to List</h3>
            <button
              v-if="bookmarkListNames.length > 0"
              class="save-button"
              @click="saveChanges"
            >Save</button>
            <button
              v-if="bookmarkListNames.length === 0"
              class="null-button"
            >Save</button>
          </div>
          <div class="divider-line"></div>
          <div class="modal-body">
            <template v-if="bookmarkListNames.length === 0">
              <button class="create-list-button" @click="navigateToBookmark">Create a Bookmark List</button>
            </template>
            <template v-else>
              <div v-for="(name, index) in bookmarkListNames" :key="index" class="modal-item">
                <div class="item-details">
                  <i class="pi pi-objects-column icon"></i>
                  <div class="list-info">
                    <span class="list-name">{{ name }}</span>
                    <span class="item-count">{{ bookmarkListCounts[index] }} items</span>
                  </div>
                </div>
                <input
                  type="checkbox"
                  class="styled-checkbox"
                  :checked="bookmarkListChecks[index]"
                  @change="toggleCheckbox(index)"
                />
              </div>
            </template>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import firebaseApp from "../firebase.js";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const separator = ", Description:";

export default {
  props: {
    itemUUID: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      bookmarkListDescriptions: [],
      bookmarkListNames: [],
      bookmarkListChecks: [],
      isModalVisible: false,
      userID: "",
      userDocRef: "",
      initialChecks: [],
      bookmarkLists: {}, // Holds all bookmark lists with their items
    };
  },
  async mounted() {
    await this.fetchBookmarkLists();
  },
  computed: {
    bookmarkListCounts() {
      return this.bookmarkListNames.map((name, index) => {
        const listKey = `${name}${separator}${this.bookmarkListDescriptions[index]}`;
        return this.bookmarkLists[listKey]?.length || 0;
      });
    },
  },
  methods: {
    // decide whether the modal is to be visiable or not
    toggleModal() {
    this.isModalVisible = !this.isModalVisible;
    
    if (this.isModalVisible) {
      // Refresh the bookmark lists each time the modal is opened
      this.fetchBookmarkLists();
    } else {
      // Reset changes if modal is closed without saving
      this.bookmarkListChecks = [...this.initialChecks];
    }
  },
  toggleCheckbox(index) {
    this.bookmarkListChecks[index] = !this.bookmarkListChecks[index];
  },
  // toggle wehther to include the chckbox
  toggleCheckbox(index) {
    this.bookmarkListChecks[index] = !this.bookmarkListChecks[index];
  },
  // get all the bookmark lists you have
  async fetchBookmarkLists() {
    try {
      await onAuthStateChanged(auth, (user) => {
        if (user) {
          this.userID = user.uid;
          this.userDocRef = doc(db, "Bookmarks", this.userID);
        } else {
          console.log("User is not authenticated");
        }
      });

      let docSnap = await getDoc(this.userDocRef);

      if (docSnap.exists()) {
        const bookmarkLists = docSnap.data().bookmarkLists;
        this.bookmarkLists = bookmarkLists;

        this.bookmarkListNames = Object.keys(bookmarkLists)
          .sort()
          .map((key) => key.split(separator)[0]);
          
        this.bookmarkListDescriptions = Object.keys(bookmarkLists)
          .sort()
          .map((key) => key.split(separator)[1]);

        this.bookmarkListChecks = this.bookmarkListNames.map((name, index) => {
          const listKey = `${name}${separator}${this.bookmarkListDescriptions[index]}`;
          return bookmarkLists[listKey]?.includes(this.itemUUID) || false;
        });

        this.initialChecks = [...this.bookmarkListChecks];
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error fetching document: ", error);
    }
  },
  // go to the bookmark page
  navigateToBookmark() {
    this.$router.push("/bookmark");
  },
  // save the add bookmarks or remove bookamrks
  async saveChanges() {
    let docSnap = await getDoc(this.userDocRef);
    let bookmarkLists = docSnap.data().bookmarkLists || {};

    this.bookmarkListNames.forEach((name, index) => {
      const listKey = `${name}${separator}${this.bookmarkListDescriptions[index]}`;
      const isChecked = this.bookmarkListChecks[index];
      const wasInitiallyChecked = this.initialChecks[index];

      if (isChecked && !wasInitiallyChecked) {
        // Add itemUUID if newly checked
        bookmarkLists[listKey] = bookmarkLists[listKey] || [];
        if (!bookmarkLists[listKey].includes(this.itemUUID)) {
          bookmarkLists[listKey].push(this.itemUUID);
        }
      } else if (!isChecked && wasInitiallyChecked) {
        // Remove itemUUID if unchecked
        bookmarkLists[listKey] = bookmarkLists[listKey].filter(
          (id) => id !== this.itemUUID
        );
      }
    });

      try {
        await updateDoc(this.userDocRef, { bookmarkLists });
        this.$emit("added");

        // Refresh the bookmark lists to reflect updated counts
        await this.fetchBookmarkLists();

        this.initialChecks = [...this.bookmarkListChecks]; // Update initial checks to new state
        this.isModalVisible = false; // Close modal after saving
      } catch (error) {
        console.error("Error updating document: ", error);
        alert("Failed to save changes. Please try again.");
      }
    },
  },
};
</script>

<style scoped>
.circle-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #ccc;
  border: 2px solid #999;
  font-size: 1.5rem;
  color: #333;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.circle-icon:hover {
  background-color: #bbb;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px; /* Fixed width */
  height: 450px; /* Fixed height */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  overflow-y: auto;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-title {
  color: #2c3f50;
  margin: 0 auto;
  font-weight: bold;
  font-size: 1.5rem;
}

.save-button {
  background-color: #f8683b;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
}

.null-button {
  background-color: #ffffff;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
}

.cancel-button {
  background-color: #fff;
  color: #565656;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
}

.divider-line {
  height: 1px;
  background-color: #ccc;
  margin-top: 5px;
}

.modal-body {
  display: flex;
  flex-direction: column;
  max-height: 300px;
  overflow-y: auto;
}

.modal-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #e0e0e0;
}

.item-details {
  display: flex;
  align-items: center;
  gap: 10px;
}

.icon {
  font-size: 1.2rem;
  margin: 0 0 0 15px;
  color: #333;
}

.list-info {
  margin: 0 0 0 10px;
  display: flex;
  flex-direction: column;
  text-align: left;
}

.list-name {
  font-size: 1rem;
  color: #333;
}

.item-count {
  font-size: 0.85rem;
  color: #777;
}

.styled-checkbox {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  appearance: none;
  margin: 0 15px 0 0;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  cursor: pointer;
  position: relative;
}

.styled-checkbox:checked {
  background-color: #f8683b;
  border: 1px solid #f8683b;
}

.styled-checkbox:checked::before {
  content: "✓";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.8rem;
  color: white;
}

/* Fade transition styles */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.create-list-button {
  background-color: #f8683b;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 1rem;
  display: block;
  margin: 0 auto;
  margin-top: 150px;
  transition: background-color 0.3s ease;
}

.create-list-button:hover {
  background-color: #fb5321;
}
</style>