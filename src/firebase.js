import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

    const firebaseConfig = {
        // The firebase if from our shared firebase account
        apiKey: "AIzaSyBIvMKxanaRLaXbKNyMjvnrT51qiOXUGUQ",
        authDomain: "hiddenkittens-ce78f.firebaseapp.com",
        projectId: "hiddenkittens-ce78f",
        storageBucket: "hiddenkittens-ce78f.appspot.com",
        messagingSenderId: "217815978130",
        appId: "1:217815978130:web:c3060088a75f253434564b",
        measurementId: "G-QLL1TDRGGH"
    };

    const firebaseApp = initializeApp(firebaseConfig);
    const auth = getAuth(firebaseApp);

    export default firebaseApp;

    
