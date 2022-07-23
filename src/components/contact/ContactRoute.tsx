import React from "react";
import { useLocation } from "react-router-dom";

export default function ContactRoute(){
    /* 
        this needs:
        1. Header
        2. Email link
        3. Profile links (github/linkedin
    */
   const loc = useLocation();
   console.log(`Contact route initialized at: ${loc.pathname}`);
    return (
        <div className="container align-self-center bg-primary">
            <div className="col">
                <h2>Contact me</h2>
                <p>Maybe some little subhead here</p>
                <p className="subhead"></p>
            </div>
        </div>
    )
}