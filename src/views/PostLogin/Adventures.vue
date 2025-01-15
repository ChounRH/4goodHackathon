<template>
  <!-- Base container for the adventures section of the page -->
  <div class="base-layer">
    <div class="adventure-container">
      <!-- Left section containing list of adventures and actions -->
      <div class="adventure-left">
        <h3>Your Adventures</h3>
        <button class="new-adventure-btn" @click="toggleNewAdventureForm">
          + New Adventure
        </button>
        <div class="divider-line-2"></div>
        <div class="AdventureListsContainer">
          <!-- Loop to display each adventure -->
          <div
            v-for="adventure in adventures"
            :key="adventure.id"
            :class="[
              'adventure-list-item',
              { selected: currentAdventure?.id === adventure.id },
            ]"
            @click="loadAdventure(adventure)"
          >
            <div class="icon-container">
              <i class="pi pi-users list-icon"></i>
            </div>
            <div class="list-info">
              <h3>{{ adventure.name }}</h3>
              <p>Members: {{ adventure.friends?.length || 0 }}</p>
              <p>Activities: {{ adventure.activities?.length || 0 }}</p>
            </div>
            <div class="adventure-actions">
              <button @click.stop="toggleDropdown(adventure.id)">⋮</button>
              <div v-if="activeDropdown === adventure.id" class="dropdown-menu">
                <button @click="openEditAdventureForm(adventure)">
                  <i class="pi pi-file-edit"></i> Edit Adventure
                </button>
                <button @click="leaveAdventure(adventure.id)">
                  <i class="pi pi-sign-out"></i> Leave Adventure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right section that shows adventure details and calendar events if an adventure is selected -->
      <div
        class="adventure-right-container"
        v-if="adventures.length > 0 && currentAdventure"
      >
        <div class="adventure-description">
          <div class="adventure-description-left">
            <!-- Display adventure name with hover information box -->
            <button
              class="white-button"
              @mouseover="showInfoBox = true"
              @mouseleave="showInfoBox = false"
            >
              {{ currentAdventure.name }}
            </button>

            <!-- Information box that shows adventure details -->
            <div v-if="showInfoBox" class="info-box">
              <div class="info-box-title">
                <i class="pi pi-question-circle"></i>
                <p>Information</p>
              </div>
              <div class="divider-line-3"></div>
              <div class="info-box-information-container">
                <div class="info-box-left">
                  <p>Name:</p>
                  <p>Description:</p>
                  <p>No. activities:</p>
                  <p>No. members:</p>
                </div>
                <div class="info-box-right">
                  <p>{{ currentAdventure.name }}</p>
                  <p class="information-description">
                    {{ currentAdventure.description }}
                  </p>
                  <p>{{ getActivityCount(currentAdventure) }}</p>
                  <p>{{ getAdventurerCount(currentAdventure) }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="adventure-description-right">
            <button class="add-activity-btn" @click="openAddActivityForm">
              + New Activity
            </button>
          </div>
        </div>
        <div class="adventure-right">
          <!-- Calendar component showing adventure activities -->
          <vue-cal
            :events="calendarEvents"
            default-view="month"
            :time="true"
            :disable-views="['years', 'year']"
            events-on-month-view="long"
            @event-click="handleEventClick"
          />
        </div>
      </div>

      <!-- Message when there are no adventures to display -->
      <div class="else-right-container" v-else>
        <div class="no-adventures-message">
          <img
            src="../../assets/img/SadKitten.jpg"
            alt="Sad Kitten"
            class="sad-kitten-image"
          />
          <p class="no-adventure-text">
            You currently are not in any adventures, create or join one to start
            exploring!
          </p>
        </div>
      </div>
    </div>

    <!-- Modal for adding activities -->
    <CreateActivityModal
      v-if="showAddActivityModal"
      :selectedAdventureId="selectedAdventureId"
      :adventures="adventures"
      @close="closeModal"
      @save-activity="saveActivity"
    />

    <!-- Modal for creating or editing an adventure -->
    <CreateAdventureModal
      v-if="showNewAdventureForm || showEditAdventureForm"
      :currentUserEmail="currentUserEmail"
      :editingAdventure="editingAdventure"
      @close="closeModal"
      @save-adventure="saveAdventure"
    />

    <!-- Modal for editing activity details -->
    <div v-if="showEditActivityModal" class="modal-overlay">
      <div class="modal">
        <div class="modal-header">
          <button class="cancel-button" @click="closeEditModal">Cancel</button>
          <h3 class="modal-title">Edit Activity</h3>
        </div>
        <div class="divider-line"></div>

        <div class="modal-body">
          <form @submit.prevent="updateActivity">
            <label for="activityTitle">Title</label>
            <input
              v-model="editActivity.title"
              type="text"
              id="activityTitle"
              placeholder="Title"
              required
            />

            <label for="activityDate">Date</label>
            <input
              v-model="editActivityDate"
              type="date"
              id="activityDate"
              required
            />

            <label for="timeRange">Time</label>
            <div class="time-range">
              <input v-model="editActivityStartTime" type="time" required />
              <p class="dividers">-</p>
              <input v-model="editActivityEndTime" type="time" required />
            </div>
            <p v-if="timeError" class="time-error">{{ timeError }}</p>

            <label for="location">Location</label>
            <input
              v-model="editActivity.location"
              type="text"
              id="location"
              placeholder="Enter location"
            />

            <label for="description" placeholder="Description"
              >Description</label
            >
            <textarea
              v-model="editActivity.description"
              id="description"
              placeholder="Description"
            ></textarea>

            <div class="modal-footer">
              <button type="submit" class="save-button" :disabled="!!timeError">
                Save
              </button>
              <button
                type="button"
                class="remove-button"
                @click="removeActivity"
              >
                Remove Activity
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";
import firebaseApp from "@/firebase.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  arrayUnion,
  arrayRemove,
  getDoc,
} from "firebase/firestore";
import CreateActivityModal from "@/components/CreateActivityModal.vue";
import CreateAdventureModal from "@/components/CreateAdventureModal.vue";
import { v4 as uuidv4 } from "uuid"; // Unique ID generator
import "@/assets/vue-cal-custom.css";

