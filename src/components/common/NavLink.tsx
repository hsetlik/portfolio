import React from "react";
import { useLocation } from "react-router-dom";
import "../../styles/navigation-header.css";


interface Props {
    href: string,
    className: string,
    text: string
}

export default function NavLink({href, className, text}: Props) {
    const location = useLocation();
    const isActive = (href === "/") ? true : location.pathname === href;
    if (isActive) className += " active-link"
    return (
        <a href={href} className={className} >
            {text}
        </a>
    )
}