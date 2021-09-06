import React, { useContext, useEffect, useState } from "react";

import { MainContext } from "../../mainContext";
import { SocketContext } from "../../socketContext";
import ScrollToBottom from "react-scroll-to-bottom";
import "./Chat.scss";
import { UsersContext } from "../../usersContext";

import axios from "axios";
import { useLocation, Link, useHistory } from "react-router-dom";

// Import components from material-ui
import {
  Avatar,
  makeStyles,
  TextField,
  Button,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import MessageIcon from "@material-ui/icons/Message";
import PetsIcon from "@material-ui/icons/Pets";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import FlagIcon from "@material-ui/icons/Flag";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

// required info: sender_id, receiver_id, room_id, sender_name
const Chat = (props) => {
  const location = useLocation();
  const { recipient, sender_id, chatroom } = location.state;
  const { name, room, setName, setRoom } = useContext(MainContext);
  const socket = useContext(SocketContext);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(JSON.parse(chatroom.messages));
  const { setUsers } = useContext(UsersContext);
  const history = useHistory();
  console.log("just loaded chat compo:", JSON.parse(chatroom.messages))
  console.log("2 loaded chat compo:", messages)
  
  const logout = () => {
    setName('');
    setRoom('');
    socket.emit('logout');
    console.log('after setting name and room', name, room);
    // history.push('/messages');
    // history.go(0);
  };
  
  // logout when the active history entry changes
  window.onpopstate = e => logout();
  const classes = useStyles();

  // open infobox
  const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  
  const remove = () => {
    console.log("remove test button");
  };

  
  //Checks to see if there's a user present
  // useEffect(() => { if (!name) return history.push('/') }, [history, name]);
  const report = () => {
    console.log("report test button");
  };

  // useEffect(() => {
  //   socket.on("users", users => {
  //       setUsers(users)
  //   })
  // })
  useEffect(() => {
    socket.on("message", (msg) => {
      setMessages((messages) => [...messages, msg]);
    });
  }, [socket]);

  useEffect(() => {
    console.log('line 78 when is this run?')
    // this step is requried, or else the seed from database will not be the same when server first starts
    const msg = JSON.stringify(JSON.parse(chatroom.messages));
    if (JSON.stringify(messages) !== msg) {
      const room = {id: chatroom.id, profile1_id: sender_id, profile2_id: recipient.id, messages: messages}
      axios.put(`/api/chatroom/${chatroom.id}`, {room})
        .then((res) => {console.log("after put", res)})
        .catch(error => console.log(error));
    }
  }, [messages]);
  
  
  const handleSendMessage = () => {
    socket.emit('sendMessage', message, () => {setMessage('')});
    setMessage('');
    console.log(message);
  };

  const getMatchTime = () => {
    let time = new Date(chatroom.matchedat * 1000).toString()
    console.log('indexof:', time.indexOf("G"))
    const parseTimeIndex=time.indexOf("G")
    time = time.slice(0, parseTimeIndex)
    console.log('time:', time)

    return time
  };


  return (
    <div className="room">
      <div className="heading">
        <div className="room-title">
          {console.log(`room: ${chatroom.id}, message to ${recipient.name}`)}
          <Link to="/messages">
            <IconButton onClick={logout}>
              <ArrowBackIosIcon id="chat_icon" style={{ fontSize: 40 }} />
            </IconButton>
          </Link>
        </div>
        {/* remove logout button later and add back button*/}

        <Link to="/candidate">
          <div className="chat_logbox">
            <IconButton onClick={logout}>
              <PetsIcon className="chat_logo" style={{ fontSize: 60 }} />
            </IconButton>
          </div>
        </Link>

        <div>
          {/* <p>{recipient.name}</p> */}

          <IconButton onClick={handleClickOpen}>
            <Avatar
              id="chat_icon"
              alt={recipient.name}
              src={recipient.imageurl}
              style={{ fontSize: 40 }}
              className={classes.large}
            />
            {recipient.imageUrl}
          </IconButton>
        </div>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title"></DialogTitle>
        <DialogContent>
          <h3>{recipient.name}</h3>
          <br />
          <p>Location: {recipient.location}</p>
          <p>Breed: {recipient.breed}</p>
          <p>Gender: {recipient.gender}</p>
          <p>Age: {recipient.age}</p>
          <p>Size: {recipient.size}</p>
          <p>Owner: {recipient.owner}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={report} autoFocus>
            <span className="chat_report">
              <FlagIcon />
            </span>
            <p className="chat_report">REPORT</p>
          </Button>
          <Button onClick={remove} autoFocus>
            <span className="chat_delete">
              <DeleteForeverIcon />
            </span>
            <p className="chat_delete">REMOVE</p>
          </Button>
        </DialogActions>
      </Dialog>

      <ScrollToBottom className="messages" debug={false}>
        <div className="match-time">
          <h4 className="match-text">
            {" "}
            You matched with {recipient.name} on {getMatchTime()}{" "}
          </h4>
        </div>
        {messages.length > 0 ? (
          messages.map((msg, i) => (
            <div
              key={i}
              className={`message ${msg.user === name ? "my-message" : ""}`}
            >
              <h6 className="user">{msg.user}</h6>
              <h4 className="msg">{msg.text}</h4>
            </div>
          ))
        ) : (
          <div className="empty-message">
            <div>-----</div>
            <MessageIcon />
            <h4> No messages </h4>
            <div>-----</div>
          </div>
        )}
      </ScrollToBottom>

      <div className="form">
        <TextField
          className="form_text"
          type="text"
          label="Enter Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          fullWidth
          // multiline
          // rows={2}
          variant="outlined"
        />
        <Button
          variant="contained"
          color="primary"
          startIcon={<SendIcon />}
          onClick={handleSendMessage}
          disabled={message === "" ? true : false}
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default Chat;
