// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWnFwBxsd1SDSXHjEOR2_Z5FsRqxJ2nH0",
  authDomain: "netfilxgpt-293ba.firebaseapp.com",
  projectId: "netfilxgpt-293ba",
  storageBucket: "netfilxgpt-293ba.appspot.com",
  messagingSenderId: "221021087450",
  appId: "1:221021087450:web:d78eb345cc3c9b96ada7e3",
  measurementId: "G-NJ2EFENDSS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
