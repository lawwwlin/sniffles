import React, { useContext, useEffect, useState } from "react";

import { MainContext } from "../../mainContext";
import { SocketContext } from "../../socketContext";
import ScrollToBottom from "react-scroll-to-bottom";
import "./Chat.scss";

import axios from "axios";
import { useLocation, Link } from "react-router-dom";

// Import components from material-ui
import {
  Avatar,
  makeStyles,
  TextField,
  Button,
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import MessageIcon from "@material-ui/icons/Message";
import PetsIcon from "@material-ui/icons/Pets";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

// required info: sender_id, receiver_id, room_id, sender_name
const Chat = () => {
  const location = useLocation();
  const { recipient, sender_id, chatroom } = location.state;
  const { name, room, setName, setRoom } = useContext(MainContext);
  const socket = useContext(SocketContext);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(JSON.parse(chatroom.messages));

  const logout = () => {
    setName("");
    setRoom("");
    socket.emit("logout");
    console.log("after setting name and room", name, room);
  };

  // logout when the active history entry changes
  window.onpopstate = (e) => logout();
  const classes = useStyles();

  // open infobox
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    socket.on("message", (msg) => {
      setMessages((messages) => [...messages, msg]);
    });
  }, [socket]);

  useEffect(() => {
    // this step is requried, or else the seed from database will not be the same when server first starts
    const msg = JSON.stringify(JSON.parse(chatroom.messages));
    if (JSON.stringify(messages) !== msg) {
      const room = {
        id: chatroom.id,
        profile1_id: sender_id,
        profile2_id: recipient.id,
        messages: messages,
      };
      axios
        .put(`/api/chatroom/${chatroom.id}`, { room })
        .catch((error) => console.log(error));
    }
  }, [messages]);

  const handleSendMessage = () => {
    socket.emit("sendMessage", message, () => {
      setMessage("");
    });
    setMessage("");
  };

  const getMatchTime = () => {
    let time = new Date(chatroom.matchedat * 1000).toString();
    const parseTimeIndex = time.indexOf("G");
    time = time.slice(0, parseTimeIndex);
    return time;
  };

  return (
    <div className="room">
      <div className="heading">
        <div className="room-title">
          <Link to="/messages">
            <IconButton onClick={logout}>
              <ArrowBackIosIcon id="chat_icon" style={{ fontSize: 40 }} />
            </IconButton>
          </Link>
        </div>
        <Link to="/candidate">
          <div className="chat_logbox">
            <IconButton onClick={logout}>
              <PetsIcon className="chat_logo" style={{ fontSize: 60 }} />
            </IconButton>
          </div>
        </Link>

        <div>
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
