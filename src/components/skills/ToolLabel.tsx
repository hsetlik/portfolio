import React, { useState } from 'react'
import { Tool } from '../../app/skillsInfo';

interface Props {
  tool: Tool
}

export default function ToolLabel({ tool }: Props) {
  const [hovering, setHovering] = useState(false);
  const onOver = () => setHovering(true);
  const onExit = () => setHovering(false);;

  return (
    <div onMouseOver={onOver} onMouseLeave={onExit} className='row bg-primary fit-row tool-label'>
      <div className='col-md-8 fit-col'>
        <p className='lead'>{tool.name}</p>
        {(tool.desc && hovering) && (
          <div className='tool-link'>
            <a href={tool.infoLink} >
              <p className='tool-desc'>{tool.desc}</p>
            </a>
          </div>
        )}
      </div>
      {tool.image && (
        <div className='col-md-4 fit-col'>
          <img src={tool.image} alt={tool.name} className='tool-logo' />
        </div>
      )}
    </div>
  )
}
