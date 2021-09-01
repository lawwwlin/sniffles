import React, { useEffect, useState } from "react";
import Candidate from "./Candidate";
import axios from "axios";

export default function CandidateList({ profile }) {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    axios.get("/api/profile").then((data) => {
      const profiles = data.data;
      console.log("profiles: ", profiles);
      setCandidates([...profiles]);
    });
  }, []);

   const parsedCandidates = candidates.map((candidate) => {
    return (
      <Candidate
        key={candidate.id}
        id={candidate.id}
        name={candidate.name}
        imageUrl={candidate.imageurl}
        location={candidate.location}
        info={candidate.description}
      />
    );
  });
  return (
      <ul className="candidates__list">{parsedCandidates}</ul> 
  );
}
