
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home"
import About from "./About"
import Vans from "./Vans"
import VanDetail from "./VanDetail"


export default function AppRouter(){


    return(
        <>
        <Router>
         <nav> 
            <Link to="/" 
            className="home__link"
            >
            <h1 >#VANLIFE</h1>
            </Link>

            <Link to="/about" className="about__link">
            About
            </Link>

            <Link to="/vans" className="vans__link">
           Vans
            </Link>

       
         </nav>
            <Routes>

                <Route 
                path="/" 
                element={<Home />}
                />  

                <Route 
                path="/about"
               element={<About />}
               />  

                <Route 
                path="/vans"
               element={<Vans />}
               />  

                <Route
                path="/vans/:id"
               element={<VanDetail />}
               />  

            </Routes>
        </Router>
        
        </>
    )
}