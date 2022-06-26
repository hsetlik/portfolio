import { runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import React from "react";
import { GridViewMode } from "../../app/projectInfo";
import { useStore } from "../../app/store";

export default observer(function GridModeSelect(){

    const {projectGridStore} = useStore();
    const setViewMode = (mode: GridViewMode) => {
        runInAction(() => {
            projectGridStore.viewMode = mode;
        })
    } 
    const cnAll = `btn btn-primary ${(projectGridStore.viewMode === GridViewMode.All) ? 'active' : ''}`
    const cnCpp = `btn btn-primary ${(projectGridStore.viewMode === GridViewMode.CPP) ? 'active' : ''}`
    const cnWeb = `btn btn-primary ${(projectGridStore.viewMode === GridViewMode.Web) ? 'active' : ''}`

    return (
        <div className="btn-group bg-primary">
            <button className={cnAll} onClick={() => setViewMode(GridViewMode.All)}>All</button>
            <button className={cnCpp} onClick={() => setViewMode(GridViewMode.CPP)}>C++</button>
            <button className={cnWeb} onClick={() => setViewMode(GridViewMode.Web)} >Web</button>
        </div>
    )
})