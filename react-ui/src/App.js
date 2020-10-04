import React, { Component } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"

import UserInfo from "./components/UserInfo";
import StartPage from "./components/StartPage";
import Home from "./components/Home";
import JetLagPage from "./components/JetLagPage";


class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount() { }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Switch>
              <Route path="/home" exact render={(props) => <Home {...props}/>}/>
              <Route path="/" exact render={(props) => <StartPage {...props}/>}/>
              <Route path="/userinfo" exact render={(props) => <UserInfo {...props}/>}/>
              <Route path="/jetlag" exact render={(props) => <JetLagPage {...props}/>}/>
            </Switch>
          </header>
        </div>
      </Router >
    );
  }
}

export default App;