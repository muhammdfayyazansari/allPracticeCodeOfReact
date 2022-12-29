import React from 'react';
import { useState } from 'react';
import { latestFormData } from '../config/Firebase';

const TestForm = () => {
  const [userId, setUserId] = useState(0);
  const [formData, setFormData] = useState({})
  const setData = ()=>{
    console.log("set data")
    console.log(formData)
    let finalFormData = {...formData, uid : userId}
    setUserId(userId + 1)
    latestFormData(finalFormData)

  }
  return (
    <div>
      <h1>TestForm</h1>
      <input type="text" onChange={(e)=>{setFormData({...formData, name: e.target.value})}} placeholder='Name' /> <br />
      <input type="text" onChange={(e)=>{setFormData({...formData, email: e.target.value})}} placeholder='Email' /> <br />
      <input type="text" onChange={(e)=>{setFormData({...formData, password: e.target.value})}} placeholder='Password' /> <br />
      <button onClick={()=>{setData()}}>Submit</button>



    </div>
  )
}

export default TestForm