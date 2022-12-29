import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CustomButton from "./../../components/CustomButton";
// import {IsSignup} from './../Form/index'
import { useState } from "react";
import { logInUser } from "../../components/config/Firebase";
import swal from "sweetalert";


function Login(props) {
  let currentUser = { email: "", password: "" };
  const [logInData, setLogInData] = useState(currentUser);
  
  const handleLogIn = async () => {
    const res = await logInUser(logInData);
    console.log("handle response >>>> ", res)

    if(!res.error){
      const swalResultInLogIn= async ()=>{
        let swalReturn = await swal(
          "Logged In successfully Completed !",
          "You Logged In!",
          "success",
        )
        console.log("swalReturn>>>>", swalReturn)
        return props.setDashboard(true);
      }
      swalResultInLogIn();
      setLogInData(currentUser);
    }else{
      swal(
        res.message,
        "Logged In Failed!",
        "error"
      );
    }




    
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "70vh",
          flexDirection: "column",
          justifyContent: "space-between",
          border: "2px solid #0275d8",
          width: "70vh",
          padding: 30,
          borderRadius: 10,
        }}
      >
        <h1>LogIn</h1>
        <TextField 
        type="email"
        id="outlined-basic" 
        label="Email" 
        variant="outlined"
        value={logInData.email}
        onChange={(e)=>{setLogInData({...logInData, email: `${e.target.value}`})}}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          value={logInData.password}
          onChange={(e)=>{setLogInData({...logInData, password: e.target.value})}}
        />
        <Stack spacing={2} direction="row">
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Button variant="contained" onClick={()=>{handleLogIn()}}>Log In</Button>
            <Button
              variant="outlined"
              onClick={() => {
                props.changeScreen();
              }}
            >
              Sign UP Instead
            </Button>
            {/* <CustomButton signup ={()=>props.changePage()} buttonName="Sign UP Instead"/> */}
          </div>
        </Stack>
      </div>
    </div>
  );
}

export default Login;
