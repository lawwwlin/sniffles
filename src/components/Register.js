import React, { useState } from "react";
import axios from "axios";
import "./Register.css";
import { Redirect } from "react-router-dom";
/* import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  maintext: {
    background: theme.background,
    border: 0,
    fontSize: 16,
    borderRadius: 6,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
}));

// function DeepChild() {
//   const classes = useStyles();

//   return (
//     <button type="button" className={classes.maintext}>
//       <h3>Join Sniffles Today</h3>
//     </button>
//   );
// }

const themeInstance = {
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
}; */
/* const [redirect, setRedirect] = useState(false); */

export default function onSave(profile) {
  axios
    .post("/api/profile", profile)
    .then((res) => {
      console.log("done", res);
    })
/*     .then(() => {
      return <Redirect to="/" />;
    }); */
}
