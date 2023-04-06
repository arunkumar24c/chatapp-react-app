// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXt14exhYtSEwvUsXP2hBA3lMr40sQlAI",
  authDomain: "chat-f9cad.firebaseapp.com",
  projectId: "chat-f9cad",
  storageBucket: "chat-f9cad.appspot.com",
  messagingSenderId: "82535018625",
  appId: "1:82535018625:web:3ed9e29c57cf2e4b175d80",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
