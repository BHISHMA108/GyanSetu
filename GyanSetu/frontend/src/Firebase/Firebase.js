// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"



    const firebaseConfig = {
    apiKey: "AIzaSyAr7k7_py3Vc7rW6EWVekwi_xTlExn0vTQ",
    authDomain: "mainprototype-5f867.firebaseapp.com",
    projectId: "mainprototype-5f867",
    storageBucket: "mainprototype-5f867.firebasestorage.app",
    messagingSenderId: "641112578398",
    appId: "1:641112578398:web:dc69730c60d193803ad7cf",
    measurementId: "G-6S48M4BNJZ"
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app , auth};