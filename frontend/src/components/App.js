import React, { useEffect, useState } from "react";
import TopNav from "./TopNav";
import Profile from "./Profile";
import io from "socket.io-client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(`http://${window.location.hostname}:3001`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/profile">
            <TopNav />
            <Profile />
          </Route>

          <Route path="/">
            <TopNav />
            <header className="app-header">Connected?</header>
            {socket ? (
              <div className="chat-container">
                <h3>Connected</h3>
              </div>
            ) : (
              <div>Not Connected</div>
            )}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
