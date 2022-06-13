import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/nav.css";

export default function NavigationBar() {
    const nav = useNavigate();

    return (
        <div className="btn-group">
            <div className="btn btn-primary" onClick={() => nav("/")}>Projects</div>
            <div className="btn btn-primary" onClick={() => nav("/skills")}>Skills</div>
            <div className="btn btn-primary" onClick={() => nav("/contact")}>Contact</div>
        </div>
    )
}