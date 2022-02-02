
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
        technologies: ['Entity Framework' ]
    },
    {
        name: 'CssScraper',
        subtitle: 'NuGet Package',
        description: 'fasdfasdf',
        github: 'https://github.com/hsetlik/CssScraper',
        technologies: []
    },
    {
        name: 'This website',
        subtitle: 'React App',
        description: 'A language learning app based on real-world written and video material',
        github: 'https://github.com/hsetlik/Codex',
        technologies: ['TypeScript', 'bootstrap']
    }
]

