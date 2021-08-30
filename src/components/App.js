import React from "react";
import TopNav from "./TopNav";
import Candidate from "./Candidate";
import Profile from "./Profile";
import ProfileEdit from "./ProfileEdit";
import Messenger from "./Messenger";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/profileEdit">
            <TopNav />
            <ProfileEdit />
          </Route>

          <Route path="/messages">
            <TopNav />
            <Messenger />
          </Route>
          
          <Route path="/profile">
            <TopNav />
            <Profile />
          </Route>

          <Route path="/">
            <TopNav />
            <Candidate />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}
export default App;
