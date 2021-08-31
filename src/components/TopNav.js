import React from "react";
import "./TopNav.css";
import PersonIcon from "@material-ui/icons/Person";
import TextsmsIcon from "@material-ui/icons/Textsms";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

function TopNav() {
  return (
    <div className="topnav">    
      <Link to="/profile">
        <IconButton>
          <PersonIcon className="topnav_icon" fontSize="large" />
        </IconButton>
        </Link>

      <Link to="/">
        <IconButton>
          <h2>TOP NAV: LOGO AREA</h2>
        </IconButton>
      </Link>

      <IconButton>
        <TextsmsIcon className="topnav_icon" fontSize="large" />
      </IconButton>
    </div>
  );
}

export default TopNav;
