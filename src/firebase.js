// client/src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";       // Login ke liye
import { getFirestore } from "firebase/firestore"; // Database ke liye

// Aapka project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDO3wnplB3BFNlBW8V9JADIGPjpbfpOpXY",
  authDomain: "dynamic-lms.firebaseapp.com",
  projectId: "dynamic-lms",
  storageBucket: "dynamic-lms.firebasestorage.app",
  messagingSenderId: "427763041341",
  appId: "1:427763041341:web:cef8674e017c164fc19654",
  measurementId: "G-J7K27BVMQY"
};

// Firebase Initialize karna
const app = initializeApp(firebaseConfig);

// Auth aur DB ko export karna taaki puri app mein use ho sake
export const auth = getAuth(app);
export const db = getFirestore(app);