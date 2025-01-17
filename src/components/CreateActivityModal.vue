<template>
  <!-- Modal overlay for displaying the add activity form -->
  <div v-if="isModalVisible" class="modal-overlay">
    <div class="modal">
      <div class="modal-header">
        <button class="cancel-button" @click="closeModal">Cancel</button>
        <h3 class="modal-title">Add Activity</h3>
      </div>
      <div class="divider-line"></div>

      <div class="modal-body">
        <form @submit.prevent="saveActivity">
          <!-- Activity title input field -->
          <label for="activityTitle">Title</label>
          <input
            v-model="activityName"
            type="text"
            id="activityTitle"
            placeholder="Title"
            required
          />

          <!-- Activity date input field -->
          <label for="activityDate">Date</label>
          <input
            v-model="activityDate"
            type="date"
            id="activityDate"
            required
          />

          <!-- Time input fields with validation error display if needed -->
          <label for="timeRange">Time</label>
          <div class="time-range">
            <input v-model="startTime" type="time" required />
            <p class="dividers">-</p>
            <input v-model="endTime" type="time" required />
          </div>
          <p v-if="timeError" class="time-error">{{ timeError }}</p>

          <!-- Location input field -->
          <label for="location">Location</label>
          <input
            v-model="activityLocation"
            type="text"
            id="location"
            placeholder="Enter location"
          />

          <!-- Reminders setting -->
          <label for="reminder">Reminder</label>
          <br>
          <select v-model="activityReminder" id="reminder">
            <option value="0">No reminder</option>
            <option value="5">5 minutes before</option>
            <option value="10">10 minutes before</option>
            <option value="15">15 minutes before</option>
            <option value="30">30 minutes before</option>
            <option value="60">1 hour before</option>
            <option value="1440">1 day before</option>
          </select>

          <br>

          <!-- Description input field -->
          <label for="description">Description</label>
          <textarea
            v-model="activityDescription"
            id="description"
            placeholder="Description"
          ></textarea>

          <!-- Footer with save button, disabled if form is invalid -->
          <div class="modal-footer">
            <button type="submit" class="save-button" :disabled="!isFormValid">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activityName: "", // Stores the activity title
      activityDescription: "", // Stores the activity description
      activityDate: new Date().toISOString().substr(0, 10), // Default to today's date
      startTime: "19:30", // Default start time
      endTime: "22:00", // Default end time
      activityLocation: "", // Stores the location
      reminderTiming: "", // Stores the reminder timing
      isModalVisible: true, // Controls the visibility of the modal
      timeError: "", // Error message for invalid time range
    };
  },
  computed: {
    // Validates form inputs and checks that startTime is before endTime
    isFormValid() {
      return (
        this.activityName.trim() !== "" &&
        this.activityDate.trim() !== "" &&
        this.startTime.trim() !== "" &&
        this.endTime.trim() !== "" &&
        this.activityReminder !== null && 
        this.isTimeRangeValid // Only valid if startTime < endTime
      );
    },
    // Returns true if startTime is earlier than endTime
    isTimeRangeValid() {
      return this.compareTimes(this.startTime, this.endTime);
    },
  },
  watch: {
    // Watch startTime and endTime changes to validate the time range
    startTime() {
      this.validateTimeRange();
    },
    endTime() {
      this.validateTimeRange();
    },
  },
  methods: {
    // Close activity modal
    closeModal() {
      this.isModalVisible = false;
      this.$emit("close");
    },

    // Helper function to compare start and end times
    compareTimes(start, end) {
      const [startHours, startMinutes] = start.split(":").map(Number);
      const [endHours, endMinutes] = end.split(":").map(Number);

      // Returns true if end time is after start time
      return (
        endHours > startHours ||
        (endHours === startHours && endMinutes > startMinutes)
      );
    },

    // Validates the time range and sets error message if invalid
    validateTimeRange() {
      if (!this.isTimeRangeValid) {
        this.timeError = "End time must be after start time.";
      } else {
        this.timeError = "";
      }
    },

    // reset form
    resetForm() {
      this.activityName = ""; // Clear the activity title
      this.activityDescription = ""; // Clear the activity description
      this.activityDate = new Date().toISOString().substr(0, 10); // Reset to today's date
      this.startTime = "19:30"; // Reset to default start time
      this.endTime = "22:00"; // Reset to default end time
      this.activityLocation = ""; // Clear the location
      this.activityReminder = "0"; // Reset to "No reminder"
      this.timeError = ""; // Clear any time validation error
    },

    // Saves the activity data if form is valid, then resets and closes modal
    saveActivity() {
      if (!this.isFormValid) return;

      const activityStart = new Date(`${this.activityDate}T${this.startTime}`);
      const activityEnd = new Date(`${this.activityDate}T${this.endTime}`);

      // Calculate the reminder time
      const reminderOffset = this.activityReminder * 60 * 1000; // Convert minutes to milliseconds
      const reminderTime = new Date(activityStart.getTime() - reminderOffset);

      // Handle cases where the reminder falls on the previous day
      let reminderReadable;
      if (reminderTime.toDateString() !== activityStart.toDateString()) {
        // Reminder is on the previous day
        reminderReadable = `Previous day at ${reminderTime.toTimeString().slice(0, 5)}`;
      } else {
        // Reminder is on the same day
        reminderReadable = `${reminderTime.toTimeString().slice(0, 5)}`;
      }

      const newActivity = {
        title: this.activityName,
        start: activityStart.toISOString(),
        end: activityEnd.toISOString(),
        location: this.activityLocation,
        description: this.activityDescription,
        reminder: reminderTime.toISOString(), // ISO format for reminder
        reminderReadable, // Readable string for debugging or display
      };

      this.$emit("save-activity", newActivity); // Emit the new activity to parent
      this.resetForm();
      this.closeModal();
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  padding-top: 90px;
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

.divider-line {
  height: 1px;
  background-color: #ccc;
  margin-top: 5px;
}

.modal-body {
  margin-top: 15px;
}

.modal-body label {
  margin-bottom: 15px;
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

.dividers {
  color: #bbb;
  margin: 0 20px;
  margin-bottom: 7px;
  font-size: 1.5rem;
}

#description {
  height: 100px;
  min-height: 45px;
  max-height: 300px;
  resize: vertical;
  width: 100%;
}

.time-error {
  color: red;
  font-size: 0.9rem;
  margin-top: 5px;
}

#reminder {
  width: 460px;
  height: 45px;
  margin: 0 0 10px 0;
  border-radius: 5px;
  border: 2px solid #bbb
}
</style>
