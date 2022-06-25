import React from "react";
import modalStore from "../../../app/modalStore";
import { getProject } from "../../../app/projectInfo";
import { useStore } from "../../../app/store";
import ProjectModal from "../project-modal/ProjectModal";

interface Props {
    name: string
}

function ProjectPanelHeader({name}: Props) {
    const project = getProject(name);
    const {modalStore} = useStore();
    return (
    <div>
        <h3 className='project-header' onClick={() => modalStore.openModal(<ProjectModal name={name} />)}>{name}</h3>
        <p>{project.desc}</p>
    </div>);
}

export default ProjectPanelHeader;