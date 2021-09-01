import React, { useState } from "react";
import "./Candidate.css";
import DogCard from "react-tinder-card";
import NotInterestedIcon from "@material-ui/icons/NotInterested";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import LoyaltyOutlinedIcon from "@material-ui/icons/LoyaltyOutlined";
import IconButton from "@material-ui/core/IconButton";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

function Candidate(props) {
  
  const [candidates, setCandidates] = useState([
    {
      name: "dog1",
      url: "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      info: "I like to sniff things",
      location: "Vancouver",
      breed: "shiba inu",
      gender: "female",
      age: 2,
      size: "small",
      owner: "dog1owner",
      email: "dog1@a.com",
    },
    {
      name: "dog2",
      url: "https://images.pexels.com/photos/164186/pexels-photo-164186.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      info: "Gimme treatz",
      location: "Richmond",
      breed: "corgi",
      gender: "male",
      age: 5,
      size: "small",
      owner: "dog2owner",
      email: "dog2@a.com",
    },
  ]);

  const reject = () => {
    console.log("info: no button");
  };

  const like = () => {
    console.log("info: like button");
  };


  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState([]);

  const handleClickOpen = (candidate, candidateName) => {
    candidates.filter(dog => {
      if (dog.name === candidateName) {
        setInfo(dog);
      }
    })
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="candidate">
      <h1 className="candidate_none">Das all the doggos for now</h1>
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
              <h3>
                <LocationOnIcon className="location" />
                {candidate.location}
              </h3>
              <h3>{candidate.info}</h3>
            </div>
            <div className="button">
              <IconButton size="small" onClick={reject}>
                <NotInterestedIcon
                  className="button_notInterested"
                  style={{ fontSize: 65 }}
                />
              </IconButton>

              <IconButton size="small"  onClick={ () => handleClickOpen(candidate, candidate.name) }>
                <InfoOutlinedIcon
                  className="button_moreInfo"
                  style={{ fontSize: 65 }}
                />
              </IconButton>
              <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="form-dialog-title"
                >
                  <DialogContent>
                    <DialogTitle>
                    {info.name}
                    </DialogTitle>
                    <DialogContentText>
                      <p>Location: {info.location}</p>
                      <p>Breed: {info.breed}</p>
                      <p>Gender: {info.gender}</p>
                      <p>Age: {info.age}</p>
                      <p>Size: {info.size}</p>
                      <p>Owner: {info.owner}</p>
                    </DialogContentText>
                  </DialogContent>
                </Dialog>

              <IconButton size="small" onClick={like}>
                <LoyaltyOutlinedIcon
                  className="button_loyalty"
                  style={{ fontSize: 65 }}
                />
              </IconButton>
            </div>
          </div>
        </DogCard>
      ))}
    </div>
  );
}

export default Candidate;
