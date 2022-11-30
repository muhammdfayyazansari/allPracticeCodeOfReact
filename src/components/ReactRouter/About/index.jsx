import React from "react";
import {useNavigate} from 'react-router-dom'




function About() {
  const navigate = useNavigate();
  const goToHome=()=>{
    navigate('/')
  }
  return <div>
    {/* <Navbar /> */}
    {/* <NavLink to="/" style={{textDecoration:"none" }}> Go to Home</NavLink> <br />
    <NavLink to="/about" style={{textDecoration:"none"}}> About</NavLink> */}
    <h1>About</h1>
    <button onClick={goToHome}>Home</button>
  </div>
}





export default About;