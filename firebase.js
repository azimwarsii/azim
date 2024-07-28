// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCntbYg-PMTESzrWWHyozvZbezGSg769lU",
  authDomain: "azim-9f279.firebaseapp.com",
  projectId: "azim-9f279",
  storageBucket: "azim-9f279.appspot.com",
  messagingSenderId: "489814386701",
  appId: "1:489814386701:web:2c7babf17c5f1f15eccd44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { app, db};