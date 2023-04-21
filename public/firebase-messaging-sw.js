importScripts("https://www.gstatic.com/firebasejs/9.18.0/firebase-app-compat.js")
importScripts("https://www.gstatic.com/firebasejs/9.18.0/firebase-messaging-compat.js")

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
const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging(app)


messaging.onBackgroundMessage(payload=>{
    console.log("Recibiste un mensaje mientras estabas ausente");
    console.log(payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: "./logo192.png"
    };

    return self.registration.showNotification(
        notificationTitle,
        notificationOptions
    )
})