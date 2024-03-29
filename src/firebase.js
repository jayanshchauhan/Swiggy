// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import "firebase/compat/database";
import {getAuth} from "firebase/auth"

// const firebaseConfig = {
//   apiKey: "AIzaSyAJLfZ6u1AUL3Ne0J-qJRLRAeQxCH0Bvnk",
//   authDomain: "food-studio-a10b7.firebaseapp.com",
//   projectId: "food-studio-a10b7",
//   storageBucket: "food-studio-a10b7.appspot.com",
//   messagingSenderId: "182884177059",
//   appId: "1:182884177059:web:5bc7d7e2960f578d54db16",
//   measurementId: "G-R2YQXX0RR4"
// };

const firebaseConfig = {
  apiKey: "AIzaSyCceLbNgHO08aWZdxaEs84RWpFl4SozUwQ",
  authDomain: "swiggy-6a039.firebaseapp.com",
  projectId: "swiggy-6a039",
  storageBucket: "swiggy-6a039.appspot.com",
  messagingSenderId: "535498185679",
  appId: "1:535498185679:web:980c6a7a68933ee04190ba",
  measurementId: "G-V8FR1HL9LS"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);
const database = firebase.database();
const auth = getAuth();

export {firebase, auth, database};