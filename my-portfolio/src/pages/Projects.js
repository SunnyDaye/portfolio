import React from "react";

function Projects() {
    return <div id="projects" className="page">
        <h1>Projects</h1>
        <section className="carousel center" aria-label="carousel" tabIndex="0">
            <a className="carousel__skip-link" href="#skip-link">Skip the Carousel</a>
            <div className="slides">
                <div className="slides-item slide-1" id="slide-1" aria-label="slide 1 of 5" tabIndex="0"><a href="https://sunnydaye.github.io/guess-the-number/" target="_blank">Click to view: Guess The Number</a></div>
                <div className="slides-item slide-2" id="slide-2" aria-label="slide 2 of 5" tabIndex="0"><a href="https://sunnydaye.github.io/forms/" target="_blank">Click to view: Forms</a></div>
                <div className="slides-item slide-3" id="slide-3" aria-label="slide 3 of 5" tabIndex="0"><a href="https://sunnydaye.github.io/data-processing/" target="_blank">Click to view: Data Processing</a></div>
                <div className="slides-item slide-4" id="slide-4" aria-label="slide 4 of 5" tabIndex="0"><a href="https://sunnydaye.github.io/seasonal-styles/" target="_blank">Click to view: Seasonal Styles</a></div>
                <div className="slides-item slide-5" id="slide-5" aria-label="slide 5 of 5" tabIndex="0"><a href="https://ajax-random-quotes.sunnydaye.repl.co/ajax_headline2.htm" target="_blank">Click to view: AJAX Random Quotes</a></div>
            </div>
            <div className="carousel__nav">
                <a className="slider-nav" href="#slide-1" aria-label="Go to slide 1">1</a>
                <a className="slider-nav" href="#slide-2" aria-label="Go to slide 2">2</a>
                <a className="slider-nav" href="#slide-3" aria-label="Go to slide 3">3</a>
                <a className="slider-nav" href="#slide-4" aria-label="Go to slide 4">4</a>
                <a className="slider-nav" href="#slide-5" aria-label="Go to slide 5">5</a>
            </div>
            <div className="carousel__skip-message" id="skip-link" tabIndex="0"></div>
        </section>
    </div>
}

export default Projects;