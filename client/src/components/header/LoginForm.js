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
    this.emailInput.value = "";
    this.passwordInput.value = "";
  };

  render() {
    // const { loginErrors } = this.props;
    return (
      <div className="">
        <form onSubmit={this.submitHandler}>
          <p className="">{this.props.loginErrors}</p>
          <input type="text" name="email" ref={el => (this.emailInput = el)} />
          <input
            type="password"
            name="password"
            ref={el => (this.passwordInput = el)}
          />
          <input type="submit" className="btn btn-success" value="Войти" />
        </form>
        <Link className="zz" to="/signup">
          регистрация
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loginErrors: state.authReducer.loginErrors,
});

export default connect(mapStateToProps, { signIn })(LoginForm);
