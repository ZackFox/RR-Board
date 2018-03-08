import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import LoginForm from "./LoginForm";
import ProfileMenu from "./ProfileMenu";
import SearchComponent from "./SearchComponent";

class Header extends Component {
  render() {
    const { authenticated, isLoading } = this.props;
    return (
      <header className="board-header">
        <div className="container">
          <div className="flex-container">
            <div className="">
              <Link to="/" className="logo">
                #Дощечка
              </Link>
            </div>
            <SearchComponent />

            {isLoading ? ( // если есть токен - подтягивается user
              "авторизация..." // крутится спиннер
            ) : authenticated ? (
              <ProfileMenu /> // если user загрузился - рендерится меню
            ) : (
              <LoginForm /> // без токена сразу рендерится форма
            )}
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.authReducer.authenticated,
  isLoading: state.authReducer.isLoading,
});

export default connect(mapStateToProps, {})(Header);
