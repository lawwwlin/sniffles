import React, { useEffect, useState } from "react";
import "./Home.css";
import Login from "./Login.js";

import PersonAddIcon from "@material-ui/icons/PersonAdd";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import PetsIcon from "@material-ui/icons/Pets";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import App from "./App";

import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import CandidateList from "./Candidates/CandidatesList";

//login stuff
/* import Login from "./Login"; */

const useStyles = makeStyles((theme) => ({
  loginSubmit: {
    background: theme.background,
    border: 0,
    fontSize: 16,
    borderRadius: 6,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
}));

function DeepChild() {
  const classes = useStyles();

  return (
    <button type="button" className={classes.loginSubmit}>
      LOG IN
    </button>
  );
}

function Home(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = useState("");

  const onClick = (e, onClose) => {
    e.preventDefault();
    getUser(handleClose);
  };

  const getUser = async (onClose, state) => {
    if (email && password) {
      console.log("part2:", data);
      await axios
        .get(`/api/profile/${email}/${password}`)
        .then((data) => {
          const profile = data.data;
          console.log("done:", profile);
          setUser([profile]);
          onClose();
        })
        .catch((err) => {
          console.log(err.message);
        });
      //console.log("user:", user);
      //return (user ? <Redirect to="/Candidate" profile={user}/> : alert("no user found"));
    }
  };
  const data = { email, password };

  useEffect(() => {}, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="home">
      <div className="home_logo">
        <PetsIcon className="home_paws" style={{ fontSize: 100 }} />
        <div className="home_welcome">
          <Button variant="outlined" color="secondary">
            <h1>Welcome to Sniffles!</h1>
          </Button>
        </div>
      </div>

      <div className="home_icon">
        <div>
          <Link to="/register">
            <IconButton>
              <PersonAddIcon
                className="home_newUser"
                style={{ fontSize: 60 }}
              />
            </IconButton>
          </Link>
          <span className="icon_text">Create Account</span>
        </div>
        <div>
          <IconButton onClick={handleClickOpen}>
            <LockOpenIcon className="home_login" style={{ fontSize: 60 }} />
          </IconButton>
          <span className="icon_text">Create Account</span>
        </div>

        <div>
          <IconButton onClick={handleClickOpen}>
            <LockOpenIcon className="home_login" style={{ fontSize: 60 }} />
          </IconButton>
          <span className="icon_text">Login</span>
        </div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent>
            <Login />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default Home;
