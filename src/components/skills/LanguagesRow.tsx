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
        { languages.map(lang => (
            <div className='row' key={lang} >
                {lang}
                <LanguageLabel language={lang}/>
            </div>
        ))

        }
        
    </div>
  )
}
