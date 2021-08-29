import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './App.css';
import Messages from './Messages/Messages';
import MessageInput from './Messages/MessageInput';

function App() {

    const [socket, setSocket] = useState(null);
  
     useEffect(() => {
      const newSocket = io(`http://${window.location.hostname}:3001`);
      setSocket(newSocket);
      return () => newSocket.close();
    }, [setSocket]);
 
    return (
      <div className="App">
        <header className="app-header">
          Sniffles?
        </header>
        { socket ? (
          <div className="chat-container">
            <Messages socket={socket}/>
            <MessageInput socket={socket}/>
          </div>
        ) : (
          <div>Not Connected</div>
        )}
      </div>
    );
  }
export default App;
