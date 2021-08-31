import React, { useEffect, useState } from "react";
import TopNav from "./TopNav";
import Candidate from './Candidate';
import Profile from "./Profile";
import ProfileEdit from "./ProfileEdit";
import MessengerList from "./MessengerList";
import MessageScreen from "./MessageScreen";
import io from "socket.io-client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Chat from './Chat/Chat';
import Login from './Login/Login'
function App(props) {

  return (
    <div className="App">
      <Router>
        <Switch>

        <Route path="/edit">
            <TopNav />
            <ProfileEdit />
          </Route>
          <Route path="/messages/:candidate">
            <TopNav />
            <MessageScreen />
          </Route>
          <Route path="/login" component={Login}/>
          <Route path="/messages" component={Chat}/>

          <Route path="/profile">
            <TopNav />
            <Profile />
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
