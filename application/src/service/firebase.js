import firebase from "firebase";
//import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAeSOixEzfjZ-MHMgKKM-4ZYIpNIq6yJoA",
  authDomain: "together-cf93e.firebaseapp.com",
  databaseURL: "https://together-cf93e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "together-cf93e",
  storageBucket: "together-cf93e.appspot.com",
  messagingSenderId: "966989389316",
  appId: "1:966989389316:web:9cfade89d4217bb5401f51",
  measurementId: "${config.measurementId}"
};

firebase.initializeApp(firebaseConfig);