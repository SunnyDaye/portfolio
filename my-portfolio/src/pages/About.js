import React from "react";
import "./about.css";
const headshot = require('../images/suncerie-daye-headshot.jpg')

function About() {
    return <div id="about" className="page">
        <h1>About</h1>
        <div className="about-content">
            <div>
                <img src={headshot} alt="Headshot of Suncerie Daye" />
            </div>
            <div>
                <p>Hello, I’m Suncerie Daye. I am an emerging professional studying Application Development and Testing at
                    Yearup. Currently, I’m a center store associate at Amazon Fresh, where I work primarily with inventory and
                    spend most of my time problem-solving errors. For the past five years, I’ve mainly worked in customer
                    service,
                    where I learned how to provide excellent service to individuals. Now, I want to learn how to provide a
                    service
                    to large groups of people or organizations. I will accomplish this by becoming a software engineer. My
                    persistence and motivation to learn will allow me to become a pillar of reliability and consistency on any
                    software engineering team. In addition, I practice pragmatism and problem-solving skills through work and my
                    many side projects every day. Other than becoming a diligent developer, I spend my time obsessing over
                    sci-fi.
                    I am inspired by movies such as the Matrix. I love too discuss the impact of technology on the world.
                    However,
                    you can also find me in the depths of the pacific northwest's many forest.</p>
            </div>

        </div>
    </div>
}

export default About;