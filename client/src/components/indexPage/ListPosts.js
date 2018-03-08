import React from "react";
import PostCard from "./PostCard";
import MoreButton from "./MoreButton";
// import PropTypes from "prop-types";

export default ({ posts }) => {
  return (
    <div className="content">
      <ul className="post-list">
        {posts.map(item => <PostCard key={item.id} post={item} />)}
      </ul>
      <MoreButton />
    </div>
  );
};
