import React, { useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./ChatRoom.css";
import Alert from '@material-ui/lab/Alert';
// import Chat from './Chat/Chat'
import { Link, useHistory } from "react-router-dom";
import { SocketContext } from '../socketContext'
import { MainContext } from '../mainContext'


// 
function ChatRoom({ room_id, sender_id, receiver_profile, sender_name }) {

  const history = useHistory();
  const socket = useContext(SocketContext)
  const { name, setName, room, setRoom } = useContext(MainContext);

  const setValues = async () => {
    setName(sender_name);
    setRoom(room_id);
  }

  const logIn = () => {
    const name = sender_id;
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
      history.push('/chat')
      console.log('connected to', room_id)
      return (
        <Alert severity="success">
          {`Welcome to ${room}`}
        </Alert>
      )
    })
  }

  const onClick = () => {

    console.log(sender_name, room_id)
    
    setValues()
      .then(() => {
        console.log('after setting values', room, name);
        logIn();
      })
  }

  return (
    <div className="messenger">
      <Link to={{
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
        <h2>{receiver_profile.name}</h2>
        <p>sample message text</p>
      </div>
      <p messenger_timestamp className="messenger_timestamp">
        -insert-timestamp-here-
      </p>
    </div>
  );
}

export default ChatRoom;
