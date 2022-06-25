import React from "react";
import FrameworksRow from "./FrameworksRow";
import LanguagesRow from "./LanguagesRow";
import SkillsHeader from "./SkillsHeader";
import ToolsRow from "./ToolsRow";
import '../../styles/skills.css';

export default function SkillsRoute() {
/* 
    
*/
    return (
        <div className="container">
            <div className="col">
                <SkillsHeader />
                <LanguagesRow />
                <FrameworksRow />
                <ToolsRow />
            </div>
        </div>
    )
}