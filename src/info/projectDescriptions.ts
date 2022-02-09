
export interface ProjectDescriptionProps {
    name: string,
    subtitle?: string,
    description: string,
    github: string,
    technologies: string[]
}

export const webProjectDescriptions: ProjectDescriptionProps[] = [
    {
        name: 'Codex',
        subtitle: 'Full stack web application',
        description: 'A language learning app based on real-world written and video material',
        github: 'https://github.com/hsetlik/Codex',
        technologies: ['Entity Framework', '.NET 5.0', 'SQL Server','React', 'node.js', 'Bootstrap 5' ]
    },
    {
        name: 'Css Scraper',
        subtitle: 'NuGet Package',
        description: "An open-source NuGet package for retreiving and parsing data from a web page's external stylesheets",
        github: 'https://github.com/hsetlik/CssScraper',
        technologies: []
    },
    {
        name: 'This website',
        subtitle: 'React App',
        description: 'A language learning app based on real-world written and video material',
        github: 'https://github.com/hsetlik/Codex',
        technologies: ['TypeScript', 'React', 'Bootstrap 5']
    }
]

