<template>
  <!-- Background Animation -->
  <div class="background-animation">
    <img :src="Cat1" alt="Random Cat" class="cat" :style="catStyle" />
  </div>

  <!-- Home Container -->
  <div class="home-container">
    <!-- Logo -->
    <div class="logo-container">
      <img
        :src="HiddenKittensLogo"
        alt="Hidden Kittens Logo"
        class="app-logo"
      />
    </div>

    <!-- Divider -->
    <div class="divider"></div>

    <!-- Welcome Message -->
    <p class="welcome-text">
      Your Guide to Amazing Spots and Great Experiences
    </p>

    <!-- Login Form -->
    <div v-if="isLogin && !showResetPassword" class="form-container">
      <h1 class="title">Sign In</h1>
      <input
        type="text"
        placeholder="Email"
        v-model="email"
        class="input-field"
      />

      <!-- Password Field with Eye and Cat Icons -->
      <div class="password-container">
        <input
          :type="showPassword ? 'text' : 'password'"
          placeholder="Password"
          v-model="password"
          class="input-field"
        />
        <span @click="togglePasswordVisibility" class="eye-icon">{{
          showPassword ? "👁️" : "🐱"
        }}</span>
      </div>

      <!-- Forgot password link directly below password field -->
      <a @click="showResetPassword = true" class="forgot-password"
        >Forgot password?</a
      >

      <p v-if="errMsg" class="error-msg">{{ errMsg }}</p>
      <button @click="login" class="submit-button">Login</button>
      <button @click="signInWithGoogle" class="submit-button google-button">
        <img
          src="@/assets/icons/google-icon.png"
          alt="Google icon"
          class="google-icon"
        />
        Sign In With Google
      </button>

      <!-- New to Hidden Kittens? Join now link -->
      <div class="new-account">
        <span>New to Hidden Kittens? </span
        ><a @click="toggleForm" class="join-now">Join now</a>
      </div>
    </div>

    <!-- Password Reset Form -->
    <div v-if="showResetPassword" class="form-container">
      <h1 class="title">Reset Password</h1>
      <input
        type="text"
        placeholder="Enter your email"
        v-model="resetEmail"
        class="input-field"
      />
      <p v-if="resetErrMsg" class="error-msg">{{ resetErrMsg }}</p>
      <p v-if="resetSuccessMsg" class="success-msg">{{ resetSuccessMsg }}</p>
      <button @click="sendResetEmail" class="submit-button">
        Send Reset Email
      </button>
      <a @click="showResetPassword = false" class="back-to-signin"
        >Back to Login</a
      >
    </div>

    <!-- Registration Form -->
    <div v-else-if="!isLogin" class="form-container register-form">
      <h1 class="title">Create an Account</h1>
      <input
        type="text"
        placeholder="First Name"
        v-model="firstName"
        class="input-field"
      />
      <input
        type="text"
        placeholder="Last Name"
        v-model="lastName"
        class="input-field"
      />
      <input
        type="text"
        placeholder="Email"
        v-model="email"
        class="input-field"
      />

      <!-- Password Field with Eye and Cat Icons -->
      <div class="password-container">
        <input
          :type="showPassword ? 'text' : 'password'"
          placeholder="Password"
          v-model="password"
          class="input-field"
        />
        <span @click="togglePasswordVisibility" class="eye-icon">{{
          showPassword ? "👁️" : "🐱"
        }}</span>
      </div>

      <p v-if="errMsg" class="error-msg">{{ errMsg }}</p>
      <button @click="register" class="submit-button">Register</button>
      <a @click="toggleForm" class="back-to-signin">Back to Login</a>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { useRouter } from "vue-router";
import Cat1 from "@/assets/img/cat1.jpg";
import HiddenKittensLogo from "@/assets/img/HiddenKittensLogo.jpg";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const router = useRouter();
const auth = getAuth();
const db = getFirestore();
const firstName = ref("");
const lastName = ref("");
const email = ref("");
const password = ref("");
const errMsg = ref("");
const isLogin = ref(true);
const showPassword = ref(false);
const showResetPassword = ref(false);
const resetEmail = ref("");
const resetErrMsg = ref("");
const resetSuccessMsg = ref("");

// Reset error messages when switching between views
const clearErrorMessages = () => {
  errMsg.value = "";
  resetErrMsg.value = "";
  resetSuccessMsg.value = "";
};

// Track user type: Google or Standard
const trackUserType = (isGoogleUser) => {
  localStorage.setItem("isGoogleUser", isGoogleUser ? "true" : "false");
};

// Toggle between login and register forms
const toggleForm = () => {
  isLogin.value = !isLogin.value;
  showResetPassword.value = false;

  // Clear form fields when switching forms
  email.value = "";
  password.value = "";
  firstName.value = "";
  lastName.value = "";

  // Clear error messages when switching forms
  clearErrorMessages();
};


const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

// Sign in with Google
const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Check if the user already exists in Firestore
    const userDocRef = doc(db, "Users", user.email);
    const userDoc = await getDoc(userDocRef);

    if (!userDoc.exists()) {
      // Create a new document with user details
      await setDoc(userDocRef, {
        firstName: user.displayName.split(" ")[0] || "",
        lastName: user.displayName.split(" ")[1] || "",
        userID: user.uid,
        Adventures: [],
        userType: "Google", // Mark as a Google user
      });
    }

    const userDocRefBookmarks = doc(db, "Bookmarks", user.uid);
    const userDocBookmarks = await getDoc(userDocRefBookmarks);

    if (!userDocBookmarks.exists()) {
      // Create a new document with user details
      await setDoc(userDocRef, {
        bookmarkLists: {}
      });
    }

    // Redirect the user or handle post-login behavior
    trackUserType(true);
    router.push('/discovery');
  } catch (error) {
    console.error('Error during Google Sign-In:', error);
    errMsg.value = `Google Sign-In failed: ${error.message}`;
  }
};

