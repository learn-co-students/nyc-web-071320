import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from 'react-router-dom'
import DogsList from './Containers/DogsList'
import Welcome from './Components/Welcome'
// Route, NavLink, Switch, withRouter
// Route => listen for a condition and then run some code 
// Higher Order Components => components that wrap other components

class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route path="/dogs" component={DogsList} />
          <Route path="/" component={Welcome} />
        </Switch>
        {/* <DogsList /> */}
      </div>
    );
  }
}

export default App;
