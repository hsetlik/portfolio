import React from "react";
import ReactPlayer from "react-player";
import { getProject } from "../../../app/projectInfo";
import "../../../styles/modal.css";
import ProjectModalHeader from "./ProjectModalHeader";
import TechnologiesList from "./TechnologiesList";
interface Props {
    name: string
}

export default function ProjectModal({ name }: Props) {
    const project = getProject(name);
    console.log(`Modal for: ${project?.name} is open`);
    return (
        <div className="container-fluid modal-content bg-dark proj-panel">
            {project && (
                <div className="container" >
                    <ProjectModalHeader name={name} />
                    <div className="row modal-lower">
                        { project.technologies && (
                            <TechnologiesList technologies={project.technologies!} /> 
                        )}
                           {project.longDesc && (
                             <div className="col">
                                <h3 className="mono">Details</h3>
                                <p>{project.longDesc}</p>
                             </div>
                           )}
                        {project.video && (
                            <div className="col">
                                <h3 className="mono">Demo Video:</h3>
                                <div className="player-div">
                                    <ReactPlayer
                                    width="100%"
                                    url={project.video} />
                                </div>
                            </div>
                        )}
                        
                    </div>
                </div>
            )}
        </div>
    )
}