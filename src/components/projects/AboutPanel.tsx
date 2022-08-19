import React from "react";
import '../../styles/about.css';
export default function AboutPanel() {
    /*
    This needs:
    1. Name/ greeting
    2. Brief introduction (what I do, etc)
    3. Invitation to view projects below
    4. Picture
    */
    return (
        <div className="align-self-center bg-primary abt-panel">
            <div className="row">
                <div className="col-md-9">
                    <h1 className="display-1 typing">Hi. I'm Hayden Setlik.</h1>
                    <hr></hr>
                    <div className="abt-body">
                        <h3>I'm a C++ and full stack web developer.</h3>
                        <p>I write software with React, ASP.NET, and various flavors of C++. I've had a lifelong 
                           passion for creating things and solving problems. In the realm of programming, my own 
                           interests led me to learning about and writing various types of software in different environments, 
                           including audio plugins built with the JUCE framework, web apps built with React.js, APIs built with PostgreSQL and ASP.NET.
                           You'll see a collection of my past projects below; I invite you to take a look around. 
                           Click on any project to see more details or to view the source code on GitHub.
                        </p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="row img-row">
                        <img className="portrait-img" src='/img/portrait.png' alt='portrait' />
                    </div>
                </div>
            </div>
        </div>
    )
}