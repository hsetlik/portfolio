import React from "react";
import "../../styles/about.css";
import self from "../../assets/self.png";

export default function AboutHeader() {
    return (
            <div className="container row">
                <div className="col">
                    <h1 className='outlined'>Hi. I'm Hayden.</h1>
                </div>
                <div className="col" >
                    <img src={self} className="self-img" alt="image missing" />
                </div>
            </div>
    )
}

