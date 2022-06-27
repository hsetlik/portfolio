import React from 'react'
import { Framework } from '../../app/skillsInfo'

interface Props {
    framework: Framework;
}

export default function FrameworkLabel({ framework }: Props) {
    return (
        <div className='col'>
            <div className='row frm-label bg-dark text-light'>
                <span className='frm-name'>{framework.name}</span>
                {framework.image && (
                    <img src={framework.image} alt={framework.name} className='frm-logo' />
                )}
            </div>
        </div>
    )
}
