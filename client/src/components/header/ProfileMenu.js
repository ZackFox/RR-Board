import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { logOut } from "../../actions/authActions";

class ProfileMenu extends Component {
  submitHandler = e => {
    e.preventDefault();
  };

  render() {
    const { user } = this.props;
    return (
      <div className="">
        <div>{user.username}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.authReducer.user,
});

export default connect(mapStateToProps, { logOut })(ProfileMenu);
