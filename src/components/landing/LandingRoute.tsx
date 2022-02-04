import React from "react";
import "../../styles/landing.css";
import "../../styles/color.css";
import LandingBackground from "./background/LandingBackground";
import LandingForeground from "./LandingForeground";

export default function LandingRoute() {
    return(
        <div >
            <div className="container ">
                <LandingForeground />
            </div>
            <div className="container">
                <LandingBackground />
            </div>
        </div>
    )
}