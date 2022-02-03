import React from "react";
import '../../styles/navigation-header.css';


export default function NavigationHeader() {

   
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid" >
                <ul className="navbar-nav" >
                    <li className='nav-item'>
                        <a className="nav-link" href="/">About</a>
                    </li>
                    <li className='nav-item'>
                        <a className="nav-link" href="/web-projects">Web Projects</a>
                    </li>
                    <li className='nav-item'>
                        <a className="nav-link" href="/cpp-projects">C++ Projects</a>
                    </li>
                    <li className='nav-item'>
                        <a className="nav-link" href="/skills">Skills</a>
                    </li>
                    <li className='nav-item'>
                        <a className="nav-link" href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
  </nav>
  );
};