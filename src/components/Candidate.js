import React, { useState } from "react";
import "./Candidate.css";
import DogCard from "react-tinder-card";

function Candidate() {
  const [candidates, setCandidates] = useState([
    {
      name: "dog1",
      url: "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      name: "dog2",
      url: "https://images.pexels.com/photos/164186/pexels-photo-164186.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
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
            <h2>{candidate.name}</h2>
          </div>
        </DogCard>
      ))}
    </div>
  );
}

export default Candidate;
