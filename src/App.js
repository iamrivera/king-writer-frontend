import "./App.css";
import "./bootstrap.min (1).css";
import React, { Component } from "react";
import { Route } from "react-router-dom";
import About from "./components/about";
import Home from "./components/home";
import { NavBar } from "./components/NavBar";
import PostsContainer from "./containers/PostsContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <PostsContainer />
      </div>
    );
  }
}

export default App;
