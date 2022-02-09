import React from "react";
import { webProjectDescriptions } from "../../info/projectDescriptions";
import ProjectDescription from "../common/ProjectDescription";
import "../../styles/project-description.css"
import WebProjectsHeader from "./WebProjectsHeader";

export default function WebProjectsRoute() {

    return(
    <div className="container outer-container" >
        <WebProjectsHeader />
        {webProjectDescriptions.map(desc => (
            <div className="container" key={desc.name}>
                <ProjectDescription {...desc} />
            </div>
        ))}
    </div>
    )
}