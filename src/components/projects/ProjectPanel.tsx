import React from "react";
import { ProjectInfo } from "../../app/projectInfo";
import { useStore } from "../../app/store";
import ProjectModal from "./project-modal/ProjectModal";
export default function ProjectPanel({ name, desc, image }: ProjectInfo) {
    const { modalStore } = useStore();
    // add the background image via inline style
    return (
        <div className='has-bg-img'>
                <img className="bg-img" src={image} alt={image}></img>
                <h3 className='project-header' onClick={() => modalStore.openModal(<ProjectModal name={name} />)}>{name}</h3>
                <p>{desc}</p>
        </div>
    )
}