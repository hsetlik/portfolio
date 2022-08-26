import React from "react";
import ReactPlayer from "react-player";
import { getProject } from "../../../app/projectInfo";
import "../../../styles/modal.css";
import GithubButton from "../../common/GithubButton";
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
                    <div className="row">
                        <div className="col">
                            {project.technologies && (
                                <TechnologiesList technologies={project.technologies} />
                            )}
                        </div>
                        <GithubButton name={project.name} />
                    </div>
                    <div className='row'>
                        {project.longDesc && (
                            <p className="long-desc">{project.longDesc}</p>
                        )}
                    </div>
                    <div className="row">
                        {project.video && (
                            <ReactPlayer url={project.video} />
                        )}
                    </div>

                </div>
            )}
        </div>
    )
}