import React, { useEffect, useState } from "react";
import TopNav from "./TopNav";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import Profile from "./Profile";
import MessengerList from "./MessengerList";
import MessageScreen from "./MessageScreen";
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
import axios from 'axios';

// chat
import ChatLogin from "./Login/Login";
import Chat from "./Chat/Chat";
import { SocketProvider } from "../socketContext";
import { MainProvider } from "../mainContext";
import { UsersProvider } from "../usersContext";
import Candidates from "./Candidates/CandidatesList";

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

function App(props) {


  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect from="/" to="/Candidate" />
          </Route>
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
            <Profile profile={profile} />
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

          <Route path="/Candidate">
            <TopNav />
            <CandidatesList
            profile={profile}
            />
          </Route>

          <MainProvider>
            <UsersProvider>
              <SocketProvider>
                {/* <Flex className="App" align='center' justifyContent='center'> */}
                <Route path="/message">
                  <TopNav />
                  <ChatLogin />
                </Route>

                <Route path="/chat">
                  <TopNav />
                  <Chat />
                </Route>
                {/* </Flex> */}
              </SocketProvider>
            </UsersProvider>
          </MainProvider>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
