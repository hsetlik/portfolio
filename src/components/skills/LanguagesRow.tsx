import React from 'react'
import { languages } from '../../app/skillsInfo'
import LanguageLabel from '../common/LanguageLabel'

export default function LanguagesRow() {
    return (
        <div className='row skill-row bg-dark'>
            <div className='row'>
                <h3 className='bg-dark'>Programming Languages:</h3>
            </div>
            <div className='row lang-row'>
                {languages.map(lang => (
                        <LanguageLabel language={lang} key={lang} />
                ))
                }
            </div>
        </div>

    )
}
