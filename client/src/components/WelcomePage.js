import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';

import PostCard from './PostCard';

class WelcomePage extends Component {
  // constructor() {
  //   super();
  // }

  componentDidMount() {
    axios
      .get('/api/posts')
      .then(({ data }) => {
        console.log(data);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="content">
        <div className="container">
          <ul className="list">
            <PostCard />
          </ul>
        </div>
      </div>
    );
  }
}

export default WelcomePage;
