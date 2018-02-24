import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link, Route } from "react-router-dom";
// import axios from "axios";

import PostCard from "./PostCard";
import ListPosts from "./ListPosts";

class IndexPage extends Component {
  render() {
    const { isFetching, posts } = this.props;
    console.log(posts);
    return (
      <div className="content">
        {!isFetching ? <ListPosts posts={posts} /> : "загрузка..."}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.postReducer.posts,
  isFetching: state.postReducer.isFetching,
});

export default connect(mapStateToProps, {})(IndexPage);
