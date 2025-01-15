<script setup>
import { onMounted, ref, provide } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter, useRoute } from "vue-router";
import PostLoginNavBar from "./components/PostLoginNavBar.vue";
import Modal from "./components/Modal.vue";

const router = useRouter();
const route = useRoute();
const isLoggedIn = ref(false);
const isModalVisible = ref(false);
const modalContentComponent = ref(null); 
const modalData = ref(null);
let auth;

onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    isLoggedIn.value = !!user;
  });
});

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/");
  });
};

const openModal = ({ component, data } = {}) => {
  modalContentComponent.value = component;
  modalData.value = data;
  isModalVisible.value = true;
};

const closeModal = () => {
  isModalVisible.value = false;
  modalContentComponent.value = null;
};

// Provide modal state and function to child components
provide("isModalVisible", isModalVisible);
provide("openModal", openModal);
provide("closeModal", closeModal);
</script>

<template>
  <!-- Insert Modal component at the root level -->
  <Modal :visible="isModalVisible" @close="isModalVisible = false">
    <component :is="modalContentComponent" :modalData="modalData" @close="closeModal" />
  </Modal>

  <!-- Show navbar only if logged in and not on the home route -->
  <PostLoginNavBar v-if="isLoggedIn && route.path !== '/home'" :is-modal-visible="isModalVisible"/>
  <router-view />
</template>

<style>
html,
body,
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
