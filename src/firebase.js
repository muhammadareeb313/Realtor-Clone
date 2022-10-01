import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7XExOYlvGu81uHRYIEkIRNsdn8RKlmPE",
  authDomain: "realtor-75547.firebaseapp.com",
  projectId: "realtor-75547",
  storageBucket: "realtor-75547.appspot.com",
  messagingSenderId: "642854930023",
  appId: "1:642854930023:web:7ee219ce21c76d67da76c2",
  measurementId: "G-0EV695CNV4"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();