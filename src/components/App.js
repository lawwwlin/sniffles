import React, { useState } from "react";
import TopNav from "./TopNav";
import Home from "./Home";
import Form from "./Form";
import LoginPage from "./Login";
import Profile from "./Profile";
import ChatRoomList from "./ChatRoomList";

// import HomeSvg from "./home-svg/HomeSvg";
import BathDog from "./home-svg/BathDog";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";

//candidate stuff
import CandidatesList from "./Candidates/CandidatesList";

// chat
import Chat from "./Chat/Chat";
import { SocketProvider } from "../socketContext";
import { MainProvider } from "../mainContext";
import { UsersProvider } from "../usersContext";
import Candidates from "./Candidates/CandidatesList";

//register stuff
import onSave from "./Register";

const profile = {
  id: 1,
  imageUrl: "https://tinyurl.com/kb7dhhck",
  name: "Bigboi",
  breed: "Maltese",
  location: "Vancouver",
  gender: "male",
  age: 3,
  size: "small",
  owner: "BigBoiOwner",
  email: "a@a.com",
  password: "a",
  description: "actually very smol",
};

function App() {
  const [profile, setProfile] = useState();
  console.log("profile:", profile);
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
          <Route path="/bathdog">
            <BathDog />
          </Route>

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
            <UsersProvider>
              <SocketProvider>
                <Route path="/messages">
                  <TopNav />
                  <ChatRoomList profile={profile[0]} />
                </Route>
                <Route path="/message">
                  <Chat />
                </Route>
              </SocketProvider>
            </UsersProvider>
          </MainProvider>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
