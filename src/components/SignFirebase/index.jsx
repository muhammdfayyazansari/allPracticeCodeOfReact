import React from "react";
import { useState, useEffect } from "react";
import Dashboard from "../../screen/Dashboard/Dashboard";
import Login from "../../screen/Login";
import Signup from "../../screen/Signup";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./../config/Firebase";

const SignUpWithFirebase = () => {
  const [signScreen, setSignScreen] = useState(true);
  const [dashBoard, setDashBoard] = useState(undefined);
  const [UIDcurrentUser, setUIDCurrentUser] = useState();


  const changeScreen = () => {
    setSignScreen(!signScreen);
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log("user UID in Main File >>> ", uid);
        setDashBoard(true);
        setUIDCurrentUser(uid)
        // ...
      } else {
        setDashBoard(false);
        // User is signed out
        // ...
      }
    });
  }, []);
  if(undefined === dashBoard){
   return <h1>Loading.....</h1>
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>

      

      {dashBoard ? (
        <Dashboard UIDcurrentUser={UIDcurrentUser} />
      ) : signScreen ? (
        <Signup changeScreen={changeScreen} />
      ) : (
        <Login changeScreen={changeScreen} setDashboard={setDashBoard} />
      )}
    </div>
  );
};

export default SignUpWithFirebase;
