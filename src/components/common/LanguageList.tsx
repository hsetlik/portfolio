import React from "react";
import LanguageLabel from "./LanguageLabel";

interface Props {
    languages: string[]
}

export default function LanguageList({languages}: Props) {

    return (
        <div className="row lang-list"> {
            languages.map(lang => (
                <LanguageLabel language={lang} key={lang} />
            ))
        }
        </div>
    )

}