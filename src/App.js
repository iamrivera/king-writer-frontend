import "./App.css";
import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import About from "./components/about";
import Home from "./components/home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <About />
        <Home />
      </div>
    );
  }
}

export default App;
