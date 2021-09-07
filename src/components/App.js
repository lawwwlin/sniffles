import React from "react";
import TopNav from "./TopNav";
import Home from "./Home";
import Form from "./Form";
import Login from "./Login";
import Profile from "./Profile";
import ChatRoomList from "./ChatRoomList";
import MessageScreen from "./MessageScreen";

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
// import getCandidatesForDog from './Candidates/helpers/selectors'
import CandidatesList from "./Candidates/CandidatesList";
import Candidate from "./Candidates/Candidate";
import axios from "axios";

// chat
import Chat from "./Chat/Chat";
import { SocketProvider } from "../socketContext";
import { MainProvider } from "../mainContext";
import { UsersProvider } from "../usersContext";
import Candidates from "./Candidates/CandidatesList";

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
  return (
    <div className="App">
      <Router>
        <Switch>

        <Route path="/bathdog">
            <BathDog />
          </Route>

        {/* <Route path="/homesvg">
            <HomeSvg />
          </Route> */}

          <Route exact path="/">
            <Redirect from="/" to="/Candidate" />
          </Route>
          <Route path="/messages/:candidate">
            <TopNav />
            <MessageScreen />
          </Route>

          <Route path="/profile">
            <TopNav />
            <Profile profile={profile} />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/register">
            <Form onSave={onSave} submit={"Create"}/>
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/Candidate">
            <TopNav />
            <CandidatesList profile={profile} />
          </Route>

          <MainProvider>
            <UsersProvider>
              <SocketProvider>
                <Route path="/messages">
                  <TopNav />
                  <ChatRoomList profile={profile} />
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
