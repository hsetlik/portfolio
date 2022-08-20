import React from "react";
import EmailForm from "./EmailForm";
// import { useLocation } from "react-router-dom";
import "../../styles/contact.css";

export default function ContactRoute() {
    // TODO: add links to github/linkedin profiles
    return (
        <div className="container align-self-center bg-primary">
            <div className="col">
                <div className="row">
                    <div className="col">
                        <h2>Contact me:</h2>
                    </div>
                    <div className="col bg-dark">
                        <label>Find me on:</label>
                        <div className="row">
                            <span>GitHub</span>
                            <img className='lang-logo' alt='gh' src='img/tool-logos/github_logo.svg'></img>
                        </div>
                    </div>
                </div>
                <p>
                    You can get in touch with me via email in the form below or directly at haydensetlik@gmail.com.
                </p>
                <EmailForm />
            </div>
        </div>
    )
}