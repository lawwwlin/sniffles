import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { MainContext } from '../../mainContext';
import { SocketContext } from '../../socketContext';
import ScrollToBottom from 'react-scroll-to-bottom';
import './Chat.scss';
import { UsersContext } from '../../usersContext';
import { TextField, Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import MessageIcon from '@material-ui/icons/Message';
import axios from 'axios';
import { useLocation, Link } from "react-router-dom";

//info popup
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

// required info: sender_id, receiver_id, room_id, sender_name
const Chat = (props) => {
  const location = useLocation();
  const { receiver_profile, sender_id, chatroom } = location.state;
  const { name, room, setName, setRoom } = useContext(MainContext);
  const socket = useContext(SocketContext);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState(JSON.parse(chatroom.messages));
  const { setUsers } = useContext(UsersContext);
  const history = useHistory();

  console.log("just loaded chat compo:", JSON.parse(chatroom.messages))
  console.log("2 loaded chat compo:", messages)

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

  // temp function before passing in props
  const recipient = receiver_profile;

  // logout when the active history entry changes
  window.onpopstate = e => logout();
  //Checks to see if there's a user present
  useEffect(() => { if (!name) return history.push('/') }, [history, name]);

  // useEffect(() => {
  //   socket.on("users", users => {
  //       setUsers(users)
  //   })
  // })
  useEffect(() => {
    socket.on("message", msg => {
      setMessages(messages => [...messages, msg])
    });
    // this step is requried, or else the seed from database will not be the same when server first starts
    const msg = JSON.stringify(JSON.parse(chatroom.messages));
    if (JSON.stringify(messages) !== msg) {
      const room = {id: chatroom.id, profile1_id: sender_id, profile2_id: recipient.id, messages: messages}
      axios.put(`/api/chatroom/${chatroom.id}`, {room})
        .then((res) => {
        })
        .catch(error => console.log(error));
    }
  }, [messages]);
  
  
  const handleSendMessage = () => {
    socket.emit('sendMessage', message, () => setMessage(''));
    setMessage('');
    console.log(message);
  };

  const logout = () => {
    setName(''); 
    setRoom('');
    console.log('after setting name and room', name, room)
    // history.push('/messages');
    // history.go(0);
  };

  return (
    <div className='room'>
      <h4 className='heading'>
        <div className='room-title'>
          
          <h3> room: {chatroom.id}, message to {recipient.name}</h3>
          <div className='user-title'><h4>Current User: {name}</h4></div>
        </div>
        <IconButton onClick={handleClickOpen}><InfoOutlinedIcon /></IconButton>
        {/* remove logout button later and add back button*/}
        
        <Link to='/messages'><Button onClick={logout}> 
        Back
        </Button></Link>
      </h4>

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
          <Button onClick={remove} autoFocus>
            <span className="chat_delete"><DeleteForeverIcon/></span><p className="chat_delete">REMOVE</p>
          </Button>
        </DialogActions>
      </Dialog>

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
    </div>
  );
};

export default Chat