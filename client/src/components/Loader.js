import React, { Component } from "react";
import PropTypes from "prop-types";
import loader from "./load.gif";

export default () => {
  return (
    <div className="loader-container">
      <img width="100" src={loader} />
    </div>
  );
};
