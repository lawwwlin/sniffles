import React, { useState } from "react";
import TopNav from "./TopNav";
import Home from "./Home";
import Form from "./Form";
import Profile from "./Profile";
import ChatRoomList from "./ChatRoomList";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";

//candidate
import CandidatesList from "./Candidates/CandidatesList";

// chat
import Chat from "./Chat/Chat";
import { SocketProvider } from "../socketContext";
import { MainProvider } from "../mainContext";

//register
import onSave from "./Register";

function App() {
  const [profile, setProfile] = useState();
  if (!profile) {
    return (
      <div className="home">
        <Router>
          <Switch>
            <Route path="/home">
              <Home setProfile={setProfile} />
            </Route>

            <Route path="/register">
              <Form onSave={onSave} submit={"Create"} />
            </Route>

            <Redirect from="*" to="home" />
          </Switch>
        </Router>
      </div>
    );
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect from="/" to="/Candidate" />
          </Route>

          <Route path="/messages/:candidate">
            <TopNav />
          </Route>

          <Route path="/home">
            <Redirect to="/candidate" />
          </Route>

          <Route path="/profile">
            <TopNav />
            <Profile profile={profile[0]} />
          </Route>

          <Route path="/candidate">
            <TopNav />
            <CandidatesList profile={profile} />
          </Route>

          <MainProvider>
            <SocketProvider>
              <Route path="/messages">
                <TopNav />
                <ChatRoomList profile={profile[0]} />
              </Route>
              <Route path="/message">
                <Chat />
              </Route>
            </SocketProvider>
          </MainProvider>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
