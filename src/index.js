/* eslint-disable no-undef */
import React from "react";
import { render } from "react-dom";
import App from "./App";
import "./index.css";

render(<App />, document.getElementById("main"));

// enables hot module replacement if plugin is installed
if (module.hot) {
  module.hot.accept();
}
