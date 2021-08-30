import Messages from "./Messages/Messages";
import MessageInput from "./Messages/MessageInput";
import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import './Messenger.css'

export default function Messenger() {
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    const newSocket = io(`http://${window.location.hostname}:3001`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  return (
    <div className="App">
      { socket ? (
        <div className="chat-container">
          <Messages socket={socket} />
          <MessageInput socket={socket} />
        </div>
      ) : (
        <div>Not Connected</div>
      )}
    </div>
  );
}