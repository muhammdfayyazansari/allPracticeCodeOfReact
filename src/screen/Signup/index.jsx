import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CustomButton from "./../../components/CustomButton";
// import {IsSignup} from './../Form/index'
import { useState, useEffect } from "react";
import { createUser } from "../../components/config/Firebase";
function Signup(props) {
  let user = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  // let user = {
  //   firstName: "Muhammad Fayyaz",
  //   lastName: "Ansari",
  //   email: "fayyaz@gmail.com",
  //   password: "12345678",
  //   confirmPassword: "12345678",
  // };
  const [userData, setUserData] =  useState(user);


  //   useEffect(()=>{
  //     const listener =()=>{
  //       console.log("document listening")
  //     }
  //     document.addEventListener("click", listener)
  //     return ()=>{document.removeEventListener("click",listener)}
  // },[])

  const handleSignUp  = ()=>{
    let emptyData={
      firstName : "",
      lastName : "",
      email : "",
      password : "",
      confirmPassword : '',
    }
    createUser(userData);
    setUserData(emptyData);
  }
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
          height: "80vh",
          flexDirection: "column",
          justifyContent: "space-between",
          border: "2px solid #0275d8",
          width: "70vh",
          marginTop: 30,
          padding: "10px 30px",
          borderRadius: 10,
        }}
      >
        <h1>Signup</h1>
        <TextField
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          value={userData.firstName}
          onChange={(e) => {
            setUserData({...userData, firstName: `${e.target.value}`});
          }}
        />
        <TextField 
        id="outlined-basic" 
        label="Last Name" 
        variant="outlined" 
        value={userData.lastName}
        onChange={(e) => {
          setUserData({...userData, lastName: `${e.target.value}`});
        }}
        />
        <TextField
          id="outlined-basic"
          label="Enter Your Email"
          variant="outlined"
          value={userData.email}
          onChange={(e) => {
            setUserData({...userData, email: `${e.target.value}`});
          }}
        />
        <TextField
          id="outlined-password-input"
          label="Create Password"
          type="password"
          value={userData.password}
          autoComplete="current-password"
          onChange={(e) => {
            setUserData({...userData, password: `${e.target.value}`});
          }}
        />
        <TextField
          id="outlined-password-input"
          label="Conirm Password"
          type="password"
          value={userData.confirmPassword}
          autoComplete="current-password"
          onChange={(e) => {
            setUserData({...userData, confirmPassword: `${e.target.value}`});
          }}
        />
        <Stack spacing={2} direction="row">
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Button variant="contained" onClick={()=>{handleSignUp()}}>Signup</Button>
            <Button
              variant="outlined"
              onClick={() => {
                props.changeScreen();
              }}
            >
              Log in Instead
            </Button>

            {/* <CustomButton buttonName="Log In Instead" signup ={()=>props.changePage()} /> */}
          </div>
        </Stack>
      </div>
    </div>
  );
}

export default Signup;

// import * as React from 'react';
// import Box from '@mui/material/Box';

// export default function BasicTextFields() {
//   return (
//     <Box
//       component="form"
//       sx={{
//         '& > :not(style)': { m: 1, width: '25ch' },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <TextField id="outlined-basic" label="Outlined" variant="outlined" />
//       <TextField id="filled-basic" label="Filled" variant="filled" />
//       <TextField id="standard-basic" label="Standard" variant="standard" />
//     </Box>
//   );
// }
