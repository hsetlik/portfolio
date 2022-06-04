

export interface ProjectInfo {
    name: string,
    desc: string,
    tags: string[],
    githubUrl: string,
    image?: string
}

export enum GridViewMode {
    All,
    CPP,
    Web
}
