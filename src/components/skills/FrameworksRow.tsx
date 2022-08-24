import React from 'react'
import { frameworks } from '../../app/skillsInfo'
import FrameworkLabel from './FrameworkLabel'

export default function FrameworksRow() {
  return (
    <div className='col skill-row bg-primary text-dark'>
      <div className='row'>
        <h3 className='skills-header bebas'>Frameworks and Platforms:</h3>
      </div>
      <div className='col'>
        {frameworks.map(frm => (
          <FrameworkLabel framework={frm} key={frm.name} />
        ))}
      </div>

    </div>
  )
}
