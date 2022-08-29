import React, { useState } from 'react'
import { Framework } from '../../app/skillsInfo'

interface Props {
    framework: Framework;
}
export default function FrameworkLabel({ framework }: Props) {
    const [hovering, setHovering] = useState(false);
    const onOver = () => setHovering(true);
    const onExit = () => setHovering(false);
    return (
        <div onMouseOver={onOver} onMouseLeave={onExit} className='col frm-label bg-dark text-light'>
            <div className='row'>
                <span className='frm-name'>{framework.name}</span>
                {framework.image && (
                    <img src={framework.image} alt={framework.name} className='frm-logo' />
                )}
            </div>
            {hovering && (
                <div className='bg-primary frm-link-container '>
                    <a href={framework.infoLink}>
                    <div className='row frm-lower'>
                        <p className='frm-desc'>{framework.desc}</p>
                    </div>
                </a>
                </div>
            )}
        </div>
    )
}
