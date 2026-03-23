import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // 1. Add this

const firebaseConfig = {
  apiKey: "AIzaSyAMARpBdJBZKSJpEwgwAKZmaxjB18JraRo",
  authDomain: "wayzentech-db.firebaseapp.com",
  projectId: "wayzentech-db",
  storageBucket: "wayzentech-db.firebasestorage.app", // 2. Ensure this is correct
  messagingSenderId: "564540262247",
  appId: "1:564540262247:web:1a2d2ebc2c2de236b891c2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app); // 3. Export storage