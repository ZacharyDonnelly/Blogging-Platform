import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "@babel/polyfill";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("main"));

// eslint-disable-next-line no-undef
if (module.hot) {
  // enables hot module replacement if plugin is installed
  // eslint-disable-next-line no-undef
  module.hot.accept();
}
