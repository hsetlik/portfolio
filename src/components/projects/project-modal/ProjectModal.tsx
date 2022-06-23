import React from "react";
import { getProject } from "../../../app/projectInfo";
import "../../../styles/modal.css";
import ProjectModalHeader from "./ProjectModalHeader";
interface Props {
    name: string
}

/* 

*/

export default function ProjectModal({ name }: Props) {
    const project = getProject(name);
    console.log(`Modal for: ${project?.name} is open`);
    return (
        <div className="container-fluid modal-content bg-dark">
            {project && (
                <div className="container" >
                    <ProjectModalHeader name={name} />
                    <div className="row">
                        <div className="col">
                            {project.technologies && (
                                <div>
                                    <h5>Technologies:</h5>
                                    <ul>
                                        {project.technologies.map(tech => (
                                            <li>{tech}</li>
                                        ))}
                                    </ul>

                                </div>
                            )}
                        </div>
                    </div>
                    <div className='row'>
                        {project.longDesc && (
                            <p className="long-desc">{project.longDesc}</p>
                        )}
                    </div>

                </div>
            )}
        </div>
    )
}