import { observer } from "mobx-react-lite";
import React from "react";
import { SiteSection } from "../../app/appInfo";
import { useStore } from "../../app/store";

import "../../styles/nav.css";

export default observer(function NavigationBar() {
    const {projectGridStore: {setSection, currentSection}} = useStore();
    const classA = (currentSection === SiteSection.Projects) ? ' active' : '';
    console.log(classA);
    const classB = (currentSection === SiteSection.Skills) ? ' active' : '';
    console.log(classB);
    const classC = (currentSection === SiteSection.Contact) ? ' active' : '';
    console.log(classC);
    return (
        <nav className="navbar navbar-expand-md navbar-dark">
                <div className="navbar-nav w-100">
                        <li className={`nav-item nav-link ${classA}`} onClick={() => setSection(SiteSection.Projects)} >Home</li>
                        <li className={`nav-item nav-link ${classB}`} onClick={() => setSection(SiteSection.Skills)} >Skills</li>
                        <li className={`nav-item nav-link ${classC}`} onClick={() => setSection(SiteSection.Contact)} >Contact</li>
                </div>
        </nav>

    )
})