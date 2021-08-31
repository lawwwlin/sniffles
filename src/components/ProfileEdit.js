import React, { useState } from "react";
import "./ProfileEdit.css";
import Form from "./Form.js";
import Card from '@material-ui/core/Card';

function ProfileEdit(props) {
  console.log("profileedit props", props);
  return <div className="profileEdit">
    <h3>Profile edit page</h3>

    <Card className="edit-form-card">
    <Form 
      name = {props.profile.name}
      breed = {props.profile.breed}
      gender = {props.profile.gender}
      age = {props.profile.age}
      size = {props.profile.size}
      location = {props.profile.location}
      owner = {props.profile.owner}
      email = {props.profile.email}
      password = {props.profile.password}
      imageUrl = {props.profile.imageUrl}
      description = {props.profile.description}
      onSave = {props.save}
    />
    </Card>

  </div>
}

export default ProfileEdit;