import React from 'react'
import {Tool} from '../../app/skillsInfo';

interface Props {
    tool: Tool
}

export default function ToolLabel({tool}: Props) {
  return (
    <div className='row bg-primary fit-row tool-label'>
          <div className='col-md-8 fit-col'>
            <p className='lead'>{tool.name}</p>
            {tool.desc && (
              <p>{tool.desc}</p>
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
