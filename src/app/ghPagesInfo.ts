
interface PagePaths {
    homepage: string,
    skillsPath: string,
    contactPath: string
}

const home = "https://hsetlik.github.io/portfolio"; 
export const paths: PagePaths = {
    homepage: home,
    skillsPath: `${home}/skills`,
    contactPath: `${home}/contact` 
}