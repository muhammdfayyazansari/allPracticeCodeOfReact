import logo from '../../logo.svg';
import React from "react";
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
function FirstTask() {
 const [condition, setCondition] = useState(true);
 const reverse = () => {
  setCondition(!condition)
  console.log(condition)
 }
 return (

  // *******************************TASK 1  USE CONDITIONAL RENDERING WITH USESTATE************************************************ 
  <div className='userBody'>
   {/* ***************************************SIGN UP COMPONENT********************************************** */}
   {condition && <div className="container">
    <div className="row d-flex justify-content-center align-items-center" style={{ height: "100vh" }} >
     <div className=" main col-11 col-sm-10 col-md-6 col-lg-4">
      <form style={{ height: "100%" }} >
       <fieldset>
        <legend>
         <h1 className="text-break text-center mb-4 mt-2">Create Account</h1>
        </legend>
        <div className="username form-group">
         <label htmlFor="uName">Username</label>
         <input
          type="text"
          className="form-control form-control-sm"
          id="uName"
          placeholder="Enter Username"
         />
        </div>
        <div className="form-group">
         <label htmlFor="suEmail">Email address</label>
         <input
          type="email"
          className="form-control form-control-sm"
          id="suEmail"
          aria-describedby="emailHelp"
          placeholder="Enter email"
         />
         <small id="emailHelp" className="form-text text-light">
          We'll never share your email with anyone else.
         </small>
        </div>
        <div className="username form-group">
         <label htmlFor="suPassword">Password</label>
         <input
          type="password"
          className="form-control form-control-sm"
          id="suPassword"
          placeholder="Password"
         />
        </div>

        <div className="d-flex justify-content-between pt-3">
         <a className="btn btn-info" onClick={reverse}>
          Sign in instead
         </a>
         <button className="btn btn-primary">
          SIGN UP
         </button>
        </div>
       </fieldset>
      </form>
     </div>
    </div>
   </div>
   }






   {/* ***************************************LOG IN COMPONENT********************************************** */}
   {condition == false &&

    <div className="container" >
     <div className="row d-flex justify-content-center align-items-around py-5">
      <div className=" main col-11 col-sm-10 col-md-6 col-lg-4 mt-5">
       <form style={{ height: "100%" }} >
        <fieldset>
         <legend>
          <h1 className="text-break text-center mb-4 mt-2">Sign In</h1>
         </legend>
         <div className="form-group">
          <label htmlFor="LiEmail">Email address</label>
          <input
           type="email"
           className="form-control form-control-sm"
           id="LiEmail"
           aria-describedby="emailHelp"
           placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-light">
           We'll never share your email with anyone else.
          </small>
         </div>
         <div className="username form-group">
          <label htmlFor="LiPassword">Password</label>
          <input
           type="password"
           className="form-control form-control-sm"
           id="LiPassword"
           placeholder="Password"
          />
          {/* <small id="emailHelp" class="form-text text-light">Password </small> */}
         </div>
         {/* <div class="username form-group">
        <label for="exampleInputPassword1">Confirm Password</label>
        <input type="password" class="form-control form-control-sm" id="exampleInputPassword1" placeholder="Confirm Password">
      </div> */}
         <div className="d-flex justify-content-between pt-3">
          <button onClick={reverse} className="btn btn-info">
           Create Account
          </button>
          <button className="btn btn-primary">
           SIGN IN
          </button>
         </div>
        </fieldset>
       </form>
      </div>
     </div>
    </div>
   }

  </div>

 );
}

export default FirstTask;