import React, { useState, useEffect } from "react";
import "./Profile.css";

import ProfileEdit from "./ProfileEdit";
import clsx from "clsx";

// Import components from material-ui
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import Fab from "@material-ui/core/Fab";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  typography: {
    fontFamily: ["Quicksand"].join(","),
  },
  root: {
    width: 700,
    maxWidth: 700,
    marginTop: 15,
    marginBottom: 40,
    paddingBottom: 5,
    boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px;",
  },
  media: {
    height: 100,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    marginRight: "1.5em",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  edit: {
    "& > *": {
      margin: theme.spacing(1),
      backgroundColor: "#ff008f",
      marginLeft: "3em",
    },
  },
}));

/* function Profile({ profile, setProfile }) { */
function Profile(props) {
  const [editMode, setEditMode] = useState(false);
  const [profile, setProfile] = useState(props.profile);
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  console.log('profile props', profile)

  // useEffect(() => {
  //   axios.put(`/api/profile/${profile.id}`, {profile})
  //     .then(() => {setProfile(profile)})
  //     .catch(err => (console.log(err)));
  // }, [editMode]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function onClick() {
    setEditMode(true);
  }

  function save(profile) {
    setProfile(profile);
    setEditMode(false);
  }

  return (
    <article>
      {!editMode && (
        <div className="profile">
          <Card className={classes.root}>
            <div
              style={{ backgroundImage: `url(${profile.imageurl})` }}
              className="profile_card"
            >
              <div className="profile_info">
                <Fab
                  variant="extended"
                  disabled
                  aria-label="like"
                  style={{ fontSize: 20 }}
                >
                  <h1 className="profile_name">{profile.name}</h1>
                </Fab>
                <h3>
                  <LocationOnIcon className="location" />
                  {profile.location}
                </h3>
                <h3>
                  <BookmarkIcon />
                  {profile.description}
                </h3>
              </div>
            </div>
            <CardContent>
              <h3 className="profile_description">View and edit profile</h3>
            </CardContent>

            <CardActions disableSpacing>
              <div className={classes.edit}>
                <Fab color="secondary" aria-label="edit" onClick={onClick}>
                  <EditIcon style={{ fontSize: 35 }} />
                </Fab>
              </div>

              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon
                  className="profile_expand"
                  style={{ fontSize: 35 }}
                />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <h3 paragraph>More Info:</h3>
                <br />
                <p paragraph>About me: {profile.description}</p>
                <p paragraph>Breed: {profile.breed}</p>
                <p paragraph>Age: {profile.age}</p>
                <p paragraph>Gender: {profile.gender}</p>
                <p paragraph>Size: {profile.size}</p>
                <p paragraph>Location: {profile.location}</p>
                <p paragraph>Owner: {profile.owner}</p>
                <p paragraph>Email: {profile.email}</p>
              </CardContent>
            </Collapse>
          </Card>
        </div>
      )}
      {editMode && <ProfileEdit profile={profile} onSave={save} setProfile={setProfile}/>}
    </article>
  );
}

export default Profile;
