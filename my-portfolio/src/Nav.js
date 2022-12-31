import React from "react";


function Nav(){
    return (
        <nav className="nav">
           <div className="dropdown">
                <button class="dropbtn">Menu</button>
                <div className="dropdown-content">
                    <a href="#">Blog</a>
                    <a href="#intro">Home</a>
                    <a href="#about">About</a>
                    <a href="#experience">Experience</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
            </div> 
        </nav>
            
    );
    
}

export default Nav;