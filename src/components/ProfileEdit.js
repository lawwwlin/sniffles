import React, { useState } from "react";
import "./ProfileEdit.css";

// Import components from material-ui
import Form from "./Form.js";
import Card from "@material-ui/core/Card";

function ProfileEdit(props) {
  const { profile, onSave } = props;

  return (
    <div className="profileEdit">
      <Card className="edit-form-card">
        <Form
          imageUrl={profile.imageurl}
          name={profile.name}
          breed={profile.breed}
          gender={profile.gender}
          age={profile.age}
          size={profile.size}
          location={profile.location}
          owner={profile.owner}
          email={profile.email}
          password={profile.password}
          description={profile.description}
          onSave={onSave}
          submit={"Save"}
        />
      </Card>
    </div>
  );
}

export default ProfileEdit;
