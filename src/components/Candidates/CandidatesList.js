import React, {useState} from 'react';
import Candidate from './Candidate';
 
//front end stuff
import ReplayIcon from '@material-ui/icons/Replay';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import IconButton from "@material-ui/core/IconButton";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import DogCard from "react-tinder-card";

export default function Candidates(candidates) {
  const candidateList = candidates.data.map(candidate => {
    return <Candidate
    name={candidate.profile_id}
    />
  })

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

