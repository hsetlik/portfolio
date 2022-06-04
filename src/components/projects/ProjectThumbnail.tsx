import React from "react";
import { ProjectDescriptionProps } from "../../info/projectDescriptions";


export default function ProjectThumbnail({name, subtitle, technologies}: ProjectDescriptionProps) {

    return (
        <div>
            <h2>{name}</h2>
            <h3>{subtitle}</h3>
            <ul>
                {(technologies.map(tech => <li>{tech}</li>))}
            </ul>
        </div>
    )

}