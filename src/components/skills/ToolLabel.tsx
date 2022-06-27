import React from 'react'
import {Tool, tools} from '../../app/skillsInfo';

interface Props {
    tool: Tool
}

export default function ToolLabel({tool}: Props) {
  return (
    <div className='container'>
        <div className='row'>
            <span>{tool.name}</span>
            
        </div>
        <div className='row'>

        </div>

    </div>
  )
}
