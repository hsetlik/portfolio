import React from "react";
import LanguageLabel from "./LanguageLabel";

interface Props {
    languages: string[]
}

export default function LanguageList({ languages }: Props) {
    const str = (languages.length > 1) ? 'Languages:' : 'Language:';
    return (
        <div className="col">
            {str}
            <div className="row lang-list"> {
                languages.map(lang => (
                    <LanguageLabel language={lang} key={lang} />
                ))
            }
            </div>
        </div>

    )

}