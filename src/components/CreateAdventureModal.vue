<template>
  <!-- Modal overlay to contain the form for creating or editing an adventure -->
  <div v-if="isModalVisible" class="modal-overlay">
    <div class="modal">
      <div class="modal-header">
        <button class="cancel-button" @click="closeModal">Cancel</button>
        <!-- Conditional title based on editing state -->
        <h3 v-if="isEditing" class="modal-title-1">Edit Calendar</h3>
        <h3 v-else class="modal-title-2">New Calendar</h3>
      </div>
      <div class="divider-line"></div>

      <div class="modal-body">
        <form @submit.prevent="saveAdventure">
          <!-- Adventure name input field -->
          <label>Calendar name</label>
          <input
            v-model="adventureName"
            type="text"
            placeholder="Name this Calendar"
            required
          />

          <!-- Adventure description input field -->
          <label>Description</label>
          <input
            v-model="adventureDescription"
            type="text"
            placeholder="Give this calendar a description"
          />

          <!-- Friend email input with add button -->
          <label>Add Friends</label>
          <div class="add-friend-input">
            <input
              v-model="friendEmail"
              type="email"
              placeholder="Enter friend’s email"
            />
            <button type="button" class="add-button" @click="addFriend">
              Add
            </button>
          </div>

          <!-- List of added friends, each with a remove option -->
          <div class="friends-list">
            <span
              v-for="(friend, index) in friends"
              :key="index"
              class="friend-item"
            >
              {{ friend.email }}
              <button @click="removeFriend(index)">x</button>
            </span>
          </div>

          <!-- Save button to submit the adventure form -->
          <div class="modal-footer">
            <button type="submit" class="save-button" :disabled="!isFormValid">
              {{ isEditing ? "Update" : "Save" }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import firebaseApp from "@/firebase.js";
import { doc, getDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const db = getFirestore(firebaseApp);

export default {
  props: {
    currentUserEmail: {
      type: String,
      required: true,
    },
    editingAdventure: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      adventureName: "", // Adventure name input field
      adventureDescription: "", // Adventure description input field
      friends: [], // List to hold friends added to the adventure
      friendEmail: "", // Input field for friend's email
      isEditing: false, // Flag to check if adventure is in editing mode
      isModalVisible: true, // Modal visibility toggle
      userNotFound: "", // Error message if user is not found
    };
  },
  computed: {
    // Check if form is valid (i.e., adventure name is provided)
    isFormValid() {
      return this.adventureName.trim() !== "";
    },
  },
  methods: {
    // Close the modal and reset userNotFound message
    closeModal() {
      this.isModalVisible = false;
      this.userNotFound = "";
      this.$emit("close");
    },
    // Save the adventure data and emit to the parent component
    saveAdventure() {
      if (!this.isFormValid) return;

      const adventureData = {
        name: this.adventureName,
        description: this.adventureDescription,
        friends: this.friends.map((friend) => friend.email),
      };
      this.$emit("save-adventure", adventureData); // Emit saved adventure data
      this.resetForm();
      this.closeModal();
    },
    // Adds a friend after validating they are in the database
    async addFriend() {
      if (!this.friendEmail) return;

      // Ensure user isn't adding themselves or a duplicate friend
      if (
        this.friends.some((friend) => friend.email === this.friendEmail) ||
        this.friendEmail === this.currentUserEmail
      ) {
        alert("User already added or cannot add yourself.");
        this.friendEmail = "";
        return;
      }

      // Check if user exists in Firebase
      const userDocRef = doc(db, "Users", this.friendEmail);
      const userSnapshot = await getDoc(userDocRef);

      if (userSnapshot.exists()) {
        this.friends.push({ email: this.friendEmail });
        console.log("Friend added to list:", this.friendEmail);
      } else {
        alert("User does not exist."); // Notify if user is not in Firebase
      }
      this.friendEmail = ""; // Reset email input
    },
    // Removes friend from the list by index
    removeFriend(index) {
      this.friends.splice(index, 1);
    },
    // Reset form fields when the modal closes
    resetForm() {
      this.adventureName = "";
      this.adventureDescription = "";
      this.friends = [];
      this.friendEmail = "";
      this.isEditing = false;
    },
  },
  created() {
    // Populate form fields if editing an existing adventure
    if (this.editingAdventure) {
      this.isEditing = true;
      this.adventureName = this.editingAdventure.name;
      this.adventureDescription = this.editingAdventure.description;
      this.friends =
        this.editingAdventure.friends
          ?.filter((email) => email !== this.currentUserEmail)
          .map((email) => ({ email })) || [];
    }
  },
};
</script>

<style scoped>
/* Modal overlay styles for centering and background */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  padding-top: 90px;
  align-items: center;
  z-index: 9999;
}

/* Modal container styles */
.modal {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 500px;
  max-height: 90vh;
  overflow-y: auto;
}

/* Modal header styling */
.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modal-title-1 {
  color: #2c3f50;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0 55px 0 0;
  text-align: center;
  flex-grow: 1;
}

.modal-title-2 {
  color: #2c3f50;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0 45px 0 0;
  text-align: center;
  flex-grow: 1;
}

/* Cancel button styling */
.cancel-button {
  background-color: #fff;
  color: #565656;
  padding: 5px 0;
  border: none;
  cursor: pointer;
  font-size: 15px;
}

.divider-line {
  height: 1px;
  background-color: #ccc;
  margin-top: 5px;
}

.modal-body {
  margin-top: 15px;
}

/* Label and input styling in the modal body */
.modal-body label {
  margin-bottom: 15px;
  font-weight: bold;
}

.modal-body input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  background-color: white;
  color: black;
}

.modal-body input::placeholder {
  color: #888;
}

/* Add friend input with add button */
.add-friend-input {
  display: flex;
  align-items: center;
}

.add-friend-input input {
  flex: 1;
  padding: 10px;
  border: 2px solid #ccc;
  border-right: none;
  border-radius: 5px 0 0 5px;
}

/* Add button styling */
.add-button {
  padding: 5px 15px;
  font-size: 1rem;
  background-color: #bdbdbd;
  color: white;
  border: none;
  height: 42.5px;
  border-radius: 0 5px 5px 0;
  border: 2px solid #bdbdbd;
  cursor: pointer;
  margin-bottom: 10px;
}

.add-button:hover {
  background-color: #8a8a8a;
}

/* Friends list styling */
.friends-list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
}

.friend-item {
  background-color: #e0e0e0;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 4px;
}

.friend-item button {
  background: none;
  border: none;
  font-size: 12px;
  margin-left: 5px;
  cursor: pointer;
}

.friend-item button:hover {
  color: red;
}

/* Save button styling */
.modal-footer {
  display: flex;
  justify-content: center;
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

.save-button:disabled {
  background-color: #ddd;
  cursor: not-allowed;
}
</style>
