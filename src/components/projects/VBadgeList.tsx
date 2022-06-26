import React from 'react'

interface Props {
    names: string[],
    className?: string
}

export default function VBadgeList({names, className}: Props) {
  return (
    <div className={`row ${(className)? className : ''}`}>
        {names.map(name =>(
            <div className='col badge'>{name}</div>
        ))}
    </div>
  )
}
