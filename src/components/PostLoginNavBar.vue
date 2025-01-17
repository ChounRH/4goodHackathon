<template>
  <div class="post-login-navbar-options">
    <nav>
      <div class="logo-container">
        <img
          src="@/assets/img/HiddenKittensLogo.jpg"
          alt="Hidden Kitten Logo"
          class="logo"
        />
      </div>
      <ul class="options">
        <li>
          <router-link to="/discovery" active-class="active-tab" :class="{ disabled: isModalVisible }">
            Email Summary
          </router-link>
        </li>
        <li>
          <router-link to="/bookmark" active-class="active-tab" :class="{ disabled: isModalVisible }">
            To-do List
          </router-link>
        </li>
        <li>
          <router-link to="/adventures" active-class="active-tab" :class="{ disabled: isModalVisible }">
            Calendar
          </router-link>
        </li>
      </ul>
      <div class="profile-container" v-if="isLoggedIn">
        <img
          src="@/assets/img/ProfilePic.jpg"
          alt="Profile Pic"
          class="profile-pic"
          @click="toggleDropdown"
        />
        <div v-if="showDropdown" class="dropdown-menu" :class="{ disabled: isModalVisible }">
          <ul>
            <li @click="goToProfile">
              <i class="pi pi-user-edit"></i> Profile
            </li>
            <hr class="dropdown-divider" />
            <li @click="handleSignOut">
              <i class="pi pi-sign-out"></i> Sign Out
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { onMounted, ref, defineProps } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";
const router = useRouter();

const isLoggedIn = ref(false);
const showDropdown = ref(false);

const props = defineProps({
  isModalVisible: {
    type: Boolean,
    required: true,
  },
});

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});

// Toggle the visibility of the dropdown menu
const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

// Navigate to the profile page
const goToProfile = () => {
  showDropdown.value = false; // Close the dropdown
  router.push("/profile");    // Navigate to profile page
};

// Handle sign out and navigate to the home page
const handleSignOut = () => {
  signOut(auth).then(() => {
    showDropdown.value = false; // Close the dropdown
    router.push("/home");       // Navigate to home page
  }).catch((error) => {
    console.error("Error signing out:", error);
  });
};
</script>

<style scoped>
.post-login-navbar-options {
  width: 100vw;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  z-index: 9999;
  background-color: white;
}

nav {
  position: fixed;
  width: 100%;
  top: 0;
  background-color: white;
  padding: 10px;
  border-bottom: 1.5px solid #ccc;
  display: flex;
  align-items: center;
}

.logo-container {
  margin-right: 20px;
}

.logo {
  height: 50px;
  width: auto;
}

ul {
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  flex-grow: 1;
  margin: 0;
  padding: 0;
  height: 100%;
  align-items: center;
}

li {
  color: black;
  font-size: 18px;
  background-color: #fff;
}

a {
  text-decoration: none;
  color: black;
}

li:hover {
  color: #f8683b;
}

.active-tab {
  color: #f8683b;
  font-weight: bold;
}

.profile-container {
  position: relative;
  margin-right: 10px;
  margin-top: 7px;
}

.profile-pic {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
  border: 1.5px solid #ccc;
}

.dropdown-menu {
  position: absolute;
  top: 50px;
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.dropdown-menu ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: block;
}

.dropdown-menu li {
  padding: 10px;
  cursor: pointer;
  text-align: left;
  padding-left: 20px;
  width: 180px;
  box-sizing: border-box;
}

.dropdown-menu li i {
  margin-right: 16px;
}

.dropdown-menu li:hover {
  background-color: #f1f1f1;
}

.dropdown-divider {
  border: none;
  height: 1px;
  background-color: #ccc;
  margin: 0;
}

.disabled {
  pointer-events: none; /* Prevents click events */
}



</style>
