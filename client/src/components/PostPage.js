import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrentPost } from "../actions/postActions";

import api from "../constants/api";
import Loader from "./Loader";

class PostPage extends Component {
  // constructor() {
  //   super();
  // }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getCurrentPost(id);
  }

  render() {
    const { post, isFetching } = this.props;
    return !isFetching ? (
      <div className="container">
        <h3>{post.title}</h3>
        <div className="post-page-thumb">
          <img src={`${api}${post.thumbnail}`} />
        </div>
        <p>{post.text}</p>
      </div>
    ) : (
      <Loader />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  post: state.postReducer.currentPost,
  authenticated: state.authReducer.authenticated,
  isFetching: state.postReducer.isFetching,
});

export default connect(mapStateToProps, { getCurrentPost })(PostPage);
