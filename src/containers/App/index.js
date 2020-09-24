import React from "react";
import Navbar from "components/Navbar";
import About from "containers/About";
import Projects from "containers/Projects";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Projects />
    </div>
  );
}

export default App;
