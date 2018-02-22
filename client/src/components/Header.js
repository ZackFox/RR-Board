import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { signIn, logOut } from "../actions/authActions";

class Header extends Component {
  submitHandler = e => {
    e.preventDefault();
    const email = this.emailInput.value;
    const password = this.passwordInput.value;
    this.props.signIn(email, password);
    this.emailInput.value = "";
    this.passwordInput.value = "";
  };

  render() {
    const { authenticated, loginErrors, user } = this.props;
    return (
      <header className="board-header">
        <div className="container">
          <div className="flex-container">
            <div className="">
              <a href="/" className="logo">
                #Дощечка
              </a>
            </div>
            <div className="search">
              <form>
                <input placeholder="Найти" />
                <input type="submit" />
              </form>
            </div>

            {!authenticated ? (
              <div className="auth">
                <form onSubmit={this.submitHandler}>
                  <p className="">{loginErrors}</p>
                  <input
                    type="text"
                    name="email"
                    ref={el => (this.emailInput = el)}
                  />
                  <input
                    type="password"
                    name="password"
                    ref={el => (this.passwordInput = el)}
                  />
                  <input
                    type="submit"
                    className="btn btn-success"
                    value="Войти"
                  />
                </form>
                <Link className="zz" to="/signup">
                  регистрация
                </Link>
              </div>
            ) : (
              <div>{user.username}</div>
            )}
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.authReducer.authenticated,
  loginErrors: state.authReducer.loginErrors,
  user: state.authReducer.user,
});

export default connect(mapStateToProps, { signIn, logOut })(Header);
