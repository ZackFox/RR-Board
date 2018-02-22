import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link, Route } from "react-router-dom";
// import axios from "axios";

import PostCard from "./PostCard";

class IndexPage extends Component {
  render() {
    const { posts } = this.props;
    console.log(posts);
    return (
      <div className="content">
        <div className="container">
          <ul className="list">
            {posts.map(item => (
              <PostCard
                key={item.id}
                title={item.title}
                text={item.text}
                user={item.user}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.postReducer.posts,
});

export default connect(mapStateToProps, {})(IndexPage);
