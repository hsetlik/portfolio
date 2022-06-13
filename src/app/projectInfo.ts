
export enum GridViewMode {
    All,
    CPP,
    Web
}
export interface ProjectInfo {
    name: string,
    desc: string,
    tags: string[],
    githubUrl: string,
    image?: string,
    viewMode: GridViewMode,
    languages: string[]
}

const codex: ProjectInfo = {
    name: 'Codex',
    desc: 'Multimedia web app for language learning',
    tags: ['Dotnet', 'React'],
    githubUrl: '/codex',
    viewMode: GridViewMode.Web,
    languages: ['C#', 'TypeScript']
}

const octane: ProjectInfo = {
    name: 'Octane',
    desc: 'Full-featured wavetable synthesizer',
    tags: ['JUCE', 'Audio'],
    githubUrl: '/octane',
    viewMode: GridViewMode.CPP,
    languages: ['C++']
}

const hex: ProjectInfo = {
    name: "Hex",
    desc: "Powerful modern FM synthesizer",
    tags: ['JUCE', 'Audio', 'OpenGL'],
    githubUrl: '/hex',
    viewMode: GridViewMode.CPP,
    languages: ['C++', 'GLSL']
}

const cssScraper: ProjectInfo = {
    name: "CSS Scraper",
    desc: "NuGet package for parsing and editing CSS",
    tags: ['Dotnet'],
    githubUrl: '/CssScraper',
    viewMode: GridViewMode.Web,
    languages: ['C#']
}

export const ultra64: ProjectInfo = {
    name: "Ultra 64",
    desc: "Hardware step sequencer based on ESP32",
    tags: ['Embedded'],
    githubUrl: '/ultraSixtyFour',
    viewMode: GridViewMode.CPP,
    languages: ['C++']
}

export const ltSpicePath: ProjectInfo = {
    name: "After Effects circuit path creator",
    desc: "After Effects ScriptUI panel for converting SPICE circuit simulations to vector paths",
    tags: ['Embedded'],
    githubUrl: '/After-Effects-LT-Spice-Path-Creator',
    viewMode: GridViewMode.Web,
    languages: ['JavaScript']
}
export const allProjects: ProjectInfo[] = [
    codex,
    octane,
    hex,
    cssScraper,
    ultra64,
    ltSpicePath
]