import React from "react";

function Projects() {
    return <div id="projects" className="page">
        <h1>Projects</h1>
        <section class="carousel" aria-label="carousel" Tabindex="0">
            <a class="carousel__skip-link" href="#skip-link">Skip the Carousel</a>
            <div class="slides">
                <div class="slides-item slide-1" id="slide-1" aria-label="slide 1 of 5" tabindex="0">1</div>
                <div class="slides-item slide-2" id="slide-2" aria-label="slide 2 of 5" tabindex="0">2</div>
                <div class="slides-item slide-3" id="slide-3" aria-label="slide 3 of 5" tabindex="0">3</div>
                <div class="slides-item slide-4" id="slide-4" aria-label="slide 4 of 5" tabindex="0">4</div>
                <div class="slides-item slide-5" id="slide-5" aria-label="slide 5 of 5" tabindex="0">5</div>
            </div>
            <div class="carousel__nav">
                <a class="slider-nav" href="#slide-1" aria-label="Go to slide 1">1</a>
                <a class="slider-nav" href="#slide-2" aria-label="Go to slide 2">2</a>
                <a class="slider-nav" href="#slide-3" aria-label="Go to slide 3">3</a>
                <a class="slider-nav" href="#slide-4" aria-label="Go to slide 4">4</a>
                <a class="slider-nav" href="#slide-5" aria-label="Go to slide 5">5</a>
            </div>
            <div class="carousel__skip-message" id="skip-link" tabindex="0"></div>
        </section>
    </div>
}

export default Projects;