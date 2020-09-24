import React from "react";
import Stars from "components/Stars";
import earth from "assets/images/earth.png";

import "./About.css";

function About() {
  return (
    <>
      <div className="absolute-container">
        <Stars />
      </div>
      <div className="about-container">
        <div className="introduction">Hello world, I'm</div>
        <div className="name">Julius Dejon</div>

        <div className="description">
          <b className="role">Frontend Developer</b> with{" "}
          <b className="sub-role">Full Stack Experience</b>
        </div>
        <div className="long-description">
          <p>
            I'm a software engineer based in the Philippines specializing in web
            platform. I have 2 years of experience in Developing Web 🕸️
            applications. I'm inclined to cutting edge technologies, astronomy,
            and financial stuffs.
          </p>
        </div>
        <div className="earth-container">
          <img src={earth} alt="earth" />
        </div>
      </div>
    </>
  );
}

export default About;
