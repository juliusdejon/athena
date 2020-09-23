import React from "react";
import Stars from "components/Stars";

import "./About.css";

function About() {
  return (
    <div className="about-wrapper">
      <div className="absolute-container">
        <Stars />
      </div>
      <div className="about-container">
        <div className="introduction">Hello world, I'm</div>
        <div className="name">Julius Dejon</div>

        <div className="description">
          <b>Frontend Developer</b> with Full Stack Experience
        </div>
        <p className="long-descriton"></p>
      </div>
    </div>
  );
}

export default About;
