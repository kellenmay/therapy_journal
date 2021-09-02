// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDosSXHo9mtFms4-rrhC2yqE2jqvyZ4Wa8",
  authDomain: "therapy-journal-9edfb.firebaseapp.com",
  projectId: "therapy-journal-9edfb",
  storageBucket: "therapy-journal-9edfb.appspot.com",
  messagingSenderId: "574497016646",
  appId: "1:574497016646:web:641328cd63d372bd8b7347",
  measurementId: "G-5HLYY5WQ0M"
};

// Initialize Firebase
const fire = initializeApp(firebaseConfig);


export default fire