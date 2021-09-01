import React, { useEffect, useState } from "react";
import classNames from "classnames";
import "./Candidate.css";

//front end stuff
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

//ILI
//key, id, name, imageUrl, location, info
export default function Candidate(props) {
  console.log("props.candidate:  ", props.candidate);
  const { candidate: candidates } = props;

  const reject = () => {
    console.log("info: no button");
  };

  const like = () => {
    console.log("info: like button");
  };

  const [open, setOpen] = useState(false);
  const [desc, setDesc] = useState([]);

  const handleClickOpen = (candidate, candidateName) => {
    candidates.filter((dog) => {
      if (dog.name === candidateName) {
        setDesc(dog);
      }
    });
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
            style={{ backgroundImage: `url(${candidate.imageurl})` }}
            className="candidate_card"
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

              <IconButton
                size="small"
                onClick={() => handleClickOpen(candidate, candidate.name)}
              >
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
                  <DialogTitle>{desc.name}</DialogTitle>
                  <DialogContentText>
                    <p>Location: {desc.location}</p>
                    <p>Breed: {desc.breed}</p>
                    <p>Gender: {desc.gender}</p>
                    <p>Age: {desc.age}</p>
                    <p>Size: {desc.size}</p>
                    <p>Owner: {desc.owner}</p>
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
