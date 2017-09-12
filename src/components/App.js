import React, { Component } from 'react';
import 'styles/App.css';

import Header from 'components/Header'
import { Route, Switch } from 'react-router-dom'

import Home from 'components/Home'
import Table from 'components/Table'

import Navigation from 'components/Navigation'
import Modal from 'components/Modal'

const Users = () => <div>Users</div>
const Words = () => <div>Words</div>
const Points = () => <div>Points</div>

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/users" component={Users}/>
          <Route path="/words" component={Words}/>
          <Route path="/points" component={Points}/>
          <Route path="/weeks" component={Table}/>
          <Route path="/weeks/:weekId" component={Table}/>
          <Route path="/" component={Home}/>
        </Switch>
        <Navigation />
        <Modal />
      </div>
    );
  }
}

export default App;
