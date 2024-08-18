import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAr5EUX1p_fDRO6ScoNz-QaBP9OeJjKqDk",
  authDomain: "netflix-gpt-ce98e.firebaseapp.com",
  projectId: "netflix-gpt-ce98e",
  storageBucket: "netflix-gpt-ce98e.appspot.com",
  messagingSenderId: "252437432961",
  appId: "1:252437432961:web:e8a398b903db9317531b80",
  measurementId: "G-SDMNHB8ZK4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
