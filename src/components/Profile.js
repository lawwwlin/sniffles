import React, { useState } from "react";
import "./Profile.css";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import Fab from "@material-ui/core/Fab";
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
  typography: {
    fontFamily: [
      'Quicksand',
    ].join(','),
  },
  root: {
    width: 700,
    maxWidth: 700,
    marginTop: 30,
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
      
    },
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
            <div><h1>{profile.name}</h1></div>
            <CardHeader title="Profile" subheader="View and edit">
              
            </ CardHeader>
            <CardMedia
              className={classes.media}
              image={profile.imageurl}
              title="profile pic"
            />
            <CardContent>
              {/* <Typography variant="body2" color="textSecondary" component="p">
                {profile.description}
              </Typography> */}
              <h1>{profile.name}</h1>
            </CardContent>
            <CardActions disableSpacing>
          
                <div className={classes.edit}>
                  <Fab color="secondary" aria-label="edit" onClick={onClick}>
                    <EditIcon className="profile_icon" style={{ fontSize: 35 }}/>
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
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                
                  <h3 paragraph>More Info:</h3>
                  <br/>
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
