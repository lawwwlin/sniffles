import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import PetsIcon from "@material-ui/icons/Pets";
import { Redirect } from "react-router-dom";
import "./Login.css";

import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import { ThemeProvider, makeStyles } from "@material-ui/core/styles";

import React, { useState, useEffect } from "react";
import axios from "axios";

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

function Login({ setProfile }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [redirect, setRedirect] = useState(false);

  const onClick = (e, onClose) => {
    e.preventDefault();
    getUser();
  };

  const getUser = async (onClose, state) => {
    if (email && password) {
      await axios
        .get(`/api/profile/${email}/${password}`)
        .then((data) => {
          const profile = data.data;
          setUser(profile);
          if (profile.length > 0) {
            // "authentication" - check if user can log in
            setProfile(profile);
            setRedirect(true);
          } else {
            alert("Wrong user or password!");
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="login">
      <PetsIcon className="login_logo" style={{ fontSize: 50 }} />
      <div className="login_title">
        <h3>Log in to Sniffles</h3>
      </div>
      <CardContent>
        <TextField
          autoFocus
          margin="dense"
          id="email"
          label="Email Address"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="text"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="pass"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          fullWidth
        />
      </CardContent>
      <CardActions>
        <Button onClick={onClick}>
          {user && redirect ? (
            <Redirect
              to={{ pathname: "/" }} //returns id as props
            />
          ) : null}{" "}
          
          <ThemeProvider
            theme={{
              background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
              boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
            }}
          >
            <ThemeProvider
              theme={(outerTheme) => ({
                ...outerTheme,
                background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
              })}
            >
              <DeepChild />
            </ThemeProvider>
          </ThemeProvider>
        </Button>
      </CardActions>
    </div>
  );
}

export default Login;
