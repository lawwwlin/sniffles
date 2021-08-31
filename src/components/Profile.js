import React, { useState } from "react";
import "./Profile.css";
import EditIcon from '@material-ui/icons/Edit';
import IconButton from "@material-ui/core/IconButton";
import ProfileEdit from "./ProfileEdit";

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

  function onClick() {
    setEditMode(true);
  }

  function save(profile) {
    setProfile(profile);
    setEditMode(false);
  }

  return (
    <article> 
      { !editMode &&
        (<div className="profile">
          <h3>Profile page</h3>
          <img className="profile_pic" 
          src={props.profile.imageURL}
          alt={props.profile.name}
          />
          <h3>name: {props.profile.name}</h3>
          <h3>breed: {props.profile.breed}</h3>
          <h3>gender: {props.profile.gender}</h3>
          <h3>age: {props.profile.age}</h3>
          <h3>size: {props.profile.size}</h3>
          <h3>location: {props.profile.location}</h3>
          <h3>owner: {props.profile.owner}</h3>
          <h3>email: {props.profile.email}</h3>
          <h3>description: {props.profile.description}</h3>
          <IconButton onClick={onClick}>
            <EditIcon className="profile_icon" fontSize="large"/>
          </IconButton>
        </div>)
      }
      { editMode &&
        (<ProfileEdit 
          profile={props.profile}
          onSave={save}
        />)
      }
    </article>
  );
}

export default Profile;