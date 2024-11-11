// src/Utils/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDi0QKByNVY4EDmVG9dNU7LTxopZ4Sy2e0",
    authDomain: "fiftyshadesofgrape-15ad6.firebaseapp.com",
    projectId: "fiftyshadesofgrape-15ad6",
    storageBucket: "fiftyshadesofgrape-15ad6.appspot.com",
    messagingSenderId: "166868530260",
    appId: "1:166868530260:web:9018bba7d424afeb3a29c1"
  };
const app = initializeApp(firebaseConfig);
// const messaging = getMessaging(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// export const requestPermission = async () => {
//   try {
//     const permission = await Notification.requestPermission();
//     if (permission === "granted") {
//       console.log("Notification permission granted.");
//       const currentToken = await getToken(messaging, {
//         vapidKey: "BLFO5sxyYak23Daz-3UtpJ5qzjrqdSp9r-fhohyPJXje35qZGKbaJ1iiGu_Sn9L6IMpJ571rXJWYXZW_nla-iks",
        
//         serviceWorkerRegistration: await navigator.serviceWorker.register('/firebase-messaging-sw.js')
//       });
//       if (currentToken) {
//         console.log("FCM Token:", currentToken);
//         sessionStorage.setItem("FCM Token", currentToken)
//         // Send the token to your server and save it
//       } else {
//         console.error("No registration token available. Request permission to generate one.");
//       }
//     } else {
//       console.error("Unable to get permission to notify.");
//     }
//   } catch (error) {
//     console.error("Error requesting permission or getting token:", error);
//   }
// };


// // requestPermission();


// onMessage(messaging, (payload) => {
//   console.log("Message received. ", payload);
//   toast.success(payload?.data?.title)

//   // Customize the UI to display the notification content
// });


export { auth, googleProvider };
