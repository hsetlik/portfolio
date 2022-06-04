import {makeAutoObservable} from 'mobx';
import { GridViewMode, ProjectInfo } from './projectInfo';


export default class ProjectGridStore {
    constructor() {
        makeAutoObservable(this);
    }
    //=============DATA========
    projects: ProjectInfo[] = [];
    viewMode: GridViewMode = GridViewMode.All;

}