import React, { Component } from "react";
import { Link } from "react-router-dom";

class PostCard extends Component {
  render() {
    return (
      <li className="bulletin" data-id="1">
        <div className="bull-top">
          {/* <span>Джон Коннор</span> */}
          <Link to="/user">
            <span className="">1 час назад</span>
          </Link>
          <Link to="/post">
            <h3>{this.props.title}</h3>
          </Link>
        </div>
        <div className="bull-thumb-small">
          <img src="" alt="" />
        </div>
        <div className="bulletin-description">
          <p>{this.props.text}</p>
        </div>

        <div className="bull-tags">
          <a href="/">#куплю</a>
          <a href="/">#терминатор</a>
          <a href="/">#срочно</a>
        </div>
      </li>
    );
  }
}

export default PostCard;
