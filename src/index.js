import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

import "./bootstrap.min2.css";
import "./index.css";

import App from "./App";

const store = createStore();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
