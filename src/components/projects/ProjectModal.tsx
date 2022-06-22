import React from "react";
import { Modal } from "react-bootstrap";
import { allProjects } from "../../app/projectInfo";

interface Props {
    name: string
}

/* 

*/

export default function ProjectModal ({name}: Props) {
    const project = allProjects.find(proj => proj.name === name);
    console.log(`Modal for: ${project?.name} is open`);
    return (
        <div className="modal-content bg-dark">
            {project && (
                <div >
                    <Modal.Header>
                        {project.name}
                    </Modal.Header>
                    <p>{project.desc}</p>
                    {project.longDesc && (
                        <p className="long-desc">{project.longDesc}</p>
                    )}

                </div>
            )}
        </div>
    )
}