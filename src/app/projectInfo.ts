
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
    longDesc?: string,
    softwareFeatures?: string[] //list of smart guy stuff
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
    technologies: ['ASP.NET 5.0', 'React', 'PostGreSQL', 'Entity framework'], //TODO: there are a bunch more techs probably
    longDesc: 'Codex is a language learning tool I created out of dissatisfaction with existing language apps. Rather than the usual gamified study system of boring lessons created for teaching, Codex is based on real-world written and video content aimed at native speakers. *something about Krashen here?* Codex gives learners the tools to understand a language, including a databse of learned words and phrases. Users'
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
    technologies: ['JUCE framework', 'OpenGL'],
    softwareFeatures: ['High performance anti-aliasing oscillators', 'OpenGL-based wave visualizer', 'Drag-and-drop modulation routing system']
}

const hex: ProjectInfo = {
    name: "Hex",
    platform: 'VST3/AU Audio Plugin',
    desc: "Powerful modern FM synthesizer",
    tags: ['JUCE', 'Audio', 'OpenGL', 'Digital Signal Procesing'],
    githubUrl: '/hex',
    viewMode: GridViewMode.CPP,
    languages: ['C++'],
    image: '/img/cpp-project-images/hex-screenshot.png',
    technologies: ['JUCE framework', 'OpenGL', 'GLSL'],
    longDesc: 'Hex is a six-operator polyphonic FM synthesizer plugin. It features band-limited oscillators with five wave shapes (sine, square, triangle, sawtooth, and white noise), a visual routing editor, a realtime waveform display, and a system to easily save and load preset sounds.',
    softwareFeatures: ['Six anti-aliasing FM Oscillator', 'Custom FM routing algorithms', 'OpenGL-based realtime oscilloscope']
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
    technologies: ['PlatformIO', 'Arduino framework', 'SPI and I2C protocols'],
    longDesc: 'The Ultra64 is a musical step sequencer designed for Eurorack standard modular synthesizers. The brain of the sequencer is an Espressif ESP32 microcontroller with firmware built on the Arduino framework. In addition to the main sequencing logic, the microcontroller is responsible for handling buttons and rotary encoders, driving the WS2812b LEDs and the I2C OLED display, and managing four channels of DAC output. The sequencer features four independent sequence tracks, a system for saving and loading patterns from the ESP32\'s flash storage, and over-the-air firmware updating capability.'
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
    technologies: ['PlatformIO', 'Arduino framework', 'SPI and I2C protocols'],
    longDesc: 'Designed for testing and prototyping analog electronic circuits, this arbitrary function generator outputs an analog voltage based on any waveform. The device is based on an ESP32 microcontroller and features a 0hz to 40Khz output frequency range, variable output impedance, and over-the-air firmware updates.'
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


export const getProject = (name: string): ProjectInfo => {
    return allProjects.find(proj => proj.name === name) || codex;
}