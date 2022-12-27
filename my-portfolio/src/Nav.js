import React from "react";

function Nav(){
    return (
        <nav>
            <div className="dropdown">
                <button class="dropbtn">Dropdown</button>
                <div className="dropdown-content">
                    <a href="#">Blog</a>
                    <a href="#intro">Home</a>
                    <a href="#about">About</a>
                    <a href="#resume">Experience</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </nav> 
    );
    
}

export default Nav;