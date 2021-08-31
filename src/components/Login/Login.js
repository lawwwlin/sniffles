import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { MainContext } from "../mainContext";
import { SocketContext } from "../socketContext";
import { UsersContext } from "../usersContext";

const Login = () => {
  const socket = useContext(SocketContext);
  const { name, setName, room, setRoom } = useContext(MainContext);
  const history = useHistory();
  const { setUsers } = useContext(UsersContext);

  //Checks to see if there's a user already present

  useEffect(() => {
    socket.on("users", (users) => {
      setUsers(users);
    });
  });

  //Emits the login event and if successful redirects to chat and saves user data
  const handleClick = () => {
    socket.emit("login", { name, room }, (error) => {
      if (error) {
        console.log(error);
      }
      history.push("/chat");
      return console.log(`welcome to ${room}`);
    });
  };

  return (
    <div className="login" flexDirection="column" mb="8">
      <div
        className="form"
        gap="1rem"
        flexDirection={{ base: "column", md: "row" }}
      >
        <input
          type="text"
          placeholder="User Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Room Name"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
        <button onClick={handleClick}>Login</button>
      </div>
    </div>
  );
};

export default Login;
