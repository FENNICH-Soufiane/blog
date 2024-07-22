// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-d2d23.firebaseapp.com",
  projectId: "blog-d2d23",
  storageBucket: "blog-d2d23.appspot.com",
  messagingSenderId: "185313941068",
  appId: "1:185313941068:web:99bc06f9dc295fbb2e06e9",
  measurementId: "G-MKXJCLD86R"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);