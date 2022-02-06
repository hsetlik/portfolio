import React from "react";
import "../../styles/landing.css";
import self from "../../assets/self.png";

export default function LandingHeader() {
    return (
        <div className="container particle-foreground">
            <div className="row">
                <div className="col" id="wide-col">
                    <h1 className='outlined'>Hi. I'm Hayden Setlik.</h1>
                    <p>I'm a full stack web developer and C++ audio programmer from Denver, CO.</p>
                </div>
                <div className="col" id="narrow-col" >
                    <img src={self} className="self-img" />
                </div>
            </div>
            
        </div>
    )
}

