export const languages = [
    'C++',
    'C#',
    'JavaScript',
    'TypeScript',
    'CSS3',
    'HTML5'
]

export interface Framework {
    name: string,
    language: string,
    desc?: string,
    experience?: number,
    image?: string,
    usedIn?: string[], // store names of relevant projects here
}

export const frameworks: Framework[] = [
   {
    name: 'JUCE Framework',
    language: 'C++',
    image: '/portfolio/img/framework-logos/juce_logo.svg'
   },
   {
    name: 'React.js',
    language: 'JavaScript/TypeScript',
    image: '/portfolio/img/framework-logos/react_logo.svg'
   },
   {
    name: 'ASP.NET',
    language: 'C#',
    image: '/portfolio/img/framework-logos/dotnet_logo.svg'
   },
   {
    name: 'Arduino framework',
    language: 'C++',
    image: '/portfolio/img/framework-logos/arduino_logo.svg'
   }
]

export interface Tool {
    name: string,
    desc?: string,
    image?: string
}

export const tools: Tool[] = [
    {
        name: 'Git/Github',
        image: '/portfolio/img/tool-logos/github_logo.svg'
    },
    {
        name: 'Azure App Service',
        image: '/portfolio/img/tool-logos/azure_logo.svg'
    },
    {
        name: 'PlatformIO',
        //desc: 'IDE and toolkit for all things embedded C++',
        image: '/portfolio/img/tool-logos/platformio_logo.svg'
    },
    {
        name: 'node.js / npm',
        image: '/portfolio/img/tool-logos/npm_logo.svg'
    },
    {
        name: 'PostGreSQL',
        image: '/portfolio/img/tool-logos/postgresql_logo.svg'
    },
    {
        name: 'Bootstrap 5',
        image: '/portfolio/img/tool-logos/bootstrap_logo.svg'
    },
    {
        name: 'Linux / shell scripting',
        image: '/portfolio/img/tool-logos/linux_logo.svg'
    }
]