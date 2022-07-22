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
                    <div className="abt-body">
                        <h3>I'm a C++ and full stack web developer.</h3>
                        <p>I create software with React, ASP.NET, and various flavors of C++.</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="row img-row">
                        <img className="portrait-img" src='/portfolio/img/portrait.png' alt='portrait' />
                    </div>
                </div>
            </div>
        </div>
    )
}