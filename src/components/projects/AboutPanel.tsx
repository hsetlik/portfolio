import React from "react";
import '../../styles/about.css';

export default function AboutPanel() {
    /*
    This needs:
    1. Name/ greeting
    2. Brief introduction (what I do, etc)
    3. Invitation to view projects below
    */
    return (
        <div className="container bg-dark abt-panel">
            <h1 className="display-1">Hi. I'm Hayden Setlik.</h1>
            <div className="lead abt-body">
                <h3>I'm a C++ and full stack web developer.</h3>
                <p>I create software with React, ASP.NET, and various flavors of C++.</p>
            </div>
        </div>
    )
}