import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Login.css";
import CandidatesList from "./Candidates/CandidatesList";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";

export default function Login(props) {
  console.log('props: ', props)

}

  /* const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profile, setProfile] = useState([])
  console.log(`email: ${email} ; password: ${password}`);

  const data = {email, password}

  useEffect(() => {
    axios.get(`/api/profile`, data).then((data) => {
      console.log(data);
      const profile = data.data;
      setProfile([profile]);
    });
  }, []);

  return (
    <div className="login">
      <TextField
        autoFocus
        margin="dense"
        id="email"
        label="Email Address"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        type="text"
        fullWidth
      />
      <TextField
        autoFocus
        margin="dense"
        id="pass"
        label="Password"
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        fullWidth
      />
    </div>
  );
}
 */