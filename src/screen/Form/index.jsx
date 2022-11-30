import React from 'react';
import Signup from '../Signup';
import Login from '../Login';
import {useState} from 'react';






// function IsSignUp(){
  //   console.log("muhammad fayyaz ansari")
  // }
  function Form(){
  const [IsSignUp, setIsSignUp ] = useState(true)

  const changeIsSignUp= ()=>{
    setIsSignUp(!IsSignUp)
  }

  return <div style={{display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
    {IsSignUp ? <Signup changePage={changeIsSignUp}  /> : <Login changePage={changeIsSignUp} />}
    
    
    
  
  
  </div>
}


export default Form;