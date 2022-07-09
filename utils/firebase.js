// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPLV2DCRao6_mDZribvU6asb_5hHNRB9A",
  authDomain: "lifebuoys-27788.firebaseapp.com",
  projectId: "lifebuoys-27788",
  storageBucket: "lifebuoys-27788.appspot.com",
  messagingSenderId: "293034269701",
  appId: "1:293034269701:web:98c6f20d5e3569aa35906c"
};

let Firebase;

if (!Firebase?.apps?.length) {
    Firebase = initializeApp(firebaseConfig)
}