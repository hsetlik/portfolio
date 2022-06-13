import React from "react";

interface ProjPanelProps {
    name: string,
    tags: string[],
    subhead: string,
    image?: string
}

export default function ProjectPanel({name, subhead}: ProjPanelProps) {
    return (
        <div className="row">
            <h3>{name}</h3>
            <p>{subhead}</p>
        </div>
    )
}