// Login logic
const login = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      trackUserType(false); // Track as a standard user
      router.push("/discovery");
    })
    .catch((error) => {
      errMsg.value = "Email or password was incorrect";
    });
};

const validatePassword = (password) => {
  const minLength = 6;
  const hasUppercase = /[A-Z]/.test(password);
  const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (password.length < minLength) {
    return "Password must be at least 6 characters long.";
  }
  if (!hasUppercase) {
    return "Password must contain at least one uppercase letter.";
  }
  if (!hasSpecialCharacter) {
    return "Password must contain at least one special character.";
  }
  return null; // Password is valid
};

const register = () => {
  const passwordError = validatePassword(password.value);
  if (passwordError) {
    errMsg.value = passwordError;
    return; // Prevent further execution if the password is invalid
  }

  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(async (userCredential) => {
      const user = userCredential.user;

      // Add the new user to Firestore under the "Users" collection
      await setDoc(doc(db, "Users", user.email), {
        firstName: firstName.value,
        lastName: lastName.value,
        userID: user.uid,
        Adventures: [],
        userType: "Standard", // Mark as a standard user in Firestore
      });

      // Add the default bookmark list "Favourites" to new user
      await setDoc(doc(db, "Bookmarks", user.uid), {
        bookmarkLists: {}
      });

      // Sign out the user after registration to enforce manual login
      await signOut(auth);

      // Show login form after successful registration
      isLogin.value = true;
      errMsg.value = "Account created successfully! Please log in.";

      // Clear form fields
      email.value = "";
      password.value = "";
      firstName.value = "";
      lastName.value = "";
    })
    .catch((error) => {
      switch (error.code) {
        case "auth/email-already-in-use":
          errMsg.value = "This email is already in use. Please use another email.";
          break;
        case "auth/invalid-email":
          errMsg.value = "The email address is invalid. Please enter a valid email.";
          break;
        case "auth/weak-password":
          errMsg.value = "Your password is too weak. It must be at least 6 characters.";
          break;
        case "auth/missing-password":
          errMsg.value = "Please enter a password.";
          break;
        case "auth/operation-not-allowed":
          errMsg.value = "Account creation is currently disabled. Please try again later.";
          break;
        case "auth/network-request-failed":
          errMsg.value = "Network error. Please check your internet connection and try again.";
          break;
        case "auth/too-many-requests":
          errMsg.value = "Too many attempts. Please wait a moment before trying again.";
          break;
        default:
          errMsg.value = `Registration failed: ${error.message.replace("Firebase: ", "")}`;
          break;
      }
    });
};

// Send reset email logic
const sendResetEmail = () => {
  if (!resetEmail.value) {
    resetErrMsg.value = "Please enter your email.";
    return;
  }

  sendPasswordResetEmail(auth, resetEmail.value)
    .then(() => {
      resetSuccessMsg.value = "Password reset email sent. Please check your inbox.";
      resetErrMsg.value = "";
    })
    .catch(() => {
      resetErrMsg.value = "Error: Unable to send reset email.";
    });
};

const catStyle = ref({
  top: "50%",
  left: "50%",
});

function getRandomPosition() {
  let top, left;
  do {
    top = Math.random() * 40 + 30;
    left = Math.random() * 60 + 20;
  } while (
    top > 35 &&
    top < 65 &&
    left > 30 &&
    left < 70
  );

  catStyle.value = {
    top: `${top}%`,
    left: `${left}%`,
  };
}

onMounted(() => {
  getRandomPosition();
  setInterval(() => {
    getRandomPosition();
  }, 5000);
});
</script>


<style scoped>
html,
body,
#app {
  background-color: #f3f4f6;
  font-family: "Poppins", Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0;
}

.background-animation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
}

.cat {
  position: absolute;
  width: 80px;
  animation: fadeInOut 5s infinite ease-in-out;
  opacity: 0;
  z-index: -1; /* Keeps it behind other elements */
}

.home-container {
  width: 400px;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
  z-index: 1;
}

.logo-container {
  margin-bottom: 20px;
}

.app-logo {
  width: 200px;
}

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input-field {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #ffffff;
  color: #333333;
  font-size: 16px;
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
  color: #ff6d00;
}

.submit-button {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 4px;
  background-color: #ff6d00;
  color: #ffffff;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #e65c00;
}

.google-button {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ff6d00;
  border-radius: 4px; /* Same as other buttons */
  background-color: transparent; /* Transparent background */
  color: #ff6d00; /* Google button color */
  font-size: 1em; /* Ensure font size consistency */
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;
}

.google-button:hover {
  background-color: #ff6d00;
  color: #ffffff;
}

.google-icon {
  width: 20px;
  margin-right: 8px; /* Space between the icon and text */
}

.forgot-password {
  color: #ff6d00;
  font-size: 0.9em;
  cursor: pointer;
  margin-top: 5px;
}

.new-account {
  font-size: 0.9em;
  color: #888;
  margin-top: 10px;
}

.join-now {
  color: #ff6d00;
  cursor: pointer;
}

.back-to-signin {
  font-size: 0.9em;
  color: #ff6d00;
  cursor: pointer;
  text-decoration: none;
  margin-top: 10px;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
