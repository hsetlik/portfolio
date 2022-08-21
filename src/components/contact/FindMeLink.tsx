import React from "react";

interface FindMeProps {
    name: string,
    img: string,
    link: string
}


export default function FindMeLink({ name, img, link }: FindMeProps) {

    return (
        <a href={link}>
            <label className="bg-primary row profile-link">
                <span className="col">{name}</span>
                <div className="col">
                    <img className='lang-logo' alt='gh' src={img}></img>
                </div>
            </label>
        </a>

    )
}