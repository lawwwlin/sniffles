import React, { useState } from "react";
import "./ProfileEdit.css";

// Import components from material-ui
import Form from "./Form.js";
import Card from "@material-ui/core/Card";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    background: theme.background,
    border: 0,
    fontSize: 16,
    borderRadius: 6,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 70px",
    marginTop: "0.5em",
  },
}));

function DeepChild() {
  const classes = useStyles();

  return (
    <button type="button" className={classes.title}>
      <h3>Edit Profile</h3>
    </button>
  );
}

function ProfileEdit(props) {
  const { profile, onSave } = props;

  const classes = useStyles();

  return (
    <div className="profileEdit">
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

      <Card className="edit-form-card">
        <Form
          imageUrl={profile.imageUrl}
          name={profile.name}
          breed={profile.breed}
          gender={profile.gender}
          age={profile.age}
          size={profile.size}
          location={profile.location}
          owner={profile.owner}
          email={profile.email}
          password={profile.password}
          description={profile.description}
          onSave={onSave}
          submit={"Save"}
        />
      </Card>
    </div>
  );
}

export default ProfileEdit;