const db = getFirestore(firebaseApp);

export default {
  components: {
    VueCal,
    CreateActivityModal,
    CreateAdventureModal,
  },
  data() {
    return {
      showAddActivityModal: false,
      showEditActivityModal: false,
      editActivity: null,
      editActivityDate: "",
      editActivityStartTime: "",
      editActivityEndTime: "",
      selectedAdventureId: null,
      adventures: [],
      calendarEvents: [],
      showNewAdventureForm: false,
      showEditAdventureForm: false,
      currentUserID: "",
      currentUserEmail: "",
      currentAdventure: null,
      editingAdventure: null,
      activeDropdown: null,
      currentActivity: null,
      showInfoBox: false,
      currentView: "month",
      timeError: "", // Error message for time validation
    };
  },
  computed: {
    isEditTimeRangeValid() {
      // Check if the start time is before the end time for Edit Activity modal
      return this.compareTimes(
        this.editActivityStartTime,
        this.editActivityEndTime
      );
    },
  },
  watch: {
    // Watch edit start and end times to validate time range in Edit Activity modal
    editActivityStartTime() {
      this.validateEditTimeRange();
    },
    editActivityEndTime() {
      this.validateEditTimeRange();
    },
  },
  async created() {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        this.currentUserEmail = user.email;
        this.currentUserID = user.uid;
        await this.loadUserAdventures();
      } else {
        console.log("No user logged in");
      }
    });
    document.addEventListener("click", this.handleClickOutsideDropdown);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleClickOutsideDropdown);
  },
  methods: {
    compareTimes(start, end) {
      const [startHours, startMinutes] = start.split(":").map(Number);
      const [endHours, endMinutes] = end.split(":").map(Number);

      return (
        endHours > startHours ||
        (endHours === startHours && endMinutes > startMinutes)
      );
    },
    validateEditTimeRange() {
      if (!this.isEditTimeRangeValid) {
        this.timeError = "End time must be after start time.";
      } else {
        this.timeError = "";
      }
    },
    async loadAdventure(adventure) {
      if (!adventure) return;

      this.currentAdventure = adventure;
      this.selectedAdventureId = adventure.id;

      this.calendarEvents = (adventure.activities || []).map((activity) => ({
        ...activity,
        start: new Date(activity.start),
        end: new Date(activity.end),
      }));
    },
    async loadUserAdventures() {
      if (!this.currentUserEmail) return;

      const userDocRef = doc(db, "Users", this.currentUserEmail);
      const userSnapshot = await getDoc(userDocRef);

      if (!userSnapshot.exists()) return;

      const adventureIDs = userSnapshot.data().adventures || [];
      const adventureSnapshots = await getDocs(collection(db, "adventures"));

      this.adventures = adventureSnapshots.docs
        .map((doc) => ({ id: doc.id, ...doc.data() }))
        .filter((adventure) => adventureIDs.includes(adventure.id));

      this.currentAdventure = this.adventures[0] || null;
      if (this.currentAdventure) {
        this.loadAdventure(this.currentAdventure);
      } else {
        this.calendarEvents = [];
      }
    },
    getActivityCount(adventure) {
      return (adventure.activities || []).length;
    },
    getAdventurerCount(adventure) {
      return (adventure.friends || []).length;
    },
    openAddActivityForm() {
      if (!this.currentAdventure) {
        alert("Please select an adventure before adding an activity.");
        return;
      }
      this.showAddActivityModal = true;
      this.selectedAdventureId = this.currentAdventure.id;
    },
    openEditAdventureForm(adventure) {
      this.showEditAdventureForm = true;
      this.editingAdventure = adventure;
    },
    toggleNewAdventureForm() {
      this.showNewAdventureForm = true;
      this.editingAdventure = null;
    },
    closeModal() {
      this.showAddActivityModal = false;
      this.showNewAdventureForm = false;
      this.showEditAdventureForm = false;
      this.showEditActivityModal = false;
      this.editingAdventure = null;
    },
    async saveActivity(newActivity) {
      if (!this.selectedAdventureId) return;

      newActivity.id = uuidv4();

      const selectedAdventure = this.adventures.find(
        (a) => a.id === this.selectedAdventureId
      );
      const adventureDoc = doc(db, "adventures", this.selectedAdventureId);

      try {
        await updateDoc(adventureDoc, {
          activities: arrayUnion(newActivity),
        });

        if (selectedAdventure.id === this.currentAdventure?.id) {
          this.calendarEvents.push({
            ...newActivity,
            start: new Date(newActivity.start),
            end: new Date(newActivity.end),
          });

          this.currentAdventure.activities = [
            ...(this.currentAdventure.activities || []),
            newActivity,
          ];
        }

        this.closeModal();
      } catch (error) {
        console.error(
          "Error adding activity to the selected adventure:",
          error
        );
      }
    },
    async saveAdventure(adventureData) {
      const userEmails = [
        ...new Set([...adventureData.friends, this.currentUserEmail]),
      ];
      const fullAdventureData = {
        ...adventureData,
        friends: userEmails,
        activities: this.editingAdventure
          ? this.editingAdventure.activities
          : [],
      };
      try {
        let adventureId;
        if (this.editingAdventure) {
          adventureId = this.editingAdventure.id;
          const adventureDoc = doc(db, "adventures", adventureId);
          await updateDoc(adventureDoc, fullAdventureData);
          const index = this.adventures.findIndex(
            (a) => a.id === this.editingAdventure.id
          );
          if (index !== -1) {
            this.adventures[index] = {
              id: this.editingAdventure.id,
              ...fullAdventureData,
            };
          }
        } else {
          const adventureRef = await addDoc(
            collection(db, "adventures"),
            fullAdventureData
          );
          adventureId = adventureRef.id;
          await this.linkUsersToAdventure(
            adventureId,
            fullAdventureData.friends
          );
          this.adventures.push({ id: adventureRef.id, ...fullAdventureData });
          await this.addAdventureToUser(adventureId);
        }
        await this.linkUsersToAdventure(adventureId, userEmails);
        await this.loadUserAdventures();
        this.closeModal();
      } catch (error) {
        console.error("Error saving adventure:", error);
      }
    },
    async addAdventureToUser(adventureId) {
      if (!this.currentUserEmail) return;
      const userDoc = doc(db, "Users", this.currentUserEmail);
      await updateDoc(userDoc, { adventures: arrayUnion(adventureId) });
    },
    async linkUsersToAdventure(adventureID, userEmails) {
      for (const email of userEmails) {
        const userDoc = doc(db, "Users", email);
        await updateDoc(userDoc, { adventures: arrayUnion(adventureID) });
      }
      const adventureDoc = doc(db, "adventures", adventureID);
      await updateDoc(adventureDoc, { friends: arrayUnion(...userEmails) });
    },
    async leaveAdventure(adventureId) {
      const userDoc = doc(db, "Users", this.currentUserEmail);
      await updateDoc(userDoc, { adventures: arrayRemove(adventureId) });
      const adventureDoc = doc(db, "adventures", adventureId);
      await updateDoc(adventureDoc, {
        friends: arrayRemove(this.currentUserEmail),
      });
      this.adventures = this.adventures.filter(
        (adventure) => adventure.id !== adventureId
      );
      this.currentAdventure = this.adventures[0] || null;
      if (this.currentAdventure) {
        this.loadAdventure(this.currentAdventure);
      } else {
        this.calendarEvents = [];
      }
    },
    toggleDropdown(adventureId) {
      this.activeDropdown =
        this.activeDropdown === adventureId ? null : adventureId;
    },
    handleClickOutsideDropdown(event) {
      if (!event.target.closest(".adventure-actions")) {
        this.activeDropdown = null;
      }
    },
    handleEventClick(event) {
      this.editActivity = { ...event };
      this.editActivityDate = this.formatDate(event.start);
      this.editActivityStartTime = this.formatTime(event.start);
      this.editActivityEndTime = this.formatTime(event.end);
      this.showEditActivityModal = true;
      this.validateEditTimeRange(); // Validate time when modal is opened
    },
    formatDate(date) {
      return date.toISOString().split("T")[0];
    },
    formatTime(date) {
      return date.toTimeString().split(" ")[0].slice(0, 5);
    },
    closeEditModal() {
      this.showEditActivityModal = false;
    },
    async updateActivity() {
      if (!this.isEditTimeRangeValid) return;

      const updatedActivity = {
        ...this.editActivity,
        start: new Date(
          `${this.editActivityDate}T${this.editActivityStartTime}`
        ),
        end: new Date(`${this.editActivityDate}T${this.editActivityEndTime}`),
      };

      const index = this.calendarEvents.findIndex(
        (event) => event.id === updatedActivity.id
      );

      if (index !== -1) {
        this.calendarEvents[index] = updatedActivity;
        const adventureDoc = doc(db, "adventures", this.selectedAdventureId);

        try {
          const updatedActivities = this.calendarEvents.map((event) => ({
            ...event,
            start: event.start.toISOString(),
            end: event.end.toISOString(),
          }));
          await updateDoc(adventureDoc, { activities: updatedActivities });
          this.currentAdventure.activities = updatedActivities;
        } catch (error) {
          console.error("Error updating activity:", error);
        }
      }
      this.closeEditModal();
    },
    async removeActivity() {
      if (!this.selectedAdventureId || !this.editActivity?.id) {
        console.error("Activity or adventure ID is missing.");
        return;
      }

      const updatedActivities = this.currentAdventure.activities.filter(
        (activity) => activity.id !== this.editActivity.id
      );

      try {
        const adventureDoc = doc(db, "adventures", this.selectedAdventureId);
        await updateDoc(adventureDoc, { activities: updatedActivities });

        this.calendarEvents = this.calendarEvents.filter(
          (event) => event.id !== this.editActivity.id
        );
        this.currentAdventure.activities = updatedActivities;

        this.closeEditModal();
        console.log("Activity removed successfully.");
      } catch (error) {
        console.error("Error removing activity:", error);
      }
    },
  },
};
</script>

