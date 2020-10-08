import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import $ from "jquery";
import Popper from "popper.js";

import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
