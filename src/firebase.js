import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

    const firebaseConfig = {
        // The firebase if from our shared firebase account
        apiKey: "AIzaSyDPY23mWkv_eTgMStyTi40vK2t5yhxoGCg",
        authDomain: "h4ghackathon.firebaseapp.com",
        projectId: "h4ghackathon",
        storageBucket: "h4ghackathon.firebasestorage.app",
        messagingSenderId: "349800598849",
        appId: "1:349800598849:web:e3a52e87e44d5acea2a5c0",
        measurementId: "G-3X8PKT9THJ"
    };

    const firebaseApp = initializeApp(firebaseConfig);
    const auth = getAuth(firebaseApp);

    export default firebaseApp;

    
