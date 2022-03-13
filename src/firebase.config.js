import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC38qCA8DhzqQfJx2aDhMJdwKfkV4hR1PU",
  authDomain: "house-marketplace-app-b3f20.firebaseapp.com",
  projectId: "house-marketplace-app-b3f20",
  storageBucket: "house-marketplace-app-b3f20.appspot.com",
  messagingSenderId: "1072304478894",
  appId: "1:1072304478894:web:149b32baa7d19b86aaeb3f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFireStore();
