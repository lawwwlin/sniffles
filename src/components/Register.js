/* import React, { useEffect, useState } from "react";
import RegisterForm from "./RegisterForm";
import axios from "axios";

export function OnCreate(profile) {
  const [newProfile, setNewProfile] = ([]);

  console.log('profile', profile)
  useEffect(() => {
    axios.post(`/api/profile`, profile).then((data) => {
      const user = data.data;
      setNewProfile([user]);
    });
  }, []);

  return (
      console.log('user:', newProfile)
  )
} */

/* import React, { useState } from "react";
import "./Register.css";
import Form from "./Form.js";
import Card from "@material-ui/core/Card";
import PetsIcon from "@material-ui/icons/Pets";
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.background,
    border: 0,
    fontSize: 16,
    borderRadius: 6,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    marginTop: '1em',
  },
}));

function DeepChild() {
  const classes = useStyles();

  return (
    <button type="button" className={classes.root}>
      <h3>Join Sniffles Today</h3>
    </button>
  );
}

const themeInstance = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
};

function Register(props) {
  const { onSave } = props;
  return (
    
    <div className="register">
      <div className="register_title">
      <PetsIcon className="register_icon" style={{ fontSize: 30 }}/>
      <ThemeProvider theme={themeInstance}>
      <DeepChild className="register_text" />
    </ThemeProvider>
    </div>
      <Card className="register_create">
        <Form 
        onSave={onSave}
        />
      </Card>
    </div>
  );
}

*/