<style scoped>
.base-layer {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100vw;
  min-height: calc(100vh - 80px);
  max-height: calc(100vh - 80px);
  top: 80px;
  left: 0;
  background-color: #f8f8f8;
  position: fixed;
  overflow-y: auto; /* Allow vertical scrolling */
  overflow-x: hidden; /* Hide horizontal overflow if not needed */
}

/* Container for Adventures */
.adventure-container {
  display: flex;
  flex-wrap: wrap;
  max-width: 1400px;
  width: 100%;
  min-height: calc(100vh - 100px);
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  border: 0.5px solid #ccc;
  margin: 10px auto;
  overflow: hidden;
}

/* Left sidebar styling for adventure list */
.adventure-left {
  width: 250px;
  min-width: 250px;
  background-color: #f5f5f5;
  padding: 20px;
  box-shadow: 3px 0 5px rgba(0, 0, 0, 0.1);
  z-index: 3;
}

/* Adventure list heading */
.adventure-left h3 {
  color: #2c3f50;
  font-weight: bold;
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 10px;
}

/* Button for creating a new adventure */
.new-adventure-btn {
  background-color: #f8683b;
  color: white;
  width: 100%;
  padding: 10px 0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  margin-bottom: 15px;
  transition: background-color 0.2s ease;
}
.new-adventure-btn:hover {
  background-color: #fd5623;
}

