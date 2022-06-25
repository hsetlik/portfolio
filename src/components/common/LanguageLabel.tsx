import React from "react";
import { getLangImage } from "../../app/langsInfo";

interface Props {
    language: string
}

export default function LanguageLabel({language}: Props) {

    return (
        <div className="col" >
            <img src={getLangImage(language)} alt={language} className="lang-logo"/>
        </div>
    )
}