import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts } from "../../actions/postActions";
// import { Link, Route } from "react-router-dom";

import PostCard from "./PostCard";
import ListPosts from "./ListPosts";
import Loader from "../Loader";

class IndexPage extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { isFetching, posts } = this.props;
    return (
      <div className="container">
        {!isFetching ? <ListPosts posts={posts} /> : <Loader />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.postReducer.posts,
  isFetching: state.postReducer.isFetching,
});

export default connect(mapStateToProps, { getPosts })(IndexPage);
