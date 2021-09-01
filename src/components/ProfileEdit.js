import React, { useState } from "react";
import "./ProfileEdit.css";
import Form from "./Form.js";
import Card from '@material-ui/core/Card';

function ProfileEdit(props) {
  const { profile, onSave } = props;

  console.log("profileedit props", props);
  
  return (
  <div className="profileEdit">

    <h3>Profile edit page</h3>

    <Card className="edit-form-card">
    <Form 
      name = {profile.name}
      breed = {profile.breed}
      gender = {profile.gender}
      age = {profile.age}
      size = {profile.size}
      location = {profile.location}
      owner = {profile.owner}
      email = {profile.email}
      password = {profile.password}
      imageUrl = {profile.imageUrl}
      description = {profile.description}
      onSave = {onSave}
    />
    </Card>
  </div>
  );
}

export default ProfileEdit;