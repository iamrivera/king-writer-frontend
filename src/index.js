import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react";
import { createStore, compose } from "redux";

import "./bootstrap.min2.css";
import "./index.css";

import App from "./App";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
