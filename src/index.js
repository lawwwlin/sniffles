import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import HomeSvg from "./components/home-svg/HomeSvg"

ReactDOM.render(
  <React.StrictMode>
    <App />
    <HomeSvg />
  </React.StrictMode>,
  document.getElementById("root")
);
