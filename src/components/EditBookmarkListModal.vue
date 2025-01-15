<template>
  <div class="bookmark-list-description">
    <!-- Pop-up modal -->
    <div class="modal-overlay">
      <div class="modal">
        <div class="modal-header">
          <button class="cancel-button" @click="closeModal">Cancel</button>
          <h3 class="modal-title">Edit list</h3>
        </div>
        <div class="divider-line"></div>

        <div class="modal-body">
          <label for="name">Name</label>
          <input v-model="editedName" type="text" id="name" />

          <label for="description">Description</label>
          <input v-model="editedDescription" id="description"></input>
        </div>

        <div class="modal-footer">
          <button class="delete-button" @click="deleteList">Delete</button>
          <div class="right-buttons">
            <button class="save-button" @click="saveList">Save</button>
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
  setDoc,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const separator = ", Description:";

export default {
  props: {
    modalData: {
      type: Object,
      default: () => "No Data Received", // Provide a default value in case no data is passed
    },
  },
  data() {
    return {
      userID: null,
      userDocRef: null,
      listKey: "",
      name: "",
      description: "",
      editedName: "",
      editedDescription: "",
    };
  },
  setup() {
    const closeModal = inject("closeModal");

    return {
      closeModal,
    };
  },
  async mounted() {
    console.log("Received data:", this.modalData);
    try {
      await onAuthStateChanged(auth, async (user) => {
        if (user) {
          this.userID = user.uid; // Set the user ID when a user is logged in
          this.userDocRef = doc(db, "Bookmarks", this.userID);

          // Fetch user bookmark lists
          let docSnap = await getDoc(this.userDocRef);
          if (docSnap.exists()) {
            this.listKey = Object.keys(docSnap.data().bookmarkLists).find(
              (key) => key.startsWith(this.modalData)
            );
            let listKeySplit = this.listKey.split(separator);
            this.name = listKeySplit[0];
            this.editedName = listKeySplit[0];
            this.description = listKeySplit[1];
            this.editedDescription = listKeySplit[1];
          } else {
            console.log("No such document!");
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
    // save the edtis made to the bookmark list
    async saveList() {
      try {
        const docSnap = await getDoc(this.userDocRef);
        if (docSnap.exists()) {
          const data = docSnap.data();

          const bookmarkLists = data.bookmarkLists || {};

          const newKey = this.editedName + separator + this.editedDescription;

          bookmarkLists[newKey] = bookmarkLists[this.listKey];
          this.deleteList();

          await setDoc(
            this.userDocRef,
            { bookmarkLists: bookmarkLists },
            { merge: true }
          );

          this.$emit("added");
          window.location.reload();
          this.closeModal();
        }
      } catch (error) {
        console.error("Error updating document: ", error);
        alert("Failed to add item. Please try again.");
      }
      this.closeModal();
    },

    async deleteList() {
      console.log(`Removing bookmark list: ${this.name}`);
      try {
        const docSnap = await getDoc(this.userDocRef);

        if (docSnap.exists()) {
          if (this.listKey) {
            await updateDoc(this.userDocRef, {
              [`bookmarkLists.${this.listKey}`]: deleteField(),
            });
            console.log("Bookmark List removed successfully");
          } else {
            console.error("No matching bookmark list found");
          }
        } else {
          console.error("No such document!");
        }

        window.location.reload();
        this.closeModal();
      } catch (error) {
        console.error("Error removing bookmark:", error);
      }
      this.closeModal();
    },
  },
};
</script>

<style scoped>

.divider-line {
  height: 1px;
  background-color: #ccc;
  margin-top: 5px;
}

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
.modal-title {
  color: #2c3f50;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0 50px 0 10px;
  flex-grow: 1;
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
  background-color: #fa5d2d;
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
</style>
