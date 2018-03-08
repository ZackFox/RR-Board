import React, { Component } from "react";
import { Link } from "react-router-dom";

import api from "../../constants/api";

class PostCard extends Component {
  render() {
    const { post } = this.props;
    return (
      <li className="post-item" data-id="1">
        <div className="post-top">
          {/* <span>Джон Коннор</span> */}
          <Link to={`/user/${post.user.id}`}>
            <span className="">{post.user.username} 1 час назад</span>
          </Link>
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
        </div>
        <div className="post-card-thumb">
          <img src={`${api}${post.thumbnail}`} />
        </div>

        <div className="post-tags">
          <a href="/">#куплю</a>
          <a href="/">#терминатор</a>
          <a href="/">#срочно</a>
        </div>
      </li>
    );
  }
}

export default PostCard;
