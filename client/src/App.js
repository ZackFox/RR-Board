import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// import axios from 'axios';

import Header from './components/Header';
import WelcomePage from './components/WelcomePage';
import SignUpPage from './components/SignUpPage';
import PostPage from './components/PostPage';
import UserProfile from './components/UserProfile';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={WelcomePage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/user" component={PostPage} />
          <Route path="/post" component={UserProfile} />
        </Switch>
      </div>
    );
  }
}

export default App;
