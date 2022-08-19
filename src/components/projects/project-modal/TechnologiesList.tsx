import React from 'react'

interface Props {
    technologies: string[]
}
export default function TechnologiesList({ technologies }: Props) {
    return (
        <div className='container'>
            <h5>Technologies:</h5>
            <div className='col'>
                { technologies.map(tech => (
                    <div className='badge bg-primary' key={tech}>
                        {tech}
                    </div>
                ))
                }

            </div>
        </div>
    )
}
