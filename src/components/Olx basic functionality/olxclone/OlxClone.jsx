import React from "react";
import {Content} from "./content/Content";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import { auth } from "./../config/Firebase";
import { signOut } from "firebase/auth";
import { useState, useEffect } from "react";
const OlxClone = () => {

  const [forGetData, setforGetData] = useState(true);
  const changeForGetData = ()=>{
    setforGetData(!forGetData)
    console.log("fayyaz anasireijsakfjafjiawj")
  }
  const changeStateOfContentForGetData =(forGetData, setForGetData)=>{
    setForGetData(!forGetData)
  }
  // useEffect(() => {

  // }, [forGetData]);
  const userLogOut = () => {
    signOut(auth);
 
  };
  const getCurrentUser = () => {
   

    console.log("get current user")
    
  };
  return (
    <div>
      {/* <h1>OlxClone</h1> */}
      <Header changeForGetData={changeForGetData}  userLogOut={userLogOut} getCurrentUser={getCurrentUser} />
      <Content changeStateOfContentForGetData ={changeStateOfContentForGetData} />
      <Footer />
    </div>
  );
};

export default OlxClone;
