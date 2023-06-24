// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import * as functions from 'firebase-functions';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: functions.config().fb.apikey,
  authDomain: functions.config().fb.authdomain,
  projectId: functions.config().fb.projectid,
  storageBucket: functions.config().fb.storagebucket,
  messagingSenderId: functions.config().fb.messagingsenderid,
  appId: functions.config().fb.appid,
  measurementId: functions.config().fb.measurementid
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);