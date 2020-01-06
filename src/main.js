import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("main"));

if (module.hot) {
  // enables hot module replacement if plugin is installed
  module.hot.accept();
}
