import React from 'react'

interface Props {
    technologies: string[]
}
export default function TechnologiesList({ technologies }: Props) {
    return (
        <div>
            <h5>Technologies:</h5>
            <ul>
                {technologies.map(tech => (
                    <li>{tech}</li>
                ))}
            </ul>
        </div>
    )
}
