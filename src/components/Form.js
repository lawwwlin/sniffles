import React, { useState } from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, Input, InputLabel, FormHelperText, FilledInput, OutlinedInput, Button, TextField, MenuItem } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';

function Form(props) {
  const [name, setName] = useState(props.name || "");
  const [breed, setBreed] = useState(props.breed || "");
  const [gender, setGender] = useState(props.gender || "");
  const [age, setAge] = useState(props.age || "");
  const [size, setSize] = useState(props.size || "");
  const [location, setLocation] = useState(props.location || "");
  const [owner, setOwner] = useState(props.owner || "");
  const [email, setEmail] = useState(props.email || "");
  const [description, setDescription] = useState(props.description || "");

  const dogGender = ["male", "female"];
  const dogSizes = ["small", "medium", "large"];

  const onSubmit = function (event) {
    event.preventDefault();
    console.log("submit clicked")
    if (email) {
      console.log("email exist")
      //login(email, password);
    }
  };

  return (
    <div className="form">
      <form autoComplete="off" onSubmit={onSubmit}>
        <p><FormControl>
          <InputLabel htmlFor="name">Name</InputLabel>
          <Input 
            className="form__create-input"
            name="name"
            type="text"
            value={name || ""}
            onChange={(e) => {setName(e.target.value)}}
            placeholder="Who's the good doggo?"
          />
        </FormControl></p>

        <p><FormControl>
          <InputLabel htmlFor="breed">Breed</InputLabel>
          <Input 
            className="form__create-input"
            name="breed"
            type="text"
            value={breed || ""}
            onChange={(e) => {setBreed(e.target.value)}}
            placeholder="What kind of doggo?"
          />
        </FormControl></p>

        <p><TextField
            id="form__select-gender"
            select
            label="Gender"
            value={gender || ""}
            onChange={(e) => {setGender(e.target.value)}}
            // SelectProps={{
            //   native: true,
            // }}
            >
            {dogGender.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
          ))}
        </TextField></p>

        <p><FormControl>
          <InputLabel htmlFor="age">Age</InputLabel>
          <Input 
            className="form__create-input"
            name="age"
            type="text"
            value={age || ""}
            onChange={(e) => {setAge(e.target.value)}}
            placeholder="How old is the doggo?"
          />
        </FormControl></p>

        <p><FormControl>
          <InputLabel htmlFor="size">Size</InputLabel>
          <Input 
            className="form__create-input"
            name="size"
            type="text"
            value={size || ""}
            onChange={(e) => {setSize(e.target.value)}}
            placeholder="How big is the doggo?"
          />
        </FormControl></p>

        <p><FormControl>
          <InputLabel htmlFor="location">Location</InputLabel>
          <Input 
            className="form__create-input"
            name="location"
            type="text"
            value={location || ""}
            onChange={(e) => {setLocation(e.target.value)}}
            placeholder="Which city does the doggo live at?"
          />
        </FormControl></p>

        <p><FormControl>
          <InputLabel htmlFor="owner">Owner</InputLabel>
          <Input 
            className="form__create-input"
            name="owner"
            type="text"
            value={owner || ""}
            onChange={(e) => {setOwner(e.target.value)}}
            placeholder="Who picks up the poop?"
          />
        </FormControl></p>

        <p><FormControl>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input 
            className="form__create-input"
            name="email"
            type="email"
            value={email || ""}
            onChange={(e) => {setEmail(e.target.value)}}
            placeholder="Email"
          />
        </FormControl></p>

        <p><FormControl>
          <InputLabel htmlFor="description">Description</InputLabel>
          <Input 
            className="form__create-input"
            name="description"
            type="text"
            value={description || ""}
            onChange={(e) => {setDescription(e.target.value)}}
            placeholder="What does the doggo like?"
          />
        </FormControl></p>

        <Button 
          type = "submit"
          variant="contained"
          color="primary"
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
      </form>
    </div>
  );
}

export default Form;