import React from "react";

function Intro() {
    return <div id="intro" className="page">
        <div className="">
            <div className="container">
                <div className="Terminal">
                    <div className="Terminal__Toolbar">
                        <div className="Toolbar__buttons">
                            <button className="Toolbar__button Toolbar__button--exit">&#10005;</button>
                            <button className="Toolbar__button">&#9472;</button>
                            <button className="Toolbar__button">&#9723;</button>
                        </div>
                        <p className="Toolbar__user">sunny@ubuntu:~</p>
                    </div>
                    <div className="Terminal__body">
                        <div className="Terminal__text">Hi, my name is</div>
                        <div className="Terminal__Prompt">
                            <span className="Prompt__user">Suncerie Daye:</span><span className="Prompt__location">~</span><span className="Prompt__dollar">$</span>
                            <span className="Prompt__cursor"></span>
                        </div>
                        <div className="Terminal__text">An aspiring software engineer learning to build performant and impactful applications.</div>
                    </div>
                </div>
            </div>
        </div>

    </div>
}

export default Intro;