import React from "react";
import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="about-me-container">
      <div className="about-me-left">
        <h1>technology used</h1>
        <p>frontend - React, React Native, Typescript, HTML, CSS</p>
        <p>backend - Elixir, Ruby, Node, GraphQL, PostgreSQL</p>
        <p>
          infra - Docker, Kubernetes, Terraform, Vagrant, Ansible, Nginx, Amazon
          Web Services
        </p>
        <p>tools - react-testing-library, jest, mocha</p>
      </div>
      <div className="about-me-right"></div>
    </div>
  );
}

export default AboutMe;
