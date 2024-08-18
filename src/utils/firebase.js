import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQAPezriwS-GyYB-jPtzjK29bXtAuLiCg",
  authDomain: "netflix-gpt-82b47.firebaseapp.com",
  projectId: "netflix-gpt-82b47",
  storageBucket: "netflix-gpt-82b47.appspot.com",
  messagingSenderId: "84730721784",
  appId: "1:84730721784:web:0365ad0afe473b6e45d20d",
  measurementId: "G-SY5Y1WY51J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
