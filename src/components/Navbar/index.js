import React from "react";

import earth from "assets/images/earth.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo-container">
          <img src={earth} alt="space" />
        </div>
        <div className="menu-list-container">
          <ul className="menu-list">
            <li className="menu">
              <span>Projects</span>
            </li>
            <li className="menu">
              <span>Experience</span>
            </li>
            <li className="menu">
              <span>Contact</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
