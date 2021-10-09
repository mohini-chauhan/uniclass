import React from "react";

import logo from "./logo.png";

const Navbar = () => {
    return (
        <div className="menu-container">
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                
                <span className="navbar-brand"><a  href="#"><img className="logo" src={logo} alt="logo"/></a></span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    
                   
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mr-auto">
                            <li className="nav-item active"><a class="nav-link" href="#">Courses<span class="sr-only">(current)</span></a></li>
                            <li className="nav-item"><a class="nav-link" href="#">Colleges</a></li>
                            <li className="nav-item"><a class="nav-link" href="#">Corporates</a></li>
                            <li className="nav-item"><a class="nav-link" href="#">How it works</a></li>
                            <li className="nav-item"><a class="nav-link" href="#">Hire Developer</a></li>
                            <button className="nav-btn">Sign In</button>

                        </ul>
        
                    </div>
                    
                    
                    
            </nav>
            
            
            
            
            
            
        </div>
    )
}

export default Navbar
