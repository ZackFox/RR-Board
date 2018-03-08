import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { logOut } from "../../actions/authActions";

class ProfileMenu extends Component {
  logOutHandler = () => this.props.logOut();

  render() {
    const { user } = this.props;
    return (
      <div className="user-block">
        <div className="menu-btn">
          <span>{user.username}</span>
          <div className="user-menu">
            <Link to={`/user/${user.id}`}>Открыть профиль</Link>
            <button onClick={this.logOutHandler}>выйти</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.authReducer.user,
});

export default connect(mapStateToProps, { logOut })(ProfileMenu);
