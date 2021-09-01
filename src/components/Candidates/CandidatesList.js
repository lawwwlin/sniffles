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

  
  const profileList = axios.get("/api/profile")
  .then((data) => {
    const profiles = data.data
    console.log('profiles: ', profiles)
    profiles.map((candidate) => {
      return (
        <Candidate
        key={candidate.id} 
        id={candidate.id} 
        name={candidate.name}
        imageUrl={candidate.imageUrl}
        location={candidate.location}
        info={candidate.info} />
      );
    });
  });

  console.log(profileList)
  return (
    <section className="interviewers">
    <h4 className="interviewers__header text--light">Candidate List</h4>
    <ul className="interviewers__list">{profileList}</ul>
  </section>
  );
}


/*   const fetchCandidates = async () => {
    const candidates = await axios.get(`/api/profile`);
    console.log(candidates.data);
    return candidates;
  }; 
*/
