import React from "react";
import './app.css';



function Options(props) {


  return <>
    <div className="optionDiv">
    {
      props.options.options.map((item,index)=>{
        return <div className="inputDiv" key={index}>
          
          <input type="radio" onClick={(e)=>{
            console.log(e)
              props.getInputValue(e)}} name={props.options.answer} id={`index${index}`} />
          <label className="inputLabel" htmlFor={`index${index}`}><h6 >{item}</h6></label></div>
      })
    }


    </div>


  </>
}




export default Options;