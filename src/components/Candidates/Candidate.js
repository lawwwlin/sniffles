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
  const { key, id, name, imageUrl, location, info, breed, gender, age, size, owner } = props;
  console.log("candidates: ", props);

  const reject = () => {
    console.log("info: no button");
  };

  const like = () => {
    console.log("info: like button");
  };

  const [open, setOpen] = useState(false);
  const [desc, setDesc] = useState([]);
  const [candidates, setCandidates] = useState([]);

  const handleClickOpen = (candidateName) => {
    candidates.filter((dog) => {
      if (name === candidateName) {
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
      <DogCard className="swipe" key={name} preventSwipe={["up", "down"]}>
        <div style={{ backgroundImage: `url(${imageUrl})` }} className="candidate_card">
          <div className="candidate_info">
            <h1>{name}</h1>
            <h3>
              <LocationOnIcon className="location" />
              {location}
            </h3>
            <h3>{info}</h3>
          </div>

          <div className="button">
              <IconButton size="small" onClick={reject}>
                <NotInterestedIcon
                  className="button_notInterested"
                  style={{ fontSize: 65 }}
                />
              </IconButton>

              <IconButton size="small"  onClick={ () => handleClickOpen(name) }>
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
                    {name}
                    </DialogTitle>
                    <DialogContentText>
                      <p>Location: {location}</p>
                      <p>Breed: {breed}</p>
                      <p>Gender: {gender}</p>
                      <p>Age: {age}</p>
                      <p>Size: {size}</p>
                      <p>Owner: {owner}</p>
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
    </div>
  );
}
