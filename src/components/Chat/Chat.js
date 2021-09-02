import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { MainContext } from '../../mainContext';
import { SocketContext } from '../../socketContext';
import ScrollToBottom from 'react-scroll-to-bottom';
import './Chat.scss';
import { UsersContext } from '../../usersContext';
import { TextField, Input, Button, Snackbar } from '@material-ui/core';
// import Alert from '@material-ui/lab/Alert';
import SendIcon from '@material-ui/icons/Send';
import MessageIcon from '@material-ui/icons/Message';
import axios from 'axios';
import { useLocation } from "react-router-dom";

// required info: sender_id, receiver_id, room_id, sender_name
const Chat = (props) => {
  const { name, room, setName, setRoom } = useContext(MainContext);
  const socket = useContext(SocketContext);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const { users } = useContext(UsersContext);
  const history = useHistory();
  const location = useLocation();
  const { receiver_profile, sender_id } = location.state;
  // const [open, setOpen] = React.useState(false);

  // temp function before passing in props
  const recipient = receiver_profile;

  // const handleClose = (event, reason) => {
  //   if (reason === 'clickaway') {
  //     return;
  //   }

  //   setOpen(false);
  // };

  // logout when the active history entry changes
  window.onpopstate = e => logout();
  //Checks to see if there's a user present
  useEffect(() => { if (!name) return history.push('/') }, [history, name]);

  useEffect(() => {
    socket.on("message", msg => {
      setMessages(messages => [...messages, msg]);
    });

    // socket.on("notification", notif => {
    //   console.log("notification", notif);
    //   setOpen(true)
    // });
  }, [socket]);

  const handleSendMessage = () => {
      socket.emit('sendMessage', message, () => setMessage(''));
      setMessage('');
      console.log(message);
      axios.post(`http://localhost:3001/api/message/${sender_id}`, {sender_id, receiver_id: recipient.id, text: message})
        .then(() => {
          console.log('message saved?');
        })
        .catch(error => console.log(error));
  };

  const logout = () => {
      setName(''); setRoom('');
      history.push('/messages');
      history.go(0);
  };

  return (
    <div className='room'>
      <h4 className='heading'>
        <div className='room-title'>
          <h3> room: {room.slice(0, 1).toUpperCase() + room.slice(1)}, message to {recipient.name}</h3>
          <div className='user-title'><h4>Current User: {name}</h4></div>
        </div>
        {/* remove logout button later and add back button*/}
        <Button onClick={logout}  >Logout</Button>
      </h4>

      <ScrollToBottom className='messages' debug={false}>
            <div className='match-time'>
              <h4> You matched with {recipient.name} on -insert-timestamp-here- </h4>
            </div>
          {messages.length > 0 ?
            messages.map((msg, i) =>
            (<div key={i} className={`message ${msg.user === name ? "my-message" : ""}`}>
              {console.log(msg)}
              <h6 className='user'>{msg.user}</h6>
              <h4 className='msg'>{msg.text}</h4>
            </div>)
            )
            :
            <div className='empty-message'>
              <div>-----</div>
              <MessageIcon />
              <h4> No messages </h4>
              <div>-----</div>
            </div>
          }
      </ScrollToBottom>
      <div className='form'>
        <TextField 
          type="text" 
          label="Enter Message"
          value={message} onChange={e => setMessage(e.target.value)}
          variant="outlined"
        />
        <Button 
          variant="contained"
          color='primary' 
          startIcon={<SendIcon />} 
          onClick={handleSendMessage} 
          disabled={message === '' ? true : false}>
          Send
        </Button>  
      </div>

      {/* {open && 
        (<Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right'}}> 
          <Alert onClose={handleClose} severity="success">
            connected
          </Alert>
        </Snackbar>)} */}
    </div>
  );
};

export default Chat
