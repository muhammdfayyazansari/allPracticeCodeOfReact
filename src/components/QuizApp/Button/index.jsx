import React from 'react';
import './app.css'


function NextButton(props) {


  return <div className="buttonDiv">

      {props.buttonName == 'NEXT' ? <button className="nextButton" onClick={(e)=>{props.next_Question(); props.inputOff(); console.log(e.target.classList)}}>{props.buttonName}</button>
      : props.buttonName == 'SUBMIT' ? <button className="nextButton" onClick={()=>{props.lastTureValue(); props.submit_Quiz(false);  }}>{props.buttonName}</button>
    : <button className="nextButton" onClick={()=>{props.reStartQuiz()}}>{props.buttonName}</button>}

      {/* <button className="nextButton" onClick={()=>{props.next_Question('fayyaz'); props.inputOff()}}>{props.buttonName}</button> */}
  {/* <button className="nextButton" onClick={()=>{props.inputOff('fayyaz ansari'); props.}}>NEXT</button> */}
</div>
}

export default NextButton;
