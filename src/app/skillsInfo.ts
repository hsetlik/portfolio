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
    desc: string,
    experience?: number,
    image: string,
    infoLink: string
}

export const frameworks: Framework[] = [
   {
    name: 'JUCE Framework',
    language: 'C++',
    image: '/portfolio/img/framework-logos/juce_logo.svg',
    desc: 'C++ framework for audio plugins and standalone audio applications',
    infoLink: 'https://juce.com/'
   },
   {
    name: 'React.js',
    language: 'JavaScript/TypeScript',
    image: '/portfolio/img/framework-logos/react_logo.svg',
    desc: 'The world\'s most popular JavaScript framework',
    infoLink: 'https://reactjs.org/'
   },
   {
    name: 'ASP.NET 6.0',
    language: 'C#',
    image: '/portfolio/img/framework-logos/dotnet_logo.svg',
    desc: 'Cross-platform framework for building applications with C#',
    infoLink: 'https://dotnet.microsoft.com/en-us/apps/aspnet'
   },
   {
    name: 'Arduino framework',
    language: 'C++',
    image: '/portfolio/img/framework-logos/arduino_logo.svg',
    desc: 'Popular C++ framework for microcontroller firmware development',
    infoLink: 'https://docs.platformio.org/en/stable/frameworks/arduino.html'
   }
]

export interface Tool {
    name: string,
    desc?: string,
    image?: string,
    infoLink?: string
}

export const tools: Tool[] = [
    {
        name: 'Git/Github',
        image: '/portfolio/img/tool-logos/github_logo.svg',
        desc: 'Industry standard version control software',
        infoLink: 'https://git-scm.com/'
    },
    {
        name: 'Azure App Service',
        desc: 'Cloud application service',
        image: '/portfolio/img/tool-logos/azure_logo.svg',
        infoLink: 'https://azure.microsoft.com/en-us/services/app-service/'
    },
    {
        name: 'PlatformIO',
        desc: 'IDE and toolkit for all things embedded C++',
        image: '/portfolio/img/tool-logos/platformio_logo.svg',
        infoLink: 'https://platformio.org/'
    },
    {
        name: 'node.js / npm',
        desc: 'Ubiquitous JavaScript runtime',
        image: '/portfolio/img/tool-logos/npm_logo.svg',
        infoLink: 'https://nodejs.org/en/'
    },
    {
        name: 'PostgreSQL',
        desc: 'Open-source database software',
        image: '/portfolio/img/tool-logos/postgresql_logo.svg',
        infoLink: 'https://www.postgresql.org/'
    },
    {
        name: 'Bootstrap 5',
        desc: 'Popular CSS framework',
        image: '/portfolio/img/tool-logos/bootstrap_logo.svg',
        infoLink: 'https://getbootstrap.com/docs/5.0/getting-started/introduction/'
    },
    {
        name: 'Linux / shell scripting',
        image: '/portfolio/img/tool-logos/linux_logo.svg',
        infoLink: 'https://www.linux.org/'
    }
]