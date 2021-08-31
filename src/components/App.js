import React, { useEffect, useState } from "react";
import TopNav from "./TopNav";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import Candidate from './Candidate';
import Profile from "./Profile";
import ProfileEdit from "./ProfileEdit";
import MessengerList from "./MessengerList";
import MessageScreen from "./MessageScreen";
import io from "socket.io-client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

const profile = {
  id: 1,
  imageUrl: 'https://tinyurl.com/kb7dhhck',
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
  // const [socket, setSocket] = useState(null);

  // useEffect(() => {
  //   const newSocket = io(`http://${window.location.hostname}:3001`);
  //   setSocket(newSocket);
  //   return () => newSocket.close();
  // }, [setSocket]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/messages/:candidate">
            <TopNav />
            <MessageScreen />
          </Route>

          <Route path="/messages">
            <TopNav />
            <MessengerList />
            </Route>

          <Route path="/profile">
            <TopNav />
            <Profile 
              profile={profile}
            />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/">
            <TopNav />
            <Candidate />
            {/* <header className="app-header">Connected?</header>
            {socket ? (
              <div className="chat-container">
                <h3>Connected</h3>
              </div>
            ) : (
              <div>Not Connected</div>
            )} */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
