import React, { Component } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"

import Home from './components/Home'


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
              <Route path="/" exact>
                <Home message={"From parent"}></Home>
              </Route>
            </Switch>
          </header>
        </div>
      </Router >
    );
  }
}

export default App;