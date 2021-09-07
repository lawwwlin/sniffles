import axios from "axios";
import "./Register.css";

export default function onSave(profile) {
  axios.post("/api/profile", profile);
}
