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
  apiKey: "AIzaSyBIvMKxanaRLaXbKNyMjvnrT51qiOXUGUQ",
  authDomain: "hiddenkittens-ce78f.firebaseapp.com",
  projectId: "hiddenkittens-ce78f",
  storageBucket: "hiddenkittens-ce78f.appspot.com",
  messagingSenderId: "217815978130",
  appId: "1:217815978130:web:c3060088a75f253434564b",
  measurementId: "G-QLL1TDRGGH"
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
