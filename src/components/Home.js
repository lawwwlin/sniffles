import React from "react";
import "./Home.css";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import PetsIcon from "@material-ui/icons/Pets";
import { Link } from "react-router-dom";

import { ThemeProvider, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  loginSubmit: {
    background: theme.background,
    border: 0,
    fontSize: 16,
    borderRadius: 6,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
}));

function DeepChild() {
  const classes = useStyles();

  return (
    <button type="button" className={classes.loginSubmit}>
      LOG IN
    </button>
  );
}

function Home(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const login = () => {
    console.log('login')
  };

  return (
    
    <div className="home">
      <div className="home_logo">
      <PetsIcon className="home_paws" style={{ fontSize: 100 }} />
      </div>
      
      <h1 className="home_welcome">Welcome to Sniffles!</h1>
      
      <div className="home_icon">
      <div>
        <Link to="/register">
          <IconButton>
            <PersonAddIcon className="home_newUser" style={{ fontSize: 60 }} />
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
          
            <DialogTitle className="login_title"><PetsIcon className="login_logo" style={{ fontSize: 50 }} />
            <span className="login_logoText">Log in to Sniffles</span>
            </DialogTitle>
            <DialogContentText></DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Email Address"
              type="text"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="pass"
              label="Password"
              type="password"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={login} >
            <ThemeProvider
        theme={{
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        }}
      >
        <ThemeProvider
          theme={(outerTheme) => ({
            ...outerTheme,
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
          })}
        >
          <DeepChild />
        </ThemeProvider>
      </ThemeProvider>
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default Home;
