import React from "react";
import { useLocation } from "react-router-dom";
import "../../styles/projects.css";
import GridModeSelect from "../common/GridModeSelect";
import AboutPanel from "./AboutPanel";
import ProjectGrid from "./ProjectGrid";
import ProjectsHeader from "./ProjectsHeader";


export default function ProjectsRoute() {
    const loc = useLocation();
    console.log(`Projects route created at: ${loc.pathname}`);
    return (
        <div className="container" >
            <AboutPanel />
            <ProjectsHeader />
            <GridModeSelect />
            <ProjectGrid />
        </div>
    )
}