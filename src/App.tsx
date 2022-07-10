import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SideBar from "./components/SideBar";
import { db, auth } from "./utils/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

// Add a new document in collection "cities"
const accType = "general";

const setFunct = async () => {
  await setDoc(doc(db, "cities", "LA"), {
    name: "Los Angeles",
    state: "CA",
    country: "USA",
  });
};

const getFunct = async () => {
  const docRef = doc(db, "cities", "LA");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data: ", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
};

function App() {
  return (
    <div style={{ display: "flex" }}>
      <SideBar accType={accType} />
      <div>
        <p className="text-4xl" style={{ margin: "30px" }}>
          Food Waste Management
        </p>
        <img
          src="https://media-exp2.licdn.com/dms/image/C4E1BAQFBXHJMtWLvKA/company-background_10000/0/1539773003536?e=1658037600&v=beta&t=J8-kuGTXASJSFi7SWyEyXATDUx4Vzmzkr_xMmdGjv4I"
          width="500px"
        />
      </div>
    </div>
  );
}

export default App;





