import React, { useEffect, useState } from "react";
import TopNav from "./TopNav";
import Profile from "./Profile";
import ProfileEdit from "./ProfileEdit";
import io from "socket.io-client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

const profile = {
  id: 1,
  imageURL: 'https://tinyurl.com/kb7dhhck',
  name: 'Bigboi',
  breed: 'Maltese',
  location: 'Vancouver',
  gender: 'male',
  age: 3,
  size: 'small',
  owner: 'BigBoiOwner',
  email: 'a@a.com',
  password: 'a',
  description: 'actually very smol'
}

function App(props) {
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
        <Route path="/profileEdit">
            <TopNav />
            <ProfileEdit />
          </Route>

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
