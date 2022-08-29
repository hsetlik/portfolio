import React from "react";
import FrameworksRow from "./FrameworksRow";
import LanguagesRow from "./LanguagesRow";
import SkillsHeader from "./SkillsHeader";
import ToolsRow from "./ToolsRow";
import '../../styles/skills.css';
// import { useLocation } from "react-router-dom";

export default function SkillsRoute() {
    /* 
    */
//    const loc = useLocation();
//    console.log(`Skills route initialized at: ${loc.pathname}`);
    return (
        <div className="skills-route">
            <div className="col skill-col">
                <SkillsHeader />
                <FrameworksRow />    
            </div> 
            <div className="col skill-col">
                <LanguagesRow />
                <ToolsRow />
            </div> 
        </div>
    )
}