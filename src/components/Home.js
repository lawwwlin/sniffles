import React from "react";
import "./Home.css";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      
      <div>
        <Link to="/register">
          <IconButton>
            <PersonAddIcon className="home_newUser" style={{ fontSize: 60 }}/>
            </IconButton>
        </Link>
        <span className="icon_text">Create Account</span>
        </div>
        <div>
        <Link to="/login">
          <IconButton>
            <LockOpenIcon className="home_login" style={{ fontSize: 60 }}/>
          </IconButton>
        </Link>
        <span className="icon_text">Login</span>
      </div>
    </div>
  );
}

export default Home;
