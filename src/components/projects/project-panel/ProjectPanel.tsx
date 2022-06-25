import React from "react";
import { ProjectInfo } from "../../../app/projectInfo";
import { useStore } from "../../../app/store";
import LanguageList from "../../common/LanguageList";
import ProjectModal from "../project-modal/ProjectModal";
import ProjectPanelHeader from "./ProjectPanelHeader";
export default function ProjectPanel({ name, desc, image, languages }: ProjectInfo) {
    const { modalStore } = useStore();
    // add the background image via inline style
    return (
        <div className='has-bg-img'>
                <img className="bg-img" src={image} alt={image}></img>
                <ProjectPanelHeader name={name} />
                <LanguageList languages={languages} />
        </div>
    )
}