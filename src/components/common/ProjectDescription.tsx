import React from "react";
import { ProjectDescriptionProps } from "../../info/projectDescriptions";
import '../../styles/project-description.css';


const  ProjectDescription = ({name, subtitle, description, github, technologies}: ProjectDescriptionProps) => {
    return (
        <div className='container project-list'>
            <p className='h1 text-primary'>{name}</p>
            {subtitle && <p className="h3">{subtitle}</p>}
            <small>{description}</small>
            {technologies.length > 0 && (
            <ul>
                {technologies.map(tech => <li>{tech}</li>)}
            </ul>)}
            <a href={github}>Github</a>
        </div>
    )
}

export default ProjectDescription;