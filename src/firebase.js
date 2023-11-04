// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDs3d4Nh8X5zVyfrtVuUK3N8gOpQz1fSPo",
  authDomain: "chat-8c3ba.firebaseapp.com",
  projectId: "chat-8c3ba",
  storageBucket: "chat-8c3ba.appspot.com",
  messagingSenderId: "707003814459",
  appId: "1:707003814459:web:e7f02df3cb6a457f6fc21e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);