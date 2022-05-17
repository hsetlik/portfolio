import React from "react";
import "../../styles/about.css";
import AboutHeader from "./AboutHeader";
import AboutLeftColumn from "./AboutLeftColumn";
import AboutRightColumn from "./AboutRightColumn";

export default function AboutForeground(){

    return (

        <div className="container fluid particle-foreground" >
            <div className="row">
                <div className="col">
                    <AboutHeader />
                    <AboutLeftColumn />
                </div>
                <div className="col">
                    <AboutRightColumn />
                </div>
            </div>
        </div>  
    )
}