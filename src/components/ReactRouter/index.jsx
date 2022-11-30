import React from "react";
import {BrowserRouter, Routes, Route,Router,NavLink} from "react-router-dom";
import Home from './Home'
import About from './About'
import NoPage from "./NoPage";
import './index.css'
import Layout from "./Layout";





function ReactRouter() {




  return (
    // <Home />
    // <About />
    <BrowserRouter>
      <Routes>

        {/* <Route path="/" Component={Home} />
        <Route path="/about" Component={About} /> */}

        <Route path="/" element={<Layout />}  >
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoPage />} />
        </ Route>

   </Routes> 
    </BrowserRouter>

  )
}





export default ReactRouter;

