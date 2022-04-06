// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAovKUsWDlyjaOJWzjF6fMOAMaL0tgEmnc",
  authDomain: "tinder-clone-rn-99869.firebaseapp.com",
  projectId: "tinder-clone-rn-99869",
  storageBucket: "tinder-clone-rn-99869.appspot.com",
  messagingSenderId: "244860282255",
  appId: "1:244860282255:web:5978eb6adf9eda44a757fa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };
