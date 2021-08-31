import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { MainContext } from "../mainContext";
import { SocketContext } from "../socketContext";
import { UsersContext } from "../usersContext";

const Chat = () => {
  const { name, room, setName, setRoom } = useContext(MainContext);
  const socket = useContext(SocketContext);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const { users } = useContext(UsersContext);
  const history = useHistory();

  window.onpopstate = (e) => logout();
  //Checks to see if there's a user present
  useEffect(() => {
    if (!name) return history.push("/");
  }, [history, name]);

  useEffect(() => {
    socket.on("message", (msg) => {
      setMessages((messages) => [...messages, msg]);
    });
  });
  const handleSendMessage = () => {
    socket.emit("sendMessage", message, () => setMessage(""));
    setMessage("");
  };

  const logout = () => {
    setName("");
    setRoom("");
    history.push("/");
    history.go(0);
  };
  return (
    <div className="form">
      <input
        type="text"
        placeholder="Enter Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        onClick={handleSendMessage}
        disabled={message === "" ? true : false}
      >
        Send
      </button>
    </div>
  );
};
export default Chat;
