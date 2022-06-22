import { observer } from "mobx-react-lite";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/nav.css";

export default observer(function NavigationBar() {
    const nav = useNavigate();
    const loc = useLocation();
    const suffixA = loc.pathname === "/" ? " selected" : "";
    const suffixB = loc.pathname === "/skills" ? " selected" : "";
    const suffixC = loc.pathname === "/contact" ? " selected" : "";
    return (
        <div className="btn-group">
            <div className={"btn btn-primary" + suffixA}onClick={() => nav("/")}>Projects</div>
            <div className={"btn btn-primary" + suffixB} onClick={() => nav("/skills")}>Skills</div>
            <div className={"btn btn-primary" + suffixC} onClick={() => nav("/contact")}>Contact</div>
        </div>
    )
})