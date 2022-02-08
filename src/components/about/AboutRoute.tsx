import React from "react";
import "../../styles/about.css";
import "../../styles/color.css";
import AboutBackground from "./background/AboutBackground";
import LandingForeground from "./AboutForeground";

export default function LandingRoute() {
    return(
        <div>
            <LandingForeground />
            <AboutBackground />
        </div>
    )
}