import React from "react";
import { NavLink } from "react-router-dom";




function Navbar() {




  return <div>
    
    <NavLink to="/" style={{textDecoration:"none" }}> Go to Home</NavLink> <br />
    <NavLink to="/about" style={{textDecoration:"none"}}> About</NavLink>
  </div>
}





export default Navbar;