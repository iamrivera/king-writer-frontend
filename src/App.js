import "./App.css";
import "./bootstrap.min (1).css";
import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import About from "./components/about";
import Home from "./components/home";
import { NavBar } from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        
      </div>
    );
  }
}

export default App;
