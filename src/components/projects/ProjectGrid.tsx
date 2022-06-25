import React from "react";

import { useStore } from "../../app/store";
import { observer } from "mobx-react-lite";
import ProjectPanel from "./project-panel/ProjectPanel";
import { allProjects, GridViewMode, ProjectInfo } from "../../app/projectInfo";

export default observer(function ProjectGrid()
{
    const store = useStore();
    const {viewMode} = store.projectGridStore;
    const toShow = viewMode === GridViewMode.All ? allProjects : allProjects.filter(proj => proj.viewMode === viewMode);
    if (viewMode === GridViewMode.All)
        console.log("Viewing all projects");
    //make a 2d array
    let grid: ProjectInfo[][] = [];
    const rowLength = 3;
    let row = 0;
    grid[0] = [];
    for (let index = 0; index < toShow.length; ++index) {
        //check the current row length and create a new one if needed
        if (grid[row].length >= rowLength) {
            ++row;
            grid[row] = [];
            console.log("Row: " + row);
        }
        grid[row][grid[row].length] = toShow[index];
    }

    return (
        <div className="container">
            {grid.map(row => (
                <div className="row" key={grid.indexOf(row)}>
                    {row.map(proj => (
                        <div className="col" key={proj.name}>
                            <ProjectPanel {...proj} />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
})