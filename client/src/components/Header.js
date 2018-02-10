import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

class Header extends Component {
  // constructor() {
  //   super();
  // }

  componentDidMount() {}

  render() {
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

            <div className="auth">
              <span className="btn btn-success">Войти</span>
              <Link to="/signup">регистрация</Link>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
