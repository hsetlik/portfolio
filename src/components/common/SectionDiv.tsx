import { observer } from "mobx-react-lite";
import React from "react";
import { SiteSection } from "../../app/appInfo";
import { useStore } from "../../app/store";
import ContactRoute from "../contact/ContactRoute";
import ProjectsRoute from "../projects/ProjectsRoute";
import SkillsRoute from "../skills/SkillsRoute";

export default observer(function SectionDiv() {
    const {projectGridStore: {currentSection}} = useStore();
    return (
        <div className="vh-100">
            {currentSection === SiteSection.Projects && (<ProjectsRoute />)}
            {currentSection === SiteSection.Contact && (<ContactRoute />)}
            {currentSection === SiteSection.Skills && (<SkillsRoute />)}
        </div>
    )
});