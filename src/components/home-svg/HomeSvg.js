import React from "react";
import "./HomeSvg.scss";

function HomeSvg() {
  return (
    <div>
      <div className="container">
        <h1>Welcome to Sniffles!</h1>

        <div className="dog-container dog-container--one">
          <div className="dog dog--one"></div>
        </div>

        <div className="dog-container dog-container--two">
          <div className="dog dog--two"></div>
        </div>

        <div className="dog-container dog-container--three">
          <div className="dog dog--three"></div>
        </div>

        <div className="dog-container dog-container--four">
          <div className="dog dog--four"></div>
        </div>
      </div>
    </div>
  );
}

export default HomeSvg;
