import React from "react";
import '../../styles/color.css';
import '../../styles/navigation-header.css';
import NavLink from "./NavLink";


export default function NavigationHeader() {

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark dark-w-yellow">
            <div className="container-fluid" >
                <ul className="navbar-nav" >
                    <li className='nav-item'>
                        <NavLink className="nav-link dark-w-yellow" href="/about" text="About" />
                    </li>

                    <li className='nav-item'>
                        <NavLink className="nav-link dark-w-yellow" href="/projects" text="My Work" />
                    </li>
                    <li className='nav-item'>
                        <NavLink className="nav-link dark-w-yellow" href="/skills" text="Skills" />
                    </li>
                    <li className='nav-item'>
                        <NavLink className="nav-link dark-w-yellow" href="/contact" text="Contact" />
                    </li>
                </ul>
            </div>
  </nav>
  );
};