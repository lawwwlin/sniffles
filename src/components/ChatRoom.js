import React, { useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./ChatRoom.css";
import Alert from '@material-ui/lab/Alert';
// import Chat from './Chat/Chat'
import { Link, useHistory } from "react-router-dom";
import { SocketContext } from '../socketContext';
import { MainContext } from '../mainContext';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from '@material-ui/core/Button';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


// 
function ChatRoom({ room_id, sender_id, receiver_profile, sender_name }) {

  const history = useHistory();
  const socket = useContext(SocketContext)
  const { name, setName, room, setRoom } = useContext(MainContext);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const remove = () => {
    console.log("remove");
  };

  const setValues = async () => {
    console.log('setting values');
    setName(sender_name);
    setRoom(room_id);
  }

  const logIn = () => {
    const name = sender_name;
    const room = room_id;
    socket.emit('login', { name, room }, error => {
      console.log('after log in', room, name);
      if (error) {
          console.log(error)
          return (
            <Alert severity="error">
              {error}
            </Alert>
          )
      }
      // history.push('/chat')
      console.log('connected to', room_id)
      return (
        <Alert severity="success">
          {`Welcome to ${room}`}
        </Alert>
      )
    })
  }

  const onClick = () => {

    console.log('before setting values', sender_name, room_id)
    
    setValues()
      .then(() => {
        logIn();
      })
  }

  return (
    <div className="messenger">
      <Link 
        to={{
        pathname: "/message",
        state: {
          room_id,
          sender_id,
          sender_name,
          receiver_profile
        }}}
        onClick={onClick}
      >
          <Avatar className="messenger_pic" alt={receiver_profile.name} src={receiver_profile.url} />
      </Link>
      <div className="messenger_info">
        <h2>{receiver_profile.name}<IconButton onClick={handleClickOpen}><InfoOutlinedIcon /></IconButton></h2>
        <p>sample message text</p>
      </div>
      <p messenger_timestamp className="messenger_timestamp">
        -insert-timestamp-here-
      </p>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{receiver_profile.name}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           receiver info here
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={remove} autoFocus>
            <span className="messenger_delete"><DeleteForeverIcon/></span><p className="messenger_delete">REMOVE</p>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ChatRoom;
