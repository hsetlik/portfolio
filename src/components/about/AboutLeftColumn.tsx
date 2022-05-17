import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/about.css";


export default function AboutLeftColumn() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/contact")
    }
    return (
        <div className="container col">
            <p >
                I'm a full stack web developer and C++ audio programmer from Denver, Colorado.
            </p>
            <button className="btn btn-primary" onClick={handleClick} >Contact Me</button>
        </div>
    )
}