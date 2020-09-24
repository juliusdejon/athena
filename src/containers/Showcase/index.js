import React from "react";
import Navbar from "components/Navbar";
import About from "containers/About";

import "./Showcase.css";

function Showcase() {
  return (
    <div className="showcase-container">
      <Navbar />
      <About />
    </div>
  );
}

export default Showcase;
