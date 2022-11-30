import React from 'react'
import "./useEffect.css"
import {useState, useEffect } from 'react'
import Signup from '../../screen/Signup';
import Login from '../../screen/Login';

function UseEffect () {
const [todos, setTodos] = useState();
const [inputData, setInputData] = useState();
const [isTrue, setIsTrue] = useState(true);


const changeIsTrue = ()=>{
  setIsTrue(!isTrue)
}

// Case 1
// useEffect(()=>{
//   async function fetchData (){
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos')
//     console.log("fetch response", response)
    
//     const result = await response.json()
//     console.log("result", result)
    
//     setTodos(result)
   
//   } fetchData();
// }
// ,[])


// Use Effect Case : 2 OnChange of Dependency array

// useEffect(()=>{
//   console.log("useEffect Chala");
//   console.log(inputData)

// },[inputData])

// const changeState = (inputData)=>{
// setInputData(inputData)
// }

// Use Effect Case 3:  Event.Listener ko remove karnay k liye 


  


  return (
    <div>
      <h1>fayyaz ansari</h1>
      {/* <h1>Use Effect Case : 1</h1>

      {todos ? todos.map((item, index)=>{
        return <li key={index}>{item.title}</li>
      }): <h1>Loader</h1>
    } */}

    {/* <h1>Use Effect Case : 2 OnChange of Dependency array</h1> */}
    {/* <input type="text"  onChange={(e)=>{changeState(e.target.value)}} /> */}

    {/* <h1>Use Effect Case : 3 Event.Listener ko remove karnay k liye </h1>
    {isTrue ? <Signup /> : <Login />}

    <button onClick={()=>{changeIsTrue()}}>change</button> */}


    </div>
  )
}

export default UseEffect