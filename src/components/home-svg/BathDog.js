import React from "react";
import "./BathDog.scss";

function BathDog() {
  return (
    <div className="bathDog">

      
      <div className="contenedor">
      <h1 className="welcome">Welcome to Sniffles!</h1>
        <div className="todo">
          <div className="dog">
            <span className="leg3"></span>
            <div className="body">
              <span className="cola"></span>
              <span className="leg"></span>
            </div>
            <div className="cabezota">
              <div className="orejas">
                <span className="orejitas"></span>
              </div>
              <div className="orejas3">
                <span className="orejitas3"></span>
              </div>
              <div className="cabeza">
                <span className="cabeza3"></span>
                <span className="ojos">
                  <span className="iris"></span>
                </span>
                <span className="nariz"></span>
                <span className="nariz3"></span>
              </div>
            </div>

            <div className="canasta"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BathDog;
