// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAtgF8bF7zWM9wAt_CdOow9rMU3AkczOQ",
  authDomain: "car-doctor-e845a.firebaseapp.com",
  projectId: "car-doctor-e845a",
  storageBucket: "car-doctor-e845a.appspot.com",
  messagingSenderId: "801585465722",
  appId: "1:801585465722:web:d90c2d962564334f056ec3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;