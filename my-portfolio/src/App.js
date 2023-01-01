import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Intro from './pages/Intro';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import "./css/nav.css";
import './css/app.css';
import './css/pages.css';
import './css/intro.css';
import "./css/about.css";
import "./css/experience.css";
import './css/projects.css';
import './css/contact.css';


function App() {
    return (
        <div>
            <header>
                <Nav />
            </header>
            <Intro />
            <About />
            <Experience />
            <Projects />
            <Contact />
            <footer>
                <p><small>&copy; 2022 by
                    Suncerie Daye, All Rights Reserved ~
                    </small>
                </p>
            </footer>
        </div>

    );

}

export default App;