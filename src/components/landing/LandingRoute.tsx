import React from "react";
import "../../styles/landing.css"

interface Props {
    handleEnter: () => void
}


export default function LandingPage({handleEnter}: Props) {
    return (
        <div className="container background-gif">
           
                <div>
                    <h1>Hayden Setlik</h1>
                    <p>Full stack web development</p>
                    <p>C++ Audio Programming</p>
                </div>
                <button onClick={handleEnter} className="enter-btn">
                    Enter
                </button>
        </div>
    )



}