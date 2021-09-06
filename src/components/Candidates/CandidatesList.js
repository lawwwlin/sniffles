import React, { useEffect, useState } from "react";
import Candidate from "./Candidate";
import axios from "axios";
import { withRouter } from "react-router-dom";

const CandidateList = ({profile}) => {
  //added profile along with props just in case if profile is passed through(?) mentor said just in case so i just left it but we can remove after 

  const [candidates, setCandidates] = useState([]);
  // console.log("props.location.state", props.location.state);

  // let id = '';

  // if ("id" in props.location.state) {
  //   id = props.location.state.id;
  // } else { //can remove if we have no issues merging
  //   id = profile.profileID;
  // }
  // console.log("id", id)

  useEffect(() => {
    axios.get(`/api/profiles/${profile.id}`).then((data) => {
      const profiles = data.data;
      setCandidates([...profiles]);
    });
  }, []); 

  return (
    <ul className="candidates__list">
      <h1> CANDIDATE PAGE</h1>
      <Candidate candidate={candidates} />
    </ul>
  );
};

export default withRouter(CandidateList);
