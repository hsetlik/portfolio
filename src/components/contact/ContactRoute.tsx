import React from "react";
import EmailForm from "./EmailForm";
// import { useLocation } from "react-router-dom";
import "../../styles/contact.css";
import FindMeLink from "./FindMeLink";

export default function ContactRoute() {
    // TODO: add links to github/linkedin profiles
    return (
        <div className="container align-self-center bg-primary">
            <div className="col">
                <div className="row">
                    <div className="col-md-8">
                        <h2 className="bebas">Contact me:</h2>       
                        <p>
                            You can get in touch with me via email in the form below or directly at haydensetlik@gmail.com.
                        </p>
                    </div>
                    <div className="col-md-4 bg-dark" id="findme">
                        <h4 className="bebas">Find me on:</h4>
                        <FindMeLink
                        name="GitHub"
                        img="/portfolio/img/tool-logos/github_logo.svg"
                        link="https://www.github.com/hsetlik" 
                        />
                        <FindMeLink
                        name="LinkedIn"
                        img="/portfolio/img/tool-logos/linkedin_logo.svg"
                        link="https://www.linkedin.com/in/hayden-setlik-82b69251/"
                        />
                    </div>
                </div>

                <EmailForm />
            </div>
        </div>
    )
}