import React from "react";
import '../../styles/navigation-header.css';


export default function NavigationHeader() {

   
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className='nav-link'>
                        <a className="nav-link" href="/">About</a>
                    </li>
                    <li className='nav-link'>
                        <a className="nav-link" href="/web-projects">Web Projects</a>
                    </li>
                    <li className='nav-link'>
                        <a className="nav-link" href="/cpp-projects">C++ Projects</a>
                    </li>
                    <li className='nav-link'>
                        <a className="nav-link" href="/skills">Skills</a>
                    </li>
                    <li className='nav-link'>
                        <a className="nav-link" href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
  </nav>
  );
};