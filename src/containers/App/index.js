import React from "react";
import Navbar from "components/Navbar";
import About from "containers/About";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <div>hello world</div>
    </div>
  );
}

export default App;
