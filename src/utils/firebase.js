// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkwxyhRsLAj_1sqbh3rJazRBfQpVEi37E",
  authDomain: "netflix-gpt-34b6e.firebaseapp.com",
  projectId: "netflix-gpt-34b6e",
  storageBucket: "netflix-gpt-34b6e.appspot.com",
  messagingSenderId: "775211349401",
  appId: "1:775211349401:web:fa4f8fcb5c8cdbd6a88f08",
  measurementId: "G-LXWSE9N2E2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
