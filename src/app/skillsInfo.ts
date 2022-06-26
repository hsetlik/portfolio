

export const languages = [
    'C++',
    'C#',
    'JavaScript',
    'TypeScript'
]

interface Framework {
    name: string,
    language: string,
    desc?: string,
    experience?: number,
    image?: string
}

export const frameworks: Framework[] = [
   {
    name: 'JUCE Framework',
    language: 'C++',
    image: '/img/juce_logo.png'
   },
   {
    name: 'React.js',
    language: 'JavaScript/TypeScript'
   },
   {
    name: 'ASP.NET Web API',
    language: 'C#'
   },
   {
    name: 'Arduino framework',
    language: 'C++'
   }
]

interface Tool {
    name: string,
    desc?: string,
    image?: string
}

export const tools: Tool[] = [
    {
        name: 'Git/Github',
        image: '/img/github_logo.svg'
    },
    {
        name: 'VSCode',
        image: '/img/vscode_logo.svg'
    },
    {
        name: 'PlatformIO',
        desc: 'IDE and toolkit for all things embedded C++',
        image: '/img/platformio_logo.svg'
    },
    {
        name: 'node.js / npm',
        image: '/img/npm_logo.svg'
    }
]