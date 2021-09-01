import React, { useEffect } from "react";
import classNames from "classnames";

//front end stuff
import ReplayIcon from "@material-ui/icons/Replay";
import NotInterestedIcon from "@material-ui/icons/NotInterested";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import IconButton from "@material-ui/core/IconButton";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import DogCard from "react-tinder-card";

//ILI
//key, id, name, imageUrl, location, info 
export default function Candidate(props){
  const {
    key,
    id,
    name,
    imageUrl,
    location,
    info
    }
    = props
  console.log("candidates: ", props);

  return (
    <div className="candidate">
      <h1>candidate is here</h1>
      <DogCard className="swipe" key={name} preventSwipe={["up", "down"]}>
        <div style={{ backgroundImage: `url(${imageUrl})` }} className="card">
          <div className="candidate_info">
            <h1>{name}</h1>
            <h3>
              <LocationOnIcon className="location" />
              {location}
            </h3>
            <h3>{info}</h3>
          </div>
        </div>
      </DogCard>

      <div className="button">
        <IconButton>
          <NotInterestedIcon
            className="button_notInterested"
            fontSize="large"
          />
        </IconButton>
        <IconButton>
          <ReplayIcon className="button_replay" fontSize="large" />
        </IconButton>
        <IconButton>
          <LoyaltyIcon className="button_loyalty" fontSize="large" />
        </IconButton>
      </div>
    </div>
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
