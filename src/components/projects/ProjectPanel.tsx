import React from "react";
import { ProjectInfo } from "../../app/projectInfo";
export default function ProjectPanel({name, desc, image}: ProjectInfo) {
    let _className = 'project-panel' + (image) ? ' has-bg-img' : '';
    let _style: React.CSSProperties = {};
    if (image) {
        console.log('Image at: ' + image);
        _style = {backgroundImage: `url(${image})`};
    }
    return (
        <div className={_className} style={_style}>
            <h3>{name}</h3>
            <p>{desc}</p>
        </div>
    )
}