import React from "react";
import FrameworksRow from "./FrameworksRow";
import LanguagesRow from "./LanguagesRow";
import SkillsHeader from "./SkillsHeader";
import ToolsRow from "./ToolsRow";
import '../../styles/skills.css';
import { useLocation } from "react-router-dom";

export default function SkillsRoute() {
    /* 
    */
   const loc = useLocation();
   console.log(`Skills route initialized at: ${loc.pathname}`);
    return (
        <div className="container">
            <SkillsHeader />
            <div className="row">
                <div className="col">
                    <LanguagesRow />
                    <ToolsRow />
                </div>
                <div className="col">
                    <FrameworksRow />
                </div>
            </div>
        </div>
    )
}