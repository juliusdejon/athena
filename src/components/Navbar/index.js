import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link className="navbar-logo">JD supply co</Link>
        <div className="menu-icon"></div>
      </div>
    </div>
  );
}

export default Navbar;
