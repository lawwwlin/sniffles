import React, { useEffect, useState } from "react";
import Candidate from "./Candidate";
import axios from "axios";

const CandidatesList = ({ props }) => {
  /*   console.log('this props', this.props.match.params.id)
   */

  const [candidates, setCandidates] = useState([]);
  const params = window.location.href.split("/");
  const id = params[params.length - 1];
  console.log("id", id);

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
export default CandidatesList;
