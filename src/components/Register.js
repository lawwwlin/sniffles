import React, { useState } from "react";
import "./Register.css";
import Form from "./Form.js";
import Card from "@material-ui/core/Card";

function Register(props) {
  const { onSave } = props;
  return (
    <div className="register">
      <h1>Create Account</h1>

      <Card className="register_create">
        <Form 
        onSave={onSave}
        />
      </Card>
    </div>
  );
}

export default Register;
