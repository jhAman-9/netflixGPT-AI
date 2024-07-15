// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPpNGOwCWsk-1FbM2UFEfvO14cEY3WmdE",
  authDomain: "netflix-gpt-21d9b.firebaseapp.com",
  projectId: "netflix-gpt-21d9b",
  storageBucket: "netflix-gpt-21d9b.appspot.com",
  messagingSenderId: "948139984466",
  appId: "1:948139984466:web:e46bc0e1219941a17f818b",
  measurementId: "G-WBFJNQXS8F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();