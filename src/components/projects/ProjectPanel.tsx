import React from "react";
import { ProjectInfo } from "../../app/projectInfo";
import { useStore } from "../../app/store";
import ProjectModal from "./project-modal/ProjectModal";
export default function ProjectPanel({name, desc, image}: ProjectInfo) {
    let _className = 'project-panel' + (image) ? ' has-bg-img' : '';
    let _style: React.CSSProperties = {};
    if (image) {
        console.log('Image at: ' + image);
        _style = {
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundColor: 'var(--bluesapphire)'
    };
    }
    const {modalStore} = useStore(); 
    

    return (
        <div className={_className} style={_style}>
            <h3 className='project-header' onClick={() => modalStore.openModal(<ProjectModal name={name} />)}>{name}</h3>
            <p>{desc}</p>
        </div>
    )
}