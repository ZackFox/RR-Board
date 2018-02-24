import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// import { logOut } from "../actions/authActions";

class ProfileMenu extends Component {
  submitHandler = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="search">
        <form>
          <input placeholder="Найти" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {})(ProfileMenu);
