

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
    experience?: number
}

export const frameworks: Framework[] = [
   {
    name: 'JUCE Framework',
    language: 'C++'
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
        image: '/img/platformio_logo.svg'
    }
]