import React from 'react'
import { tools } from '../../app/skillsInfo'
import ToolLabel from './ToolLabel'

export default function ToolsRow() {
  return (
    <div className='row tool-panel bg-dark'>
      <div className='row badge'>
          <h3 className='bebas'>Tools and technologies:</h3>
      </div>
      <div className='row tools-row'>
        {tools.map(tool => (
          <ToolLabel key={tool.name} tool={tool} />
        ))}
      </div>
    </div>
  )
}
