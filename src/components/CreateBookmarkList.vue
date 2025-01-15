<template>
  <div class="create-bookmark-list">
    <!-- Button to open the modal -->
    <button class="create-button" @click="showComponentModal">+ New list</button>
  </div>
</template>

<script>
import firebaseApp from "../firebase.js";
import CreateBookmarkListModal from "./CreateBookmarkListModal.vue";
import { inject } from "vue";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const separator = ", Description:";

export default {
  data() {
    return {
      userID: "",
      userDocRef: null,
      newListName: "",
      newListDescription: "",
      isModalVisible: false,
    };
  },
  setup() {
    // Inject the openModal function provided by App.vue
    const openModal = inject("openModal");

    const showComponentModal = () => {
      openModal({
        component: CreateBookmarkListModal,
      });
    }
    return {
      showComponentModal,
    };
  },
  mounted() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.userID = user.uid;
        this.userDocRef = doc(db, "Bookmarks", this.userID);
      } else {
        console.log("user is not authenticated");
      }
    });
  },
  methods: {
    async createList() {
      try {
        await setDoc(
          this.userDocRef,
          {
            bookmarkLists: {
              [this.newListName + separator + this.newListDescription]: [],
            },
          },
          { merge: true }
        );
        this.$emit("added");
        this.newListName = "";
        this.newListDescription = "";
        this.$emit("refresh-bookmark-lists");
        this.closeModal();
      } catch (error) {
        console.error("Error updating document: ", error);
        alert("Failed to add item. Please try again.");
      }
    },
    
  },
};
</script>

<style scoped>
.create-button {
  background-color: #f8683b;
  color: white;
  border: none;
  padding: 10px 20px; /* You can remove or adjust padding as needed */
  cursor: pointer;
  border-radius: 5px;
  width: 100%; /* Make the button take the full width of its parent */
  height: 100%; /* Make the button take the full height of its parent */
  display: block; /* Ensures that the button behaves like a block element */
  box-sizing: border-box; /* Ensures padding is included within width and height */
}

.create-button:hover {
  background-color: #f8683b;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-header h3 {
  margin: 0;
}

.close-button {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.modal-body {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

.modal-body label {
  margin-bottom: 5px;
  font-weight: bold;
}

.modal-body input,
.modal-body textarea {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.save-button {
  background-color: #f8683b;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
}

.save-button:hover {
  background-color: #fd5a29;
}

.cancel-button {
  background-color: #6c757d;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
}
</style>
