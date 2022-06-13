import { observer } from "mobx-react-lite";
import React from "react";
import { GridViewMode } from "../../app/projectInfo";
import { useStore } from "../../app/store";

export default observer(function GridModeSelect(){

    const {projectGridStore} = useStore();
    const setViewMode = (mode: GridViewMode) => {
        projectGridStore.viewMode = mode;
    } 

    return (
        <div className="btn-group">
            <button className="btn btn-primary" onClick={() => setViewMode(GridViewMode.All)}>All</button>
            <button className="btn btn-primary"onClick={() => setViewMode(GridViewMode.CPP)}>C++</button>
            <button className="btn btn-primary"onClick={() => setViewMode(GridViewMode.Web)} >Web</button>
        </div>
    )
})