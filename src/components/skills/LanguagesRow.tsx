import React from 'react'
import LanguageLabel from '../common/LanguageLabel'

export default function LanguagesRow() {
    const languages = [
        'C++',
        'C#',
        'JavaScript',
        'TypeScript'
    ]
  return (
    <div className='row'>
        { languages.map(lang => {
            <div >
                {lang}
                <LanguageLabel language={lang}/>
            </div>
        })

        }
        
    </div>
  )
}
