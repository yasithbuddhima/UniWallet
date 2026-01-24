// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_CONFIG_API_KEY,
  authDomain: "uniwallet-5f2ff.firebaseapp.com",
  projectId: "uniwallet-5f2ff",
  storageBucket: "uniwallet-5f2ff.firebasestorage.app",
  messagingSenderId: "488033136515",
  appId: "1:488033136515:web:200b9bce8350c2555650b6",
  measurementId: "G-DP7F837Z3Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

// Initialize firebase db
const db = getFirestore(app);

export { analytics, auth, db };
