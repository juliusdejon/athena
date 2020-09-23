import React from "react";

import logo from "assets/images/logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo-container">
          <img src={logo} alt="space" />
        </div>
        <div className="menu-list-container">
          <ul className="menu-list">
            <li className="menu">About</li>
            <li className="menu">Skills</li>
            <li className="menu">Projects</li>
            <li className="menu">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
