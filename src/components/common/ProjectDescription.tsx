import React from "react";
import { ProjectDescriptionProps } from "../../info/projectDescriptions";
import '../../styles/project-description.css';


const  ProjectDescription = ({name, subtitle, description, github, technologies}: ProjectDescriptionProps) => {
    return (
        <div className='container'>
            <div className="container project-header">
                <p className='h1 text-primary'>{name}</p>
                {subtitle && <p className="h3">{subtitle}</p>}
            </div> 
            <div className="row">
                <div className="col">
                    <small>{description}</small>
                </div>
                <div className="col">
                    {technologies.length > 0 && (
                    <ol>
                        {technologies.map(tech => <li key={tech}>{tech}</li>)}
                    </ol>)}
                </div>
                <div className="col">
                    <a href={github}>Github</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectDescription;