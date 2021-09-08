import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import "./ChatRoom.css";

// import Chat from './Chat/Chat'
import { Link, useHistory } from "react-router-dom";
import { SocketContext } from "../socketContext";
import { MainContext } from "../mainContext";

// Import components from material-ui
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import LoopIcon from '@material-ui/icons/Loop';

function ChatRoom({ sender_id, receiver_id, sender_name, chatroom }) {
  const socket = useContext(SocketContext);
  const { setName, setRoom } = useContext(MainContext);
  const [recipient, setRecipient] = useState({});
  const [show, setShow] = useState(false);

  useEffect(() => {
      let timer1 = setTimeout(() => setShow(true), 0.5 * 1000);
      return () => {
        clearTimeout(timer1);
      };
  }, []);

  const setValues = async () => {
    setName(sender_name);
    setRoom(chatroom.id);
  };

  const logIn = () => {
    const name = sender_name;
    const room = chatroom.id;
    socket.emit("login", { name, room }, (error) => {});
  };

  const onClick = () => {
    setValues().then(() => {
      logIn();
    });
  };

  const getLastMessageInChatroom = (room) => {
    const messages = JSON.parse(room.messages);
    return messages[messages.length - 1].text;
  };

  const getTimeAgo = (time) => {
    // time in seconds
    const timeAgo = Date.now() / 1000 - time;
    if (timeAgo < 60) {
      return `${parseInt(timeAgo)} seconds ago`;
    }
    if (timeAgo < 3600) {
      return `${parseInt(timeAgo / 60)} minutes ago`;
    }
    if (timeAgo < 86400) {
      return `${parseInt(timeAgo / 3600)} hours`;
    }
  };

  // find the profile of the recipient
  useEffect(() => {
    axios.get(`api/profile/${receiver_id}`).then((res) => {
      setRecipient(res.data[0]);
    });
  }, []);

  return show? (
    <div className="messenger">
      <Link
        to={{
          pathname: "/message",
          state: {
            chatroom,
            sender_id,
            sender_name,
            recipient,
          },
        }}
        onClick={onClick}
      >
        <div className="messenger_pic">
          <IconButton>
            <Avatar alt={recipient.name} src={recipient.imageurl} />
          </IconButton>
        </div>
      </Link>
      <div className="messenger_info">
        <h2>{recipient.name}</h2>
        <p className="messenger_msg">{getLastMessageInChatroom(chatroom)}</p>
      </div>
      <p messenger_timestamp className="messenger_timestamp">
        {getTimeAgo(chatroom.updatedat)}
      </p>
    </div>
  ): (
    // loading chat
    <div className="messenger">
      <div className="messenger_pic">
        <LoopIcon />
      </div>
      <div className="messenger_info">
        <h2>good boy is fetching messages, please sit!</h2>
      </div>
      <p messenger_timestamp className="messenger_timestamp">
      </p>
    </div>
  );
}

export default ChatRoom;
