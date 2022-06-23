import React from "react";
import { getProject } from "../../../app/projectInfo";

interface Props {
    name: string
}

export default function ProjectModalHeader({name}: Props) {
    const project = getProject(name); 
    return (
        <>
            {project && (
                <div className="row">
                    <h3>{project.name}</h3>
                    <p className="short-desc">{project.desc}</p>
                    <p className="platform-header">{`Platform: ${project.platform}`}</p>
                </div>
            )}
        </>
    )
}