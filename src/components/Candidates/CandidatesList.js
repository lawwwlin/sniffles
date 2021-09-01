import React, { useEffect, useState } from "react";
import Candidate from "./Candidate";
import axios from "axios";

//IL
export default function CandidateList({ profile }) {
  //get all profiles that arent the current user
  //axios here
  //map thru profile
  /*  useEffect(() => {
    fetchCandidates();
  }, []); */
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
        breed={candidate.breed}
        gender={candidate.gender}
        age={candidate.age}
        size={candidate.size}
        owner={candidate.owner}
      />
    );
  });

  //console.log(profileList)
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Candidate List</h4>
      <ul className="interviewers__list">{parsedCandidates}</ul> 
    </section>
  );
}

/*   const fetchCandidates = async () => {
    const candidates = await axios.get(`/api/profile`);
    console.log(candidates.data);
    return candidates;
  }; 
*/
