import React from "react";
import MoreButton from "./MoreButton";
// import PropTypes from "prop-types";

export default ({ posts }) => {
  return (
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
      <MoreButton />
    </div>
  );
};
