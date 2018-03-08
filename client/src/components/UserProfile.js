import React, { Component } from "react";
import { connect } from "react-redux";
import { getProfile } from "../actions/profileActions";

import Loader from "./Loader";
import api from "../constants/api";

class UserProfile extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getProfile(id);
  }

  render() {
    const { profile, isFetching } = this.props;
    return !isFetching ? (
      <div className="container">
        <h3>{profile.username}</h3>
        <p>рейтинг {Math.floor(profile.rating)} </p>
        <p>продано : 0 </p>
        <p>продается : 10</p>
        <img src={`${api}${profile.avatar}`} />
      </div>
    ) : (
      <Loader />
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.profileReducer.isFetching,
  authenticated: state.authReducer.authenticated,
  profile: state.profileReducer.profile,
});

export default connect(mapStateToProps, { getProfile })(UserProfile);
