import React from "react";
import {NavLink, Outlet} from 'react-router-dom';
import Navbar from "../Navbar";







function Layout() {




  return (
    <div>
      {/* <NavLink to="/" style={{textDecoration:"none"}}> Go to Home</NavLink><br />
      <NavLink to="/about" style={{textDecoration:"none"}} > Go to About</NavLink> 
    */}
    <Navbar />
    {/* <h1>HOme</h1> */}
    <br />
    <br />
    <Outlet />

    </div>
  )
}





export default Layout;