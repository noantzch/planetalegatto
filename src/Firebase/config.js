// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoyYS6Mj7cgCfepvbGzadET4cekzNhpn0",
  authDomain: "legatto-562eb.firebaseapp.com",
  projectId: "legatto-562eb",
  storageBucket: "legatto-562eb.appspot.com",
  messagingSenderId: "1084445377379",
  appId: "1:1084445377379:web:628a9897ea6d371a2d0956",
  measurementId: "G-CBP6TV6EBH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);