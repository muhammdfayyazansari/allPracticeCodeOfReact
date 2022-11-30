import React from "react";
import {useState} from "react";
import './app.css'



function Question (props){

  
  return <>
  <div className="questionDiv">
    <h5 className="questionHeading">{props.question.question}</h5>
  </div>
  
  </>
}


export default Question;