import React from "react";
import { ResponsiveAppBar } from "./appBar/ResponsiveAppBar";
import { useState, useEffect } from "react";
import { createUser } from "../../config/Firebase";
import { logInUser } from "../../config/Firebase";
import swal from "sweetalert";

const Header = (props) => {
  const userCreateWithFireBase = async (userData) => {
    const result = await createUser(userData);

    if(!result.error){
      await swal(
        "Registered successfully Completed !",
        "You Signed Up!",
        "success"
      )
      return {error: false}
    }else{
      await swal(result.message.slice(10), "SignUp Failed!", "error");
      return {error: true}
    }
   
  };
  const goToLogInAfterSignedUp = async (changePage, signup) => {
   

    return changePage(!signup);
  };


  const userSignInWithFireBase = async (userData) => {
    const res = await logInUser(userData);
    console.log("handle response >>>> ", res);

    if (!res.error) {
      const swalResultInLogIn = async () => {
        let swalReturn = await swal(
          "Logged In successfully Completed !",
          "You Logged In!",
          "success"
        );
        console.log("swalReturn>>>>", swalReturn);
      };
      swalResultInLogIn();
      // setLogInData(currentUser);
      return {error : false}
    } else {
      swal(res.message, "Logged In Failed!", "error");
      return {error : true}

    }
  };
  const dashboardAfterLogin = async(setDashboard, dashboard) => {
     await setDashboard(!dashboard);
  };

  return (
    <div>
      {/* <h1>Header</h1> */}
      <ResponsiveAppBar
        signup={userCreateWithFireBase}
        dashboardAfterLogined={dashboardAfterLogin}
        login={userSignInWithFireBase}
        changeScreen={goToLogInAfterSignedUp}
        userLogOut = {props.userLogOut}
        getCurrentUser = {props.getCurrentUser}
        changeForGetData = {props.changeForGetData}
      />
    </div>
  );
};

export default Header;
