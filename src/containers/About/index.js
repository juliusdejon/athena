import React from "react";
import Stars from "components/Stars";

import differenceInYears from "date-fns/differenceInYears";

import moon from "assets/images/moon.png";
import shades from "assets/images/shades.png";

import "./About.css";

function About() {
  const years_of_experience = differenceInYears(
    new Date(),
    new Date(2018, 8, 8)
  );
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
            platform. I have {years_of_experience} years of experience in
            Developing Web 🕸️ applications. I'm inclined to cutting edge
            technologies, astronomy, and financial stuffs.
          </p>
          <br />
          <p>
            I have diverse skillset on React and Elixir. I also have a
            background in server linux administration and a certified AWS
            Solutions Architect-Associate.
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
