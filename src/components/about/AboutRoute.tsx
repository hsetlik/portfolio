import React from "react";
import "../../styles/about.css";
import "../../styles/color.css";
import AboutBackground from "./background/AboutBackground";
import AboutForeground from "./AboutForeground";

export default function AboutRoute() {
    return(
        <div>
            <AboutForeground />
            <AboutBackground />
        </div>
    )
}