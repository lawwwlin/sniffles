import React from "react";
import "./Home.css";
import Login from "./Login.js";

// UI stuff //
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import PetsIcon from "@material-ui/icons/Pets";
import { Link } from "react-router-dom";
// UI stuff //

function Home(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="home">
      <div className="home_logo">
        <PetsIcon className="home_paws" style={{ fontSize: 100 }} />
        <div className="home_welcome">
          <Button variant="outlined" color="secondary">
            <h1>Welcome to Sniffles!</h1>
          </Button>
        </div>
      </div>

      <div className="home_icon">
        <div>
          <Link to="/register">
            <IconButton>
              <PersonAddIcon
                className="home_newUser"
                style={{ fontSize: 60 }}
              />
            </IconButton>
          </Link>
          <span className="icon_text">Create Account</span>
        </div>
        <div>
          <IconButton onClick={handleClickOpen}>
            <LockOpenIcon className="home_login" style={{ fontSize: 60 }} />
          </IconButton>
          <span className="icon_text">Login</span>
        </div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent>
            <Login />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default Home;
