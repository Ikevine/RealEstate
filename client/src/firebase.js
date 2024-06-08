// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestatemern-e528f.firebaseapp.com",
  projectId: "realestatemern-e528f",
  storageBucket: "realestatemern-e528f.appspot.com",
  messagingSenderId: "47660844955",
  appId: "1:47660844955:web:0538afb0174409fadc833e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);