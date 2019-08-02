import React, { Component } from "react";
import "./App.css";

import { Route, Link, Switch, Redirect } from "react-router-dom";

import Home from "./components/Home";
import Giphy from "./components/Giphy";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/giphy">Giphy</Link>
            </li>
          </ul>
        </div>
        <div className="App-intro">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/giphy" component={Giphy} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
