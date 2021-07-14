import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCawFG-OXXv6luYbLj59q5fEtqIl8xEBag",
  authDomain: "ninja-firestock.firebaseapp.com",
  projectId: "ninja-firestock",
  storageBucket: "ninja-firestock.appspot.com",
  messagingSenderId: "244954917282",
  appId: "1:244954917282:web:ca73ffe54faca3c7f02afb",
  measurementId: "G-CW6K4SWN5E",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
