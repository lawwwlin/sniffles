import React, { useEffect, useState } from "react";
import Candidate from "./Candidate";
import axios from "axios";
import { withRouter } from "react-router-dom";

const CandidateList = (props, profile) => {
  const [candidates, setCandidates] = useState([]);
  console.log("props.location.state", props.location.state);

  let id = '';

  if ("id" in props.location.state) {
    id = props.location.state.id;
  } else { //can remove if we have no issues merging
    id = profile.profileID;
  }
  console.log("id", id)

  useEffect(() => {
    axios.get(`/api/profiles/${id}`).then((data) => {
      const profiles = data.data;
      setCandidates([...profiles]);
    });
  }, []); 

  return (
    <ul className="candidates__list">
      <Candidate candidate={candidates} />
    </ul>
  );
};

export default withRouter(CandidateList);
