import React, { useEffect, useState } from "react";
import Candidate from "./Candidate";
import axios from "axios";

export default function CandidateList({ profile }) {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    axios.get("/api/profile").then((data) => {
      const profiles = data.data;
      setCandidates([...profiles]);
    });
  }, []);

  /*  const parsedCandidates = candidates.map((candidate) => {
    return (
      <Candidate
        key={candidate.id}
        id={candidate.id}
        name={candidate.name}
        imageUrl={candidate.imageurl}
        location={candidate.location}
        info={candidate.description}
        breed={candidate.breed}
        gender={candidate.gender}
        age={candidate.age}
        size={candidate.size}
        owner={candidate.owner}
      />
    );
  }); */

  return (
      <ul className="candidates__list"><Candidate candidate={candidates}/></ul> 
  );
}
