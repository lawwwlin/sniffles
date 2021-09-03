import React, { useState } from "react";
import Form from "./Form.js";
import axios from "axios";
import "./Register.css"

export default function onSave(profile) {
  console.log("register profile: ", profile);
  axios
    .post("/api/profile", profile)
    .then((res) => {
      console.log("done", res);
    })
    .catch((err) => {
      console.log("error", err.response);
    });
}
