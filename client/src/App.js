import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import cookies from "react-cookies";
import { connect } from "react-redux";

import { getUser } from "./actions/authActions";
import { getPosts } from "./actions/postActions";

import Header from "./components/Header";
import IndexPage from "./components/IndexPage";
import SignUpPage from "./components/SignUpPage";
import PostPage from "./components/PostPage";
import UserProfile from "./components/UserProfile";
import Loader from "./components/Loader";

class App extends Component {
  componentDidMount() {
    this.props.getPosts();
    if (cookies.load("token")) {
      this.props.getUser();
    }
  }

  render() {
    return !this.props.isLoading ? (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/post/:id" component={PostPage} />
          <Route path="/user/:id" component={UserProfile} />
        </Switch>
      </div>
    ) : (
      <Loader />
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.authReducer.isLoading,
});

export default withRouter(connect(mapStateToProps, { getUser, getPosts })(App));
