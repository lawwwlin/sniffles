import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import "./ChatRoom.css";
import Alert from '@material-ui/lab/Alert';
// import Chat from './Chat/Chat'
import { Link, useHistory } from "react-router-dom";
import { SocketContext } from '../socketContext';
import { MainContext } from '../mainContext';

// Import components from material-ui
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";



// 
function ChatRoom({ sender_id, receiver_id, sender_name, chatroom }) {

  const history = useHistory();
  const socket = useContext(SocketContext)
  const { name, setName, room, setRoom } = useContext(MainContext);
  const [recipient, setRecipient] = useState({});

  const setValues = async () => {
    console.log('setting values');
    setName(sender_name);
    setRoom(chatroom.id);
  };

  const logIn = () => {
    const name = sender_name;
    const room = chatroom.id;
    socket.emit('login', { name, room }, error => {
      console.log('after log in', room, name);
      if (error) {
          console.log(error)
          // return (
          //   <Alert severity="error">
          //     {error}
          //   </Alert>
          // )
      }
      // history.push('/chat')
      console.log('connected to', chatroom.id)
      // return (
      //   <Alert severity="success">
      //     {`Welcome to ${room}`}
      //   </Alert>
      // )
    });
  };

  const onClick = () => {

    console.log('before setting values', sender_name, chatroom.id)
    
    setValues()
      .then(() => {
        logIn();
      })
  };

  const getLastMessageInChatroom = (room) => {
    const messages = JSON.parse(room.messages);
    return messages[messages.length-1].text;
  };

  const getTimeAgo = (time) => {
    // time in seconds
    const timeAgo = (Date.now()/1000 - time)
    console.log("timeAgo:",timeAgo)
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

  console.log('101', receiver_id)
  // find the profile of the recipient
  useEffect(() => {
    axios.get(`api/profile/${receiver_id}`)
    .then((res) => {
      setRecipient(res.data[0]);
      console.log('after setRecipient:', recipient);
    })
  }, []);

  return (
    <div className="messenger">
      <Link 
        to={{
        pathname: "/message",
        state: {
          chatroom,
          sender_id,
          sender_name,
          recipient
        }}}
        onClick={onClick}
      ><div className="messenger_pic">
        <IconButton>
          <Avatar  alt={recipient.name} src={recipient.imageurl} />
          </IconButton>
          </div>
      </Link>
      <div className="messenger_info">
        <h2>{recipient.name}</h2>
        <p>{getLastMessageInChatroom(chatroom)}</p>
      </div>
      <p messenger_timestamp className="messenger_timestamp">
        {getTimeAgo(chatroom.updatedat)}
      </p>
      
    </div>
  );
}

export default ChatRoom;
