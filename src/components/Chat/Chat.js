import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { MainContext } from '../../mainContext'
import { SocketContext } from '../../socketContext'
import ScrollToBottom from 'react-scroll-to-bottom';
import './Chat.scss'
import { UsersContext } from '../../usersContext'
import { TextField, Input, Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import SendIcon from '@material-ui/icons/Send';
import MessageIcon from '@material-ui/icons/Message';

const Chat = () => {
    const { name, room, setName, setRoom } = useContext(MainContext)
    const socket = useContext(SocketContext)
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    const { users } = useContext(UsersContext)
    const history = useHistory()

    window.onpopstate = e => logout()
    //Checks to see if there's a user present
    useEffect(() => { if (!name) return history.push('/') }, [history, name])


    useEffect(() => {
        socket.on("message", msg => {
            setMessages(messages => [...messages, msg]);
        })

        socket.on("notification", notif => {
          function alert() {
            console.log("notification", notif);
            <Alert severity="success">
              {notif.description}
            </Alert>
          }
          alert();  
        })
    }, [socket, alert])


    const handleSendMessage = () => {
        socket.emit('sendMessage', message, () => setMessage(''))
        setMessage('')
    }

    const logout = () => {
        setName(''); setRoom('');
        history.push('/')
        history.go(0)
    }

    // temp function before passing in props
    let recipient = "";
    if (users) {
      const user = users.find(user => user.name !== name);
      if (user) {
        recipient = user.name;
      }
    }

    return (
        <div className='room'>
            <h4 className='heading'>
              {/* <Menu >
                  <MenuButton as={IconButton} icon={<FiList />} isRound='true' bg='blue.300' color='white' />
                  <MenuList>
                      {
                          users && users.map(user => {
                              return (
                                  <MenuItem minH='40px' key={user.id}>
                                      <h3>{user.name}</h3>
                                  </MenuItem>
                              )
                          })
                      }
                  </MenuList>
              </Menu> */}
              <div className='room-title'>
                  <h3> room: {room.slice(0, 1).toUpperCase() + room.slice(1)}, message to {recipient}</h3>
                  <div className='user-title'><h4>Logged in as: {name}</h4></div>
              </div>
              {/* remove logout button later and add back button*/}
              <Button onClick={logout}  >Logout</Button>
            </h4>


            <ScrollToBottom className='messages' debug={false}>
                {messages.length > 0 ?
                    messages.map((msg, i) =>
                    (<div className={`message ${msg.user === name ? "my-message" : ""}`}>
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

    )
}

export default Chat
