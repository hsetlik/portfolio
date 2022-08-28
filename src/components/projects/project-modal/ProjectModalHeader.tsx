import React from "react";
import { getProject } from "../../../app/projectInfo";
import GithubButton from "../../common/GithubButton";

interface Props {
    name: string
}

export default function ProjectModalHeader({ name }: Props) {
    const project = getProject(name);
    return (
        <>
            {project && (
                <div className="modal-header row has-bg-img">
                    <img className="bg-img" src={project.image} alt={project.name}></img>
                    <div className="col-md-7">
                        <h2 className="bebas display-3">{project.name}</h2>
                        <p>{project.desc}</p>
                    </div>
                    <div className="col-md-5">
                        <GithubButton name={name} />
                        <p className="platform-header mono row">{`Platform: ${project.platform}`}</p>
                    </div>

                </div>
            )}
        </>
    )
}