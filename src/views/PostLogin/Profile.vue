<template>
  <div class="profile-container">
    <h1 class="title">Profile</h1>

    <form v-if="!isLoading" @submit.prevent="updateProfile">
      <div class="input-group">
        <label>First Name</label>
        <input type="text" v-model="firstName" placeholder="First Name" class="input-field" />
      </div>

      <div class="input-group">
        <label>Last Name</label>
        <input type="text" v-model="lastName" placeholder="Last Name" class="input-field" />
      </div>

      <!-- Conditionally render email and password fields only for non-Google users -->
      <div v-if="!isGoogleUser">
        <div class="input-group">
          <label>Email</label>
          <input type="email" v-model="email" placeholder="Email" class="input-field" />
        </div>

        <div class="input-group">
          <label>Old Password</label>
          <div class="password-container">
            <input :type="showOldPassword ? 'text' : 'password'" v-model="oldPassword" placeholder="Old Password" class="input-field" />
            <span @click="toggleOldPasswordVisibility" class="eye-icon">{{ showOldPassword ? '👁️' : '🐱' }}</span>
          </div>
        </div>

        <div class="input-group">
          <label>New Password</label>
          <div class="password-container">
            <input :type="showNewPassword ? 'text' : 'password'" v-model="newPassword" placeholder="New Password" class="input-field" />
            <span @click="toggleNewPasswordVisibility" class="eye-icon">{{ showNewPassword ? '👁️' : '🐱' }}</span>
          </div>
        </div>
      </div>

      <!-- Message for Google users -->
      <p v-if="isGoogleUser" class="google-user-msg">You logged in with Google. Please visit Google to change your password.</p>

      <p v-if="errMsg" class="error-msg">{{ errMsg }}</p>
      <p v-if="successMsg" class="success-msg">{{ successMsg }}</p>

      <button type="submit" class="submit-button">Update Profile</button>
    </form>

    <div v-if="isLoading" class="loading-msg">Loading...</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getAuth, signInWithEmailAndPassword, updateEmail, updatePassword } from "firebase/auth";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";

const auth = getAuth();
const db = getFirestore();
const user = auth.currentUser;

const firstName = ref("");
const lastName = ref("");
const email = ref("");
const oldEmail = ref(""); // Store original email for comparison
const oldPassword = ref("");
const newPassword = ref("");
const errMsg = ref("");
const successMsg = ref("");
const showOldPassword = ref(false);
const showNewPassword = ref(false);
const isGoogleUser = ref(localStorage.getItem("isGoogleUser") === "true");
const isLoading = ref(true);

const loadUserData = async () => {
  if (!user) {
    errMsg.value = "User not authenticated. Please log in again.";
    isLoading.value = false;
    return;
  }

  try {
    // Load user data from Firestore
    const userRef = doc(db, "Users", user.email);
    const userDoc = await getDoc(userRef);

    if (userDoc.exists()) {
      const data = userDoc.data();
      firstName.value = data.firstName || "";
      lastName.value = data.lastName || "";
      email.value = user.email || "";
      oldEmail.value = user.email; // Store original email
    }
  } catch (error) {
    console.error("Error loading user data:", error);
    errMsg.value = "Failed to load profile data. Please try again later.";
  } finally {
    isLoading.value = false;
  }
};

const toggleOldPasswordVisibility = () => {
  showOldPassword.value = !showOldPassword.value;
};

const toggleNewPasswordVisibility = () => {
  showNewPassword.value = !showNewPassword.value;
};

const updateProfile = async () => {
  errMsg.value = "";
  successMsg.value = "";

  if (!firstName.value || !lastName.value || (!isGoogleUser.value && !email.value)) {
    errMsg.value = "Fields cannot be empty.";
    return;
  }

  try {
    if (!isGoogleUser.value && (oldPassword.value || newPassword.value)) {
      await signInWithEmailAndPassword(auth, oldEmail.value, oldPassword.value);
    }

    if (!isGoogleUser.value) {
      if (email.value !== oldEmail.value) {
        await updateEmail(user, email.value);
        oldEmail.value = email.value;
      }

      if (newPassword.value) {
        await updatePassword(user, newPassword.value);
      }
    }

    const userRef = doc(db, "Users", oldEmail.value);
    const updates = {
      firstName: firstName.value,
      lastName: lastName.value,
    };
    await updateDoc(userRef, updates);

    successMsg.value = "Profile updated successfully!";
  } catch (error) {
    handleFirebaseError(error);
  }
};

const handleFirebaseError = (error) => {
  switch (error.code) {
    case "auth/network-request-failed":
      errMsg.value = "Network error: Please check your internet connection and try again.";
      break;
    case "auth/weak-password":
      errMsg.value = "The new password is too weak. Please choose a stronger password.";
      break;
    case "auth/email-already-in-use":
      errMsg.value = "This email is already associated with another account.";
      break;
    case "auth/requires-recent-login":
      errMsg.value = "Please log in again to update your profile.";
      break;
    case "auth/wrong-password":
      errMsg.value = "The old password is incorrect.";
      break;
    case "auth/invalid-email":
      errMsg.value = "Please enter a valid email address.";
      break;
    default:
      errMsg.value = `Error: ${error.message}`;
      break;
  }
};

onMounted(() => {
  loadUserData();
});
</script>

<style scoped>
/* Additional style for the Google user message */
.google-user-msg {
  color: #555;
  font-size: 0.9em;
  margin-top: 15px;
  text-align: center;
}

/* Existing styles */
.profile-container {
  width: 400px;
  margin: auto;
  padding: 20px;
  background-color: #f3f4f6;
  border-radius: 16px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 1.8em;
  color: #ff6d00;
  text-align: center;
  margin-bottom: 20px;
}

.input-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.input-field {
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #ffffff;
  color: #333333;
}

.password-container {
  position: relative;
  width: 100%;
}

.eye-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 1.2em;
}

.submit-button {
  width: 100%;
  padding: 10px;
  font-size: 1em;
  background-color: #ff6d00;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #e65c00;
}

.error-msg {
  color: red;
  font-size: 0.9em;
  margin-bottom: 10px;
}

.success-msg {
  color: green;
  font-size: 0.9em;
  margin-bottom: 10px;
}

.loading-msg {
  text-align: center;
  color: #ff6d00;
}
</style>
