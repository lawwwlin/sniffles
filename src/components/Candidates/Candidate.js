import React, { useEffect } from "react";
import classNames from "classnames";
import "./Candidate.css";

//front end stuff
import ReplayIcon from "@material-ui/icons/Replay";
import NotInterestedIcon from "@material-ui/icons/NotInterested";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import IconButton from "@material-ui/core/IconButton";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import DogCard from "react-tinder-card";

export default function Candidate(props) {
  //destructure props
  const { key, id, name, imageUrl, location, info } = props;

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
