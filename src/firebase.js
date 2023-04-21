// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwZAS9LJ3_H1ABEBjHKf0QcD0bFxWR9ls",
  authDomain: "notificacionpwa-9b363.firebaseapp.com",
  projectId: "notificacionpwa-9b363",
  storageBucket: "notificacionpwa-9b363.appspot.com",
  messagingSenderId: "1085072050797",
  appId: "1:1085072050797:web:71332c41dc19cc0f220d64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app)