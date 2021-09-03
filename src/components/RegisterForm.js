import React, { useState } from "react";
import clsx from "clsx";
import "./Form.css";
import { makeStyles } from "@material-ui/core/styles";
import {
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
  FilledInput,
  OutlinedInput,
  Button,
  TextField,
  MenuItem,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import axios from "axios";

//import {OnCreate} from "./Register"

// material-ui styles
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "30ch",
    },
    "& > *": {
      margin: theme.spacing(1),
      width: "30ch",
    },
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "30ch",
  },
}));

function Form(props) {
  const classes = useStyles();
  //console.log("form props", props);
  const [name, setName] = useState(props.name || "a");
  const [breed, setBreed] = useState(props.breed || "a");
  const [gender, setGender] = useState(props.gender || "male");
  const [age, setAge] = useState(props.age || "3");
  const [size, setSize] = useState(props.size || "small");
  const [location, setLocation] = useState(props.location || "sdf");
  const [owner, setOwner] = useState(props.owner || "a");
  const [email, setEmail] = useState(props.email || "a@a.com");
  const [description, setDescription] = useState(props.description || "sdf");
  const [imageUrl, setimageUrl] = useState(
    props.imageUrl ||
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdogisworld.com%2Fwp-content%2Fuploads%2F2020%2F01%2F1303-1024x683.jpg&f=1&nofb=1"
  );
  const [values, setValues] = useState({
    password: props.password || "a",
    showPassword: false,
  });

  const dogGender = ["male", "female"];
  const dogSizes = ["small", "medium", "large"];

  const onSubmit = async function (event) {
    event.preventDefault();
    console.log("submit clicked");
    const profile = {
      name,
      breed,
      gender,
      age,
      size,
      location,
      owner,
      email,
      description,
      password: values.password,
      imageUrl,
    };
    console.log("profile", profile);
     axios
      .post("/api/profile", profile)
      .then((res) => {
        console.log("done", res);
      })
      .catch((err) => {
        console.log("error", err.response);
      });
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  return (
    <div className="form">
      <form
        autoComplete="off"
        className={classes.root}
        onSubmit={(e) => onSubmit(e)}
      >
        <FormControl>
          <InputLabel htmlFor="name">Name</InputLabel>
          <Input
            className="form__create-input"
            name="name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Who's the good doggo?"
          />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="breed">Breed</InputLabel>
          <Input
            className="form__create-input"
            name="breed"
            type="text"
            value={breed}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
            placeholder="What kind of doggo?"
          />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="imageUrl">imageUrl</InputLabel>
          <Input
            className="form__create-input"
            name="imageUrl"
            type="text"
            value={imageUrl}
            onChange={(e) => {
              setimageUrl(e.target.value);
            }}
            placeholder="doggie profile pic"
          />
        </FormControl>

        <TextField
          id="form__select-gender"
          select
          label="Gender"
          value={gender}
          onChange={(e) => {
            setGender(e.target.value);
          }}
          // SelectProps={{
          //   native: true,
          // }}
        >
          {dogGender.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        <FormControl>
          <InputLabel htmlFor="age">Age</InputLabel>
          <Input
            className="form__create-input"
            name="age"
            type="text"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
            placeholder="How old is the doggo?"
          />
        </FormControl>

        <TextField
          id="form__select-size"
          select
          label="Size"
          value={size}
          onChange={(e) => {
            setSize(e.target.value);
          }}
        >
          {dogSizes.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        <FormControl>
          <InputLabel htmlFor="location">Location</InputLabel>
          <Input
            className="form__create-input"
            name="location"
            type="text"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            placeholder="Which city is doggo from?"
          />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="owner">Owner</InputLabel>
          <Input
            className="form__create-input"
            name="owner"
            type="text"
            value={owner}
            onChange={(e) => {
              setOwner(e.target.value);
            }}
            placeholder="Who picks up the poop?"
          />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="description">Description</InputLabel>
          <Input
            className="form__create-input"
            name="description"
            type="text"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            placeholder="What does the doggo like?"
          />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input
            className="form__create-input"
            name="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Change Email"
          />
        </FormControl>

        <FormControl className={clsx(classes.margin, classes.textField)}>
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            placeholder="Change Password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={(e) => {
                    e.preventDefault();
                  }}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          startIcon={<SaveIcon />}
        >
          Create
        </Button>
      </form>
    </div>
  );
}

export default Form;
