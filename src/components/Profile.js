import React, { useState } from "react";
import "./Profile.css";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import ProfileEdit from "./ProfileEdit";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 700,
    maxWidth: 700,
    marginTop: 30,
    marginBottom: 40,
    paddingBottom: 10,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

// const profile = {
//   id: 1,
//   imageURL: 'https://tinyurl.com/kb7dhhck',
//   name: 'Bigboi',
//   breed: 'Maltese',
//   location: 'Vancouver',
//   gender: 'male',
//   age: 3,
//   size: 'small',
//   owner: 'BigBoiOwner',
//   email: 'a@a.com',
//   password: 'a',
//   description: 'actually very smol'
// }

function Profile(props) {
  const [editMode, setEditMode] = useState(false);
  const [profile, setProfile] = useState(props.profile);
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function onClick() {
    console.log("profile click");
    setEditMode(true);
  }

  function save(profile) {
    console.log("profile is:", profile);
    setProfile(profile);
    // call axios
    setEditMode(false);
  }

  return (
    <article>
      {!editMode && (
        <div className="profile">
          {/* <h3>Profile page</h3>
          <img className="profile_pic" 
          src={profile.imageUrl}
          alt={profile.name}
          />
          <h3>name: {profile.name}</h3>
          <h3>breed: {profile.breed}</h3>
          <h3>gender: {profile.gender}</h3>
          <h3>age: {profile.age}</h3>
          <h3>size: {profile.size}</h3>
          <h3>location: {profile.location}</h3>
          <h3>owner: {profile.owner}</h3>
          <h3>email: {profile.email}</h3>
          <h3>description: {profile.description}</h3> */}

          <Card className={classes.root}>
            <CardHeader
              title={profile.name}
              subheader="Profile"
            />
            <CardMedia
              className={classes.media}
              image={profile.imageUrl}
              title="profile pic"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                <h1>view and edit info</h1>
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton
                aria-label="add to favorites"
                size="small"
                onClick={onClick}
              >
                <EditIcon className="profile_icon" style={{ fontSize: 35 }} />
              </IconButton>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>info box 0?</Typography>
                <Typography paragraph>info box 1?</Typography>
                <Typography paragraph>info box 2?</Typography>
                <Typography>info 3 xd</Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>
      )}
      {editMode && <ProfileEdit profile={profile} onSave={save} />}
    </article>
  );
}

export default Profile;

/*
         <div
            style={{ backgroundImage: `url(${profile.imageUrl})` }}
            className="profile_card"
          >
            <div className="profile_info">
              <h1>{profile.name}</h1>
              <h3>
                {profile.location}
              </h3>
              <h3>{profile.description}</h3>
            </div>
            <div className="profile_button">
              <IconButton size="small" onClick={onClick}>
                <EditIcon className="profile_icon" style={{ fontSize: 50 }} />
              </IconButton>
            </div>
          </div>
          */
