<template>
  <!-- Pop-up modal -->
  <div class="modal-overlay">
    <div class="modal">
      <div class="modal-header">
        <button class="cancel-button" @click="closeModal">Cancel</button>
        <h3 class ="modal-title">Create list</h3>
      </div>
      <div class="divider-line"></div>

      <div class="modal-body">
        <label for="newListName">Name</label>
        <input
          v-model="newListName"
          type="text"
          id="newListName"
          required
          placeholder="New List Name (Required)"
        />

        <label for="newListDescription">Description</label>
        <input
          v-model="newListDescription"
          id="newListDescription"
          required
          placeholder="Please describe your new list"
        ></input>
      </div>

      <div class="modal-footer">
        <button class="save-button" @click="createList" :disabled="!newListName">Save</button>
      </div>
    </div>
  </div>
</template>

<script>
import firebaseApp from "../firebase.js";
import { inject } from "vue";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const separator = ", Description:";

export default {
  props: {
    modalData: {
      type: Object,
      default: () => ("No Data Received"),
    },
  },
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
    const closeModal = inject("closeModal");

    return {
      closeModal,
    };
  },
  mounted() {
    console.log("Received data:", this.modalData);
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
    // create a new bookmark list
    async createList() {
    if (this.newListName == "") {

    }
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
        window.location.reload();
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

.modal {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px; /* Fixed width */
  height: 310px; /* Fixed height */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  overflow-y: auto;
}

.modal-title {
  color: #2c3f50;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0 90px 0 45px;
  flex-grow: 1;
  text-align: center; /* Center the title */
}

.create-button {
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  width: 100%; 
  height: 100%; 
  display: block;
  box-sizing: border-box; 
}


.divider-line {
  height: 1px;
  background-color: #ccc;
  margin-top: 5px;
}

.modal-overlay {
  padding-top: 90px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
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
  justify-content: center; /* Center the button horizontally */
  padding-top: 10px;
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
  background-color: #fa5d2d;
}


.cancel-button {
  align-self: flex-start;
  background-color: #fff;
  color: #565656;
  padding: 5px 0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
  margin-top: 5px;
}

.save-button:disabled {
  background-color: #ddd;
  cursor: not-allowed;
}
</style>
