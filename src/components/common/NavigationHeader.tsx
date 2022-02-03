import React from "react";
import '../../styles/color.css';
import '../../styles/navigation-header.css';


export default function NavigationHeader() {

   
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark dark-w-yellow">
            <div className="container-fluid" >
                <ul className="navbar-nav" >
                    <li className='nav-item'>
                        <a className="nav-link dark-w-yellow" href="/">About</a>
                    </li>
                    <li className='nav-item'>
                        <a className="nav-link dark-w-yellow" href="/web-projects">Web Projects</a>
                    </li>
                    <li className='nav-item'>
                        <a className="nav-link dark-w-yellow dark-w-yellow" href="/cpp-projects">C++ Projects</a>
                    </li>
                    <li className='nav-item'>
                        <a className="nav-link dark-w-yellow" href="/skills">Skills</a>
                    </li>
                    <li className='nav-item'>
                        <a className="nav-link dark-w-yellow" href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
  </nav>
  );
};