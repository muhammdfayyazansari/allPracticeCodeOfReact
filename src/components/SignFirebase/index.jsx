import React from 'react';
import { useState, useEffect } from 'react';
import Login from '../../screen/Login';
import Signup from '../../screen/Signup';

const SignUpWithFirebase = () => {
  const [signScreen, setSignScreen] = useState(true);
  


  const changeScreen = ()=>{
    setSignScreen(!signScreen)
  }

  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      {signScreen ? <Signup changeScreen={changeScreen} /> : <Login changeScreen={changeScreen} />}


    </div>
  )
}

export default SignUpWithFirebase