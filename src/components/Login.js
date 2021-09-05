import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

// Import components from material-ui
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import PetsIcon from "@material-ui/icons/Pets";
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
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

const login = () => {
  console.log('login')
};

function Login() {
  return (
    <div className="login">
      
      <PetsIcon className="login_logo" style={{ fontSize: 50 }} />
      <div className="login_title">
          <h3>Log in to Sniffles</h3>
          </div>
      <CardContent>  
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
        </CardContent>
        <CardActions>
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
        </CardActions>
        
    </div>
  );
}

export default Login;

/*
   <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent>
          
            <DialogTitle className="login_title"><PetsIcon className="login_logo" style={{ fontSize: 50 }} />
            <p>Log in to Sniffles</p>
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
        */