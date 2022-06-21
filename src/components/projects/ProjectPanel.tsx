import React from "react";
import { ProjectInfo } from "../../app/projectInfo";
export default function ProjectPanel({name, desc, image}: ProjectInfo) {
    let _className = 'project-panel' + ((image) ? ' has-bg-img' : '');
    return (
        <div className={_className}>
            <h3>{name}</h3>
            <p>{desc}</p>

            {image && (
                <img src={image} className='bg-img img-fluid' />
            )}
        </div>
    )
}