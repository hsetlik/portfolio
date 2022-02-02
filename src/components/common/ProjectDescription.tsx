import React from "react";
import './project-description.css';

interface Props {
    name: string,
    subtitle?: string,
    description: string,
    github: string,
    technologies: string[]
}

const  ProjectDescription = ({name, subtitle, description, github, technologies}: Props) => {
    return (
        <div className='container project-list'>
            <p className='h1 text-primary'>{name}</p>
            {subtitle && <p className="h3">{subtitle}</p>}
            <small>{description}</small>
        </div>
    )
}

export default ProjectDescription;