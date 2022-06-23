import React from "react";
import { ProjectInfo } from "../../app/projectInfo";
import { useStore } from "../../app/store";
import ProjectModal from "./project-modal/ProjectModal";
export default function ProjectPanel({ name, desc, image }: ProjectInfo) {
    const { modalStore } = useStore();
    // add the background image via inline style
    let _style: React.CSSProperties = {};
    if (image) {
        _style = {
            backgroundImage: `url(${image})`,
            backdropFilter: `blur(8px)`
        };
    }
    return (
        <div className="col panel-bg" style={_style}>
                <h3 className='project-header' onClick={() => modalStore.openModal(<ProjectModal name={name} />)}>{name}</h3>
                <p>{desc}</p>
        </div>


    )
}