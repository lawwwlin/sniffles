import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './App.css';

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
          Connected?
        </header>
        { socket ? (
          <div className="chat-container">
            <h3>Connected</h3>
          </div>
        ) : (
          <div>Not Connected</div>
        )}
      </div>
    );
  }
export default App;
