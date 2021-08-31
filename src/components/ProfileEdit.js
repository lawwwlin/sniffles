import React from "react";
import "./Profile.css";
import Form from "./Form.js";
import { isPropertySignature } from "typescript";

function ProfileEdit(props) {
  return <div className="profileEdit">
    <h3>Profile edit page</h3>

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

  </div>
}

export default ProfileEdit;