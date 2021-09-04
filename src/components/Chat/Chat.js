import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { MainContext } from "../../mainContext";
import { SocketContext } from "../../socketContext";
import ScrollToBottom from "react-scroll-to-bottom";
import "./Chat.scss";
import { UsersContext } from "../../usersContext";
import { TextField, Button } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import MessageIcon from "@material-ui/icons/Message";
import axios from "axios";
import { useLocation, Link } from "react-router-dom";

//info popup
import Avatar from "@material-ui/core/Avatar";
import PetsIcon from "@material-ui/icons/Pets";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import FlagIcon from "@material-ui/icons/Flag";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

// required info: sender_id, receiver_id, room_id, sender_name
const Chat = (props) => {
  const location = useLocation();
  const { receiver_profile, sender_id, chatroom } = location.state;
  const { name, room, setName, setRoom } = useContext(MainContext);
  const socket = useContext(SocketContext);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(JSON.parse(chatroom.messages));
  const { setUsers } = useContext(UsersContext);
  const history = useHistory();
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

  const report = () => {
    console.log("report test button");
  };

  // temp function before passing in props
  const recipient = receiver_profile;

  // logout when the active history entry changes
  window.onpopstate = (e) => logout();
  //Checks to see if there's a user present
  useEffect(() => {
    if (!name) return history.push("/");
  }, [history, name]);

  // useEffect(() => {
  //   socket.on("users", users => {
  //       setUsers(users)
  //   })
  // })
  useEffect(() => {
    socket.on("message", (msg) => {
      setMessages((messages) => [...messages, msg]);
    });
    console.log("stringify", JSON.stringify(messages));
    console.log("msg from db", chatroom.messages);
    if (JSON.stringify(messages) !== chatroom.messages) {
      console.log("check msgs before axios:", messages);
      const room = {
        id: chatroom.id,
        profile1_id: sender_id,
        profile2_id: recipient.id,
        messages: messages,
      };
      console.log("profile1", sender_id, "profile2", recipient.id);
      console.log("profile1", sender_id, "profile2", recipient.id);
      axios
        .put(`http://localhost:3001/api/chatroom/${chatroom.id}`, { room })
        .then((res) => {
          console.log("chatroom saved?", res);
        })
        .catch((error) => console.log(error));
    }
  }, [socket, messages]);

  const handleSendMessage = () => {
    socket.emit("sendMessage", message, () => setMessage(""));
    setMessage("");
    console.log(message);
  };

  const logout = () => {
    setName("");
    setRoom("");
    // history.push('/messages');
    // history.go(0);
  };

  return (
    <div className="room">
      <div className="heading">
        <div className="room-title">
          {console.log(`room: ${chatroom.id}, message to ${recipient.name}`)}

          <IconButton onClick={handleClickOpen}>
            <Avatar
              id="chat_icon"
              alt={recipient.name}
              src={recipient.url}
              style={{ fontSize: 40 }}
              className={classes.large}
            />
          </IconButton>
          <div>
            {/* <p>{recipient.name}</p> */}
          </div>
        </div>
        {/* remove logout button later and add back button*/}
        <Link to="/candidate">
          <IconButton>
            <PetsIcon className="chat_logo" style={{ fontSize: 60 }} />
          </IconButton>
        </Link>

        <Link to="/messages">
          <IconButton onClick={logout}>
            <ArrowBackIosIcon id="chat_icon" style={{ fontSize: 40 }} />
          </IconButton>
        </Link>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{recipient.name}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            recipient info here
          </DialogContentText>
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
          <h4>
            {" "}
            You matched with {recipient.name} on -insert-timestamp-here-{" "}
          </h4>
        </div>
        {messages.length > 0 ? (
          messages.map((msg, i) => (
            <div
              key={i}
              className={`message ${msg.user === name ? "my-message" : ""}`}
            >
              {console.log(msg)}
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
          type="text"
          label="Enter Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
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
