// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getAuth, connectAuthEmulator } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPLV2DCRao6_mDZribvU6asb_5hHNRB9A",
  authDomain: "lifebuoys-27788.firebaseapp.com",
  projectId: "lifebuoys-27788",
  storageBucket: "lifebuoys-27788.appspot.com",
  messagingSenderId: "293034269701",
  appId: "1:293034269701:web:98c6f20d5e3569aa35906c",
};

let app;

if (!app?.apps?.length) {
  app = initializeApp(firebaseConfig);
}

// firestore
export const db = getFirestore(app);
connectFirestoreEmulator(db, "localhost", 8080);

// authentication
export const auth = getAuth(app);
connectAuthEmulator(auth, "http://localhost:9099");
