import React from 'react'
import { Technology } from '../../../app/projectInfo'



interface Props {
    technologies: Technology[]
}
export default function TechnologiesList({ technologies }: Props) {
    return (
        <div className='col'>
            <h3 className='mono'>Technologies:</h3>
            <div className='col'>
                {technologies.map(tech => (
                    <a href={tech.infoLink}>
                        <div className='badge bg-primary tech-link' key={tech.name}>
                            {tech.name}
                        </div>
                    </a>
                ))
                }

            </div>
        </div>
    )
}
