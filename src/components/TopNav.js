import React from "react";
import "./TopNav.css";
import PersonIcon from "@material-ui/icons/Person";
import TextsmsIcon from "@material-ui/icons/Textsms";
import IconButton from "@material-ui/core/IconButton";
import PetsIcon from "@material-ui/icons/Pets";
import { Link } from "react-router-dom";

function TopNav() {
  return (
    <div className="topNav">
      <Link to="/profile">
        <IconButton>
          <PersonIcon className="topNav_icon" style={{ fontSize: 40 }} />
        </IconButton>
      </Link>

      <Link to="/candidate">
        <div className="logoBox">
          <IconButton>
            <PetsIcon className="topNav_logo" style={{ fontSize: 60 }} />
          </IconButton>
        </div>
      </Link>

      <Link to="/messages">
        <IconButton>
          <TextsmsIcon className="topNav_icon" style={{ fontSize: 40 }} />
        </IconButton>
      </Link>
    </div>
  );
}

export default TopNav;
