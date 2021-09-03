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
import BookmarkIcon from "@material-ui/icons/Bookmark";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Fab from "@material-ui/core/Fab";

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

  const onSwipe = (direction) => {
    if (direction === "right") {
      console.log("right for like");
    }
    if (direction === "left") {
      console.log("left for rejected");
    }
  };

  return (
    <div className="candidate">
      <div className="candidate_card" id="candidate_cardNone">
        <div className="candidate_none">
        <h1>You a bit too thirsty for doggos👀</h1>
        <h1>Drink some water and swipe again later🥵</h1>
        </div>
      </div>
      {candidates.map((candidate) => (
        <DogCard
          className="swipe"
          key={candidate.name}
          preventSwipe={["up", "down"]}
          onSwipe={onSwipe}
        >
          <div
            style={{ backgroundImage: `url(${candidate.imageurl})` }}
            className="candidate_card"
          >
            <div className="candidate_info">
            <Fab variant="extended" disabled aria-label="like" style={{ fontSize: 20 }}>
              <h1 className="candidate_name">{candidate.name}</h1>
              </Fab>
              <h3>
                <LocationOnIcon className="location" />
                {candidate.location}
              </h3>
              <h3>
                <BookmarkIcon />
                {candidate.description}
              </h3>
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

      <Dialog
        open={open}
        onClose={handleClose}
        // aria-labelledby="form-dialog-title"
      >
        <DialogContent className="candidate_dialog">
          <h2>{desc.name}</h2>
          <br/>
          
            <p>Location: {desc.location}</p>
            <p>Breed: {desc.breed}</p>
            <p>Gender: {desc.gender}</p>
            <p>Age: {desc.age}</p>
            <p>Size: {desc.size}</p>
            <p>Owner: {desc.owner}</p>
          <br/>
        </DialogContent>
      </Dialog>
    </div>
  );
}
