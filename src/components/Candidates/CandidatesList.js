import React, { useEffect, useState } from "react";
import Candidate from "./Candidate";
import axios from "axios";

export default function CandidateList(profile) {
  const [candidates, setCandidates] = useState([]);
  console.log(profile);
  useEffect(() => {
    axios.get(`/api/profiles/${profile.profileID}`).then((data) => {
      const profiles = data.data;
      setCandidates([...profiles]);
    });
  }, []);

  return (
    <ul className="candidates__list">
      <Candidate candidate={candidates} />
    </ul>
  );
}
