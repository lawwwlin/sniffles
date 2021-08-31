import React from "react";
import "./ProfileEdit.css";
import Form from "./Form.js";
import Card from '@material-ui/core/Card';

function ProfileEdit(props) {

  return <div className="profileEdit">
    <h3>Profile edit page</h3>

    <Card className="edit-form-card">
    <Form 
      name = {props.name}
      breed = {props.breed}
      gender = {props.gender}
      age = {props.age}
      size = {props.size}
      location = {props.location}
      owner = {props.owner}
      email = {props.email}
      description = {props.description}
    />
    </Card>

  </div>
}

export default ProfileEdit;