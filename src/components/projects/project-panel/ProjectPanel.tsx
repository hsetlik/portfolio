import React from "react";
import { ProjectInfo } from "../../../app/projectInfo";
import LanguageList from "../../common/LanguageList";
import ProjectPanelHeader from "./ProjectPanelHeader";
export default function ProjectPanel({ name, desc, image, languages }: ProjectInfo) {
    // add the background image via inline style
    return (
        <div className='has-bg-img'>
            <img className="bg-img" src={image} alt={image}></img>
            <div className="proj-panel">
                <ProjectPanelHeader name={name} />
                <div className="row">
                    <LanguageList languages={languages} />
                    <p className="col">{desc}</p>
                </div>
            </div>

        </div>
    )
}