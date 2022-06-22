import React from "react";
import "../../styles/projects.css";
import GridModeSelect from "../common/GridModeSelect";
import AboutPanel from "./AboutPanel";
import ProjectGrid from "./ProjectGrid";


export default function ProjectsRoute() {

    return (
        <div className="container">
            <AboutPanel />
            <div>
                <GridModeSelect />
                <ProjectGrid />
            </div>
        </div>
    )
}