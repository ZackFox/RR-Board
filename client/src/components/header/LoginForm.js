import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { signIn } from "../../actions/authActions";

class LoginForm extends Component {
  submitHandler = e => {
    e.preventDefault();
    const email = this.emailInput.value;
    const password = this.passwordInput.value;
    this.props.signIn(email, password);
  };

  render() {
    return (
      <div className="user-block">
        {/* <span>/</span> */}
        <div className="login-btn">
          <span>Войти</span>
          <div className="loginMenu">
            <form onSubmit={this.submitHandler}>
              <div className="form-group">
                <p className="messages">{this.props.loginErrors}</p>
              </div>
              <div className="form-group">
                <label htmlFor="emaillogin">Email :</label>
                <input
                  type="text"
                  name="email"
                  ref={el => (this.emailInput = el)}
                  className="form-control"
                  id="emaillogin"
                  placeholder="Введите ваш email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="passwordlogin">Пароль :</label>
                <input
                  type="password"
                  name="password"
                  ref={el => (this.passwordInput = el)}
                  className="form-control"
                  id="passwordlogin"
                  placeholder="Введите ваш пароль"
                />
              </div>

              <input type="submit" className="btn btn-success" value="Войти" />
              <Link className="signup-btn" to="/signup">
                Зарегистрироваться
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loginErrors: state.authReducer.loginErrors,
});

export default connect(mapStateToProps, { signIn })(LoginForm);
