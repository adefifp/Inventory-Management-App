// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoB08ksw__X_kYJYC044sx420LnxAI9es",
  authDomain: "inventory-management-pro-5ec2b.firebaseapp.com",
  projectId: "inventory-management-pro-5ec2b",
  storageBucket: "inventory-management-pro-5ec2b.appspot.com",
  messagingSenderId: "5245631694",
  appId: "1:5245631694:web:2dcda2f0b95d5f6303649f",
  measurementId: "G-BLWSNKF8LZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore};