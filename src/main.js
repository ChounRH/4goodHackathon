import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css';    

import router from './router/index.js'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPY23mWkv_eTgMStyTi40vK2t5yhxoGCg",
  authDomain: "h4ghackathon.firebaseapp.com",
  projectId: "h4ghackathon",
  storageBucket: "h4ghackathon.firebasestorage.app",
  messagingSenderId: "349800598849",
  appId: "1:349800598849:web:e3a52e87e44d5acea2a5c0",
  measurementId: "G-3X8PKT9THJ"
};

initializeApp(firebaseConfig);

const app = createApp(App)

app.use(PrimeVue, {
  theme: {
      preset: Aura
  }
});

app.use(router)

app.mount('#app')
