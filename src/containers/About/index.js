import React from "react";
import Stars from "components/Stars";
import moon from "assets/images/moon.png";
import shades from "assets/images/shades.png";

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
          <b className="sub-role">Full Stack Experience</b>{" "}
          <img src={shades} className="ganster-shades" alt="shades" />
        </div>
        <div className="long-description">
          <p>
            I'm a software engineer based in the Philippines specializing in web
            platform. I have 2 years of experience in Developing Web 🕸️
            applications. I'm inclined to cutting edge technologies, astronomy,
            and financial stuffs.
          </p>
          <br />
          <p>
            I have diverse skillset on React and Elixir. I'm also a certified
            AWS Solutions Architect-associate. I love breaking things so I can
            recreate them to understand the inspiration behind it.
          </p>
        </div>
        <div className="earth-container">
          <img src={moon} alt="earth" />
        </div>
      </div>
    </>
  );
}

export default About;
