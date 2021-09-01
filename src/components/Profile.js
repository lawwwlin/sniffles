import React, { useState } from "react";
import "./Profile.css";
import EditIcon from "@material-ui/icons/Edit";
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

          <div
            style={{ backgroundImage: `url(${profile.imageUrl})` }}
            className="profile_card"
          >
            <div className="profile_info">
              <h1>{profile.name}</h1>
              <h3>
                {/* <LocationOnIcon className="location" /> */}
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
        </div>
      )}
      {editMode && <ProfileEdit profile={profile} onSave={save} />}
    </article>
  );
}

export default Profile;
