import { observer } from "mobx-react-lite";
import React from "react";
import { useLocation } from "react-router-dom";
import { paths } from "../../app/ghPagesInfo";

import "../../styles/nav.css";

export default observer(function NavigationBar() {
    const loc = useLocation()
    const classA = (loc.pathname === '/') ? ' active' : '';
    console.log(classA);
    const classB = (loc.pathname === '/skills') ? ' active' : '';
    console.log(classB);
    const classC = (loc.pathname === '/contact') ? ' active' : '';
    console.log(classC);
    return (
        <nav className="navbar navbar-expand-md navbar-dark">
                <div className="navbar-nav w-100">
                    <li className="nav-item">
                        <a className={`nav-link ${classA}`} href={paths.homepage}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${classB}`} href={paths.contactPath}>Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${classC}`} href="/contact">Contact</a>
                    </li>
                </div>
        </nav>

    )
})