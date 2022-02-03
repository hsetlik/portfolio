import React from "react";
import "../../styles/landing.css";
import "../../styles/color.css";
import LandingBackground from "./background/LandingBackground";
import LandingForeground from "./LandingForeground";

export default function LandingRoute() {

    return(
        <div className="container">
            <LandingBackground />
            <LandingForeground />
        </div>
    )
}