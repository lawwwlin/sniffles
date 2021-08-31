import React, { useState } from "react";
import "./Profile.css";
import EditIcon from '@material-ui/icons/Edit';
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

const profile = {
  id: 1,
  imageURL: 'https://tinyurl.com/kb7dhhck',
  name: 'Bigboi',
  breed: 'Maltese',
  location: 'Vancouver',
  gender: 'male',
  age: 3,
  size: 'small',
  owner: 'BigBoiOwner',
  email: 'a@a.com',
  password: 'a',
  description: 'actually very smol'
}

function Profile() {

  return (
    <div className="profile">
      <h3>Profile page</h3>
      <img className="profile_pic" 
      src={profile.imageURL}
      alt={profile.name}
      />
      {/* <div style={{backgroundImage: 
      `url(${profile.imageURL})`}} 
      className="profile_pic">
      </div> */}
      <h3>name: {profile.name}</h3>
      <h3>breed: {profile.breed}</h3>
      <h3>gender: {profile.gender}</h3>
      <h3>age: {profile.age}</h3>
      <h3>size: {profile.size}</h3>
      <h3>location: {profile.location}</h3>
      <h3>owner: {profile.owner}</h3>
      <h3>email: {profile.email}</h3>
      <h3>description: {profile.description}</h3>
      <Link to="/edit">
      <IconButton>
        <EditIcon className="profile_icon" fontSize="large" />
      </IconButton>
      </Link>
    </div>
  );
}

export default Profile;

<div style={{backgroundImage: `url(${profile.imageURL})`}} 
className="profile_pic"></div>