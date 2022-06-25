import React from "react";
import "../../styles/projects.css";
import GridModeSelect from "../common/GridModeSelect";
import AboutPanel from "./AboutPanel";
import ProjectGrid from "./ProjectGrid";
import ProjectsHeader from "./ProjectsHeader";


export default function ProjectsRoute() {

    return (
        <div className="container" >
            <AboutPanel />
            <div className="container">
                <ProjectsHeader />
                <GridModeSelect />
                <ProjectGrid />
            </div>
        </div>
    )
}