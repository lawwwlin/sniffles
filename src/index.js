import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/home">
            <Home />
        </Route>

        {/* <Route path="/register">
            <Form onSave={onSave} submit={"Create"} />
          </Route> */}
          
        <Route exact path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


