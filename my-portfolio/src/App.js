import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Intro from './pages/Intro';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './pages/pages.css';
import './app.css';

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
        </div>

    );

}

export default App;