import React from "react";
import { webProjectDescriptions } from "../../info/projectDescriptions";
import ProjectDescription from "../common/ProjectDescription";

export default function WebProjectsRoute() {

    return(
    <div className="container">
        {webProjectDescriptions.map(desc => (
            <div className="row">
                <ProjectDescription {...desc} />
            </div>
        ))}
    </div>
    )
}