/* Divider lines for separating sections */
.divider-line,
.divider-line-2,
.divider-line-3 {
  height: 1px;
  background-color: #b4b3b3;
  margin: 5px 0 10px 0;
}

/* Container for holding adventure list items */
.AdventureListsContainer {
  display: flex;
  flex-direction: column;
  gap: 0;
}

/* Individual adventure list item */
.adventure-list-item {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #f5f5f5;
  cursor: pointer;
  transition: background-color 0.3s;
}
.adventure-list-item:hover {
  background-color: #f0f0f0;
}
.adventure-list-item:not(:last-child) {
  border-bottom: 1px solid #e0e0e0;
}
.adventure-list-item.selected {
  background-color: #f9e5df;
  border-left: 4px solid #f8683b;
}

/* Icon container for list items */
.icon-container {
  margin-top: 5px;
  margin-right: 10px;
}
.list-icon {
  width: 24px;
  height: 24px;
}

/* Adventure actions (dropdown menu) */
.adventure-actions {
  margin-left: auto;
  position: relative;
}
.adventure-actions button {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #ff7043;
}
.dropdown-menu {
  position: absolute;
  top: 25px;
  right: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
}
.dropdown-menu button {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 12px;
  text-align: left;
  background: none;
  border: none;
  cursor: pointer;
  color: black;
  font-size: 14px;
  white-space: nowrap;
}
.dropdown-menu button:hover {
  background-color: #f0f0f0;
}

