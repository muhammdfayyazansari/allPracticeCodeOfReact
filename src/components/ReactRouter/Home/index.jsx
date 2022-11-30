import React from "react";
import { useNavigate } from "react-router-dom";







function Home() {
const navigate = useNavigate();
const goBack = ()=>{
  navigate(-1)
}



  return (
    <div>
      {/* <NavLink to="/" style={{textDecoration:"none"}}> Go to Home</NavLink><br />
      <NavLink to="/about" style={{textDecoration:"none"}} > Go to About</NavLink> 
    */}
    {/* <Navbar /> */}
    <h1>HOme</h1>
    <button onClick={goBack}> Go Back</button>
    <br />
    <br />
    {/* <Outlet /> */}

    </div>
  )
}





export default Home;