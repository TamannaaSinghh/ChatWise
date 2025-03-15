
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-42fb7.firebaseapp.com",
  projectId: "reactchat-42fb7",
  storageBucket: "reactchat-42fb7.firebasestorage.app",
  messagingSenderId: "667387420701",
  appId: "1:667387420701:web:fcbc1aa662f7f056cae6f4"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
