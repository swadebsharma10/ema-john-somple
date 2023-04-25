// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOIlsnlT5SfUrLbpyPpNhwZ-lEy-9wXNE",
  authDomain: "ema-john-auth-firebase-de609.firebaseapp.com",
  projectId: "ema-john-auth-firebase-de609",
  storageBucket: "ema-john-auth-firebase-de609.appspot.com",
  messagingSenderId: "3444031468",
  appId: "1:3444031468:web:7e496a8a926156d4378ac9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;