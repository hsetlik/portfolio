import {makeAutoObservable} from 'mobx';
import ProjectGrid from '../components/projects/ProjectGrid';
import { allProjects, GridViewMode, ProjectInfo } from './projectInfo';


export default class ProjectGridStore {
    constructor() {
        makeAutoObservable(this);
        this.projects = allProjects;
    }
    //=============DATA========
    projects: ProjectInfo[] = [];
    viewMode: GridViewMode = GridViewMode.All;

    getCurrentVisible = (): ProjectInfo[] => {
        if (this.viewMode === GridViewMode.All)
            return this.projects;
        else
            return this.projects.filter(p => p.viewMode === this.viewMode);
    }
}