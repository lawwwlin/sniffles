import React, { useEffect } from "react";
import classNames from "classnames";
import axios from "axios";
import CandidatesList from './CandidatesList';

export default function Candidate({ name, imageUrl, setCandidate }) {
  let candidateClass = classNames("candidate");

  const fetchCandidates = async () => {
    const candidates = await axios.get("/api/candidate/1/2");
    console.log(candidates.data[0].profile_id);
  };

  useEffect(() => {
    fetchCandidates();
  }, []);

  return (
    <section className="interviewers">
      <h4 className="candidates_header">Candidates</h4>
      <ul>{CandidatesList}</ul>
    </section>
  );
}

/* 
import React, { useState } from "react";
import "./Candidate.css";
import DogCard from "react-tinder-card";

import ReplayIcon from '@material-ui/icons/Replay';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import IconButton from "@material-ui/core/IconButton";
import LocationOnIcon from '@material-ui/icons/LocationOn';

function Candidate() {
  const [candidates, setCandidates] = useState([
    {
      name: "dog1",
      url: "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      info: "I like to sniff things",
      location: "Vancouver"
    },
    {
      name: "dog2",
      url: "https://images.pexels.com/photos/164186/pexels-photo-164186.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      info: "Gimme treatz",
      location: "Richmond"
    },
  ]);

  return (
    <div className="candidate">
      <h1>candidate is here</h1>
      {candidates.map((candidate) => (
        <DogCard
          className="swipe"
          key={candidate.name}
          preventSwipe={["up", "down"]}
        >
          <div
            style={{ backgroundImage: `url(${candidate.url})` }}
            className="card"
          >
            <div className="candidate_info">
            <h1>{candidate.name}</h1>
            <h3><LocationOnIcon className="location" />{candidate.location}</h3>
            <h3>{candidate.info}</h3>
            </div>
         
          </div>
        </DogCard>
      ))}
         <div className="button">
           <IconButton>
            <NotInterestedIcon className="button_notInterested" fontSize ="large" />
            </IconButton>
            <IconButton>
            <ReplayIcon className="button_replay" fontSize ="large" />
            </IconButton>
            <IconButton>
            <LoyaltyIcon className="button_loyalty" fontSize ="large" />
            </IconButton>
            </div>
    </div>
  );
}

export default Candidate; */
