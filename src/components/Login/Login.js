import React, { useContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { MainContext } from '../../mainContext'
import { SocketContext } from '../../socketContext'
import Alert from '@material-ui/lab/Alert';
import { IconButton, Input, InputLabel } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { UsersContext } from '../../usersContext'

const Login = () => {
    const socket = useContext(SocketContext)
    const { name, setName, room, setRoom } = useContext(MainContext)
    const history = useHistory()
    const { setUsers } = useContext(UsersContext)

    //Checks to see if there's a user already present

    useEffect(() => {
        socket.on("users", users => {
            setUsers(users)
        })
    })

    //Emits the login event and if successful redirects to chat and saves user data
    const handleClick = () => {
        socket.emit('login', { name, room }, error => {
            if (error) {
                console.log(error)
                return (
                  <Alert severity="error">
                    {error}
                  </Alert>
                )
            }
            history.push('/chat')
            return (
              <Alert severity="success">
                {`Welcome to ${room}`}
              </Alert>
            )
        })
    }

    return (
        <div className='login' mb='8'>
            <h1 as="h1" size="4xl" mb='8' fontFamily='DM Sans' fontWeight='600' letterSpacing='-2px'>Chattr.io</h1>
            <div className="form" gap='1rem'>
              <InputLabel htmlFor="name">Name</InputLabel>
              <Input 
                variant='filled'
                type="text"
                placeholder='User Name'
                value={name}
                onChange={e => setName(e.target.value)} 
              />

              <Input 
                variant='filled'
                type="text"
                placeholder='Room Name'
                value={room}
                onChange={e => setRoom(e.target.value)} 
              />

              <IconButton color="primary" onClick={handleClick}>
                <ArrowRightAltIcon />
              </IconButton>
            </div>
        </div>
    )
}

export default Login
