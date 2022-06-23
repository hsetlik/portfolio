import React from "react";
import { allProjects } from "../../app/projectInfo";
import "../../styles/modal.css"
interface Props {
    name: string
}

/* 

*/

export default function ProjectModal({ name }: Props) {
    const project = allProjects.find(proj => proj.name === name);
    console.log(`Modal for: ${project?.name} is open`);
    return (
        <div className="container-fluid modal-content bg-dark">
            {project && (
                <div className="container" >
                    <h3 className="row">
                        {project.name}
                    </h3>
                    <div className="row">

                        <div className="col">
                            <p>{project.desc}</p>
                        </div>
                        <div className="col">
                            <p className="platform-header">{`Platform: ${project.platform}`}</p>
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