import React from "react";
import GridModeSelect from "../common/GridModeSelect";
import ProjectGrid from "./ProjectGrid";

export default function ProjectsRoute()
{

    return (
        <div className="container-fluid">
            <GridModeSelect />
            <ProjectGrid />
        </div>
    )
}