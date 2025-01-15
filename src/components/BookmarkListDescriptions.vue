<template>
  <div class="bookmark-list-description">
    <div class="description-container" v-if="!isModalVisible">
      <div class="description-content">
        <div class="name-icon">
          <i class="pi pi-objects-column list-icon"></i>
          <h3>{{ name }}</h3>
        </div>
        <p v-if="description">{{ description }}</p>
      </div>
      <button class="edit-button" @click="showComponentModal(name)">
        Edit
      </button>
    </div>

    <!-- Pop-up modal -->
    <div v-if="isModalVisible" class="modal-overlay">
      <div class="modal">
        <div class="modal-header">
          <h3>Edit Bookmark List</h3>
          <button class="close-button" @click="closeModal">X</button>
        </div>

        <div class="modal-body">
          <label for="name">Name:</label>
          <input v-model="editedName" type="text" id="name" />

          <label for="description">Description:</label>
          <textarea v-model="editedDescription" id="description"></textarea>
        </div>

        <div class="modal-footer">
          <button class="delete-button" @click="deleteList">Delete</button>
          <div class="right-buttons">
            <button class="save-button" @click="saveList">Save</button>
            <button class="cancel-button" @click="closeModal">Cancel</button>
          </div>
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
import EditBookmarkListModal from "./EditBookmarkListModal.vue";

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const separator = ", Description:";

export default {
  props: {
    list: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      name: "",
      description: "",
      isModalVisible: false,
      editedName: "",
      editedDescription: "",
    };
  },
  watch: {
    list: {
      immediate: true,
      handler(newList) {
        this.parseList(newList); // Parse the list whenever the prop changes
      },
    },
  },
  setup() {
    // Inject the openModal function provided by App.vue
    const openModal = inject("openModal");

    const showComponentModal = (data) => {
      openModal({
        component: EditBookmarkListModal,
        data: data,
      });
    };
    return {
      showComponentModal,
    };
  },
  methods: {
    // helps to extract the name and description of the bookmark list
    parseList(list) {
      const listParts = list.split(", Description:");
      this.name = listParts[0].trim();
      this.description = listParts[1] ? listParts[1].trim() : ""; // Get the description part if it exists

      // Initialize the edited values for the modal
      this.editedName = this.name;
      this.editedDescription = this.description;
    },
  },
};
</script>

<style scoped>
.description-content h3 {
  font-size: 2.5rem; /* Increased font size */
  font-weight: bold; /* Make the name bold */
  margin: 0; /* Remove extra margins */
}

.bookmark-list-description {
  height: 100px;
  padding: 0px 20px 0px 20px;
  background-color: #f9f9f9;
  z-index: 2;
}

.description-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 3;
}

.description-content {
  text-align: left;
}

.edit-button {
  background-color: #f8683b;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
}

.edit-button:hover {
  background-color: #ec5324;
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
  z-index: 9998;
}

.modal {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  z-index: 9999;
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
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.right-buttons {
  display: flex;
  gap: 10px;
}

.delete-button {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
}

.save-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
}
.name-icon {
  display: flex;
  align-items: center; /* Vertically align icon and h3 */
  gap: 14px; /* Space between the icon and the text */
}
.name-icon i {
  font-size: 1.8rem;
}

.cancel-button {
  background-color: #6c757d;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
}
</style>
