import { observer } from "mobx-react-lite";
import React from "react";
import { SiteSection } from "../../app/appInfo";
import { useStore } from "../../app/store";
import ContactRoute from "../contact/ContactRoute";
import ProjectsRoute from "../projects/ProjectsRoute";
import SkillsRoute from "../skills/SkillsRoute";

export default observer(function SectionDiv() {
    const {projectGridStore: {currentSection}} = useStore();
    const getCurrentSection = (): JSX.Element => {
        if (currentSection === SiteSection.Projects)
            return (<ProjectsRoute />);
        if (currentSection === SiteSection.Skills)
            return (<SkillsRoute />);
        return (<ContactRoute />)
    }
    return getCurrentSection();
});