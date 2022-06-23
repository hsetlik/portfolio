
export enum GridViewMode {
    All,
    CPP,
    Web
}
export interface ProjectInfo {
    name: string,
    platform: string,
    desc: string,
    tags: string[],
    githubUrl: string,
    viewMode: GridViewMode,
    languages: string[],
    // Optional stuff for modal detail component
    image?: string,
    technologies?: string[],
    longDesc?: string
}

const codex: ProjectInfo = {
    name: 'Codex',
    platform: 'React app (front end) and ASP.NET 5.0 Web API (back end)',
    desc: 'Multimedia web app for language learning',
    tags: ['Dotnet', 'React'],
    githubUrl: '/codex',
    viewMode: GridViewMode.Web,
    languages: ['C#', 'TypeScript'],
    image: 'img/web-project-images/codex-screenshot.png',
    technologies: ['ASP.NET 5.0', 'React']
}

const octane: ProjectInfo = {
    name: 'Octane',
    platform: 'VST3/AU Audio Plugin',
    desc: 'Full-featured wavetable synthesizer',
    tags: ['JUCE', 'Audio'],
    githubUrl: '/octane',
    viewMode: GridViewMode.CPP,
    languages: ['C++'],
    image: '/img/cpp-project-images/octane-screenshot.png',
    technologies: ['JUCE framework', 'OpenGL']
}

const hex: ProjectInfo = {
    name: "Hex",
    platform: 'VST3/AU Audio Plugin',
    desc: "Powerful modern FM synthesizer",
    tags: ['JUCE', 'Audio', 'OpenGL'],
    githubUrl: '/hex',
    viewMode: GridViewMode.CPP,
    languages: ['C++', 'GLSL'],
    image: '/img/cpp-project-images/hex-screenshot.png',
    technologies: ['JUCE framework', 'OpenGL']
}

const cssScraper: ProjectInfo = {
    name: "CSS Scraper",
    platform: 'C# Library',
    desc: "C# package for parsing and editing CSS",
    tags: ['Dotnet'],
    githubUrl: '/CssScraper',
    viewMode: GridViewMode.Web,
    languages: ['C#'],
    image:'/img/web-project-images/css-scraper-screenshot.png',
    technologies: ['.NET 5.0', 'C#11']
}

//TODO: get nice photo for this
export const ultra64: ProjectInfo = {
    name: "Ultra 64",
    platform: 'ESP32 + Arduino framework',
    desc: "Hardware step sequencer based on ESP32",
    tags: ['Embedded'],
    githubUrl: '/ultraSixtyFour',
    viewMode: GridViewMode.CPP,
    languages: ['C++'],
    image: '/img/cpp-project-images/ultra64-photo.png',
    technologies: ['PlatformIO', 'Arduino framework', 'SPI and I2C protocols']
}

export const ltSpicePath: ProjectInfo = {
    name: "After Effects circuit path creator",
    platform: 'Adobe ScriptUI extension',
    desc: "After Effects ScriptUI panel for converting SPICE circuit simulations to vector paths",
    tags: [],
    githubUrl: '/After-Effects-LT-Spice-Path-Creator',
    viewMode: GridViewMode.Web,
    languages: ['JavaScript'],
    image: '/img/web-project-images/path-creator-screenshot.png'
}

export const arbitraryFunctionGen: ProjectInfo = {
    name: "Arbitrary Function Generator",
    platform: 'ESP32 + Arduino framework',
    desc: "ESP32-based signal generator for testing and calibrating analog circuits",
    tags: ['Embedded'],
    githubUrl: '/ArbitraryFunctionGen',
    viewMode: GridViewMode.CPP,
    languages: ['C++'],
    image: '/img/cpp-project-images/function-gen-photo.png',
    technologies: ['PlatformIO', 'Arduino framework', 'SPI and I2C protocols']
}


export const allProjects: ProjectInfo[] = [
    codex,
    octane,
    hex,
    cssScraper,
    ltSpicePath,
    arbitraryFunctionGen,
    ultra64
]