/* Information text inside list items */
.list-info {
  display: flex;
  flex-direction: column;
}
.list-info h3 {
  font-size: 1rem;
  margin: 0;
  font-weight: bold;
}
.list-info p {
  font-size: 0.9rem;
  margin: 0;
  color: #666;
}

/* Right container for displaying selected adventure */
.adventure-right-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
}
.else-right-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

/* Adventure description section styling */
.adventure-description {
  display: flex;
  width: 100%;
  padding: 20px;
  background-color: #f9f9f9;
  border-bottom: 1px solid #ccc;
}
.adventure-description-left {
  width: 60%;
  text-align: left;
}
.adventure-description-right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 40%;
  height: 100%;
}

/* Calendar display */
.adventure-right {
  flex: 1;
  background-color: #f0f4f8;
  overflow-x: hidden;
}

/* Button for adding activities */
.add-activity-btn {
  background-color: #ff7043;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s ease;
}
.add-activity-btn:hover {
  background-color: #e65a2e;
}

/* Modal styling for overlay */
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
  z-index: 9999;
}
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
.modal-title {
  color: #2c3f50;
  font-weight: bold;
  font-size: 1.5rem;
  margin-right: 40px;
  text-align: center;
  flex-grow: 1;
}
.cancel-button {
  background-color: #fff;
  color: #565656;
  padding: 5px 0;
  border: none;
  cursor: pointer;
  font-size: 15px;
}

/* Modal form styling */
.modal-body {
  margin-top: 20px;
}
.modal-body label {
  margin-bottom: 5px;
  font-weight: bold;
}
.modal-body input,
.modal-body textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid #bbb;
  border-radius: 5px;
  font-size: 1rem;
  background-color: white;
  color: #2c3f50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.modal-body input::placeholder,
.modal-body textarea::placeholder {
  color: #888;
}

/* Time range inputs */
.time-range {
  display: flex;
  align-items: center;
}
.time-range input[type="time"] {
  width: 45%;
}
.time-range span {
  margin: 0 5px;
}

/* Footer buttons for modals */
.modal-footer {
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
}
.save-button,
.remove-button {
  flex-basis: 45%;
  max-width: 160px;
  margin: 0 5px;
  padding: 8px 15px;
  border-radius: 5px;
  font-size: 14px;
}

/* Styling for save button */
.save-button {
  background-color: #f8683b;
  color: white;
  border: none;
  cursor: pointer;
}
.save-button:hover {
  background-color: #fa5d2d;
}
.save-button:disabled {
  background-color: #ddd;
  cursor: not-allowed;
}

/* Styling for remove button */
.remove-button {
  background-color: #dc3545;
  color: white;
  border: none;
  cursor: pointer;
}
.remove-button:hover {
  background-color: #c82333;
}

/* Custom event styling for calendar */
.custom-event {
  border: 2px solid #ff9800;
  background-color: #fff3e0;
  color: #000;
  padding: 5px;
  border-radius: 4px;
  cursor: pointer;
  overflow: hidden;
  font-size: 12px;
}
.custom-event-title {
  font-weight: bold;
  margin-bottom: 2px;
}
.custom-event-time,
.custom-event-location {
  font-size: 11px;
  color: #555;
}

/* No adventures message styling */
.no-adventures-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  font-size: 1.5rem;
  color: #333;
  text-align: center;
  font-weight: bold;
  padding: 20px;
}

/* Image for no adventures message */
.sad-kitten-image {
  margin-top: 50px;
  width: 150px;
  height: auto;
}

/* Button with white background */
.white-button {
  background-color: white;
  color: #2c3f50;
  padding: 6px 10px;
  border: 1px solid #2c3f50;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  transition: background-color 0.2s ease;
}
.white-button:hover {
  background-color: #f0f0f0;
}

/* Information box styling */
.info-box {
  position: fixed;
  min-width: 240px;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  top: 145px;
  left: 270px;
  z-index: 1000;
  font-size: 0.9rem;
  color: #333;
  margin-top: 5px;
}
@media (min-width: 1400px) {
  .info-box {
    left: calc(50vw - 430px);
  }
}

/* Information box title styling */
.info-box-title {
  display: flex;
  align-items: center;
  gap: 5px;
}
.info-box-title i {
  margin-right: 5px;
  color: #2c3f50;
}
.info-box-title p {
  font-weight: bold;
  color: #2c3f50;
  margin: 0;
}

/* Information box content styling */
.info-box-information-container {
  display: flex;
  align-items: flex-start;
}
.info-box-left,
.info-box-right {
  padding: 10px;
}
.info-box-left p,
.info-box-right p {
  margin-top: 3px;
  color: #4f4f4f;
}
.info-box-left p {
  font-weight: bold;
}

.time-error {
  color: red;
  font-size: 0.9rem;
  margin-top: 5px;
}

.dividers {
  color: #bbb;
  margin: 0 20px;
  margin-bottom: 7px;
  font-size: 1.5rem;
}

#description {
  font-family: Avenir, Helvetica, Arial, sans-serif;;
  height: 100px;
  min-height: 45px;
  max-height: 300px;
  resize: vertical;
  width: 100%;
}
</style>
