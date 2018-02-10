import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

class PostCard extends Component {
  // constructor() {
  //   super();
  // }

  componentDidMount() {}

  render() {
    return (
      <li className="bulletin" data-id="1">
        <div className="bull-top">
          {/* <span>Джон Коннор</span> */}
          <Link to="/user">
            <span className="">1 час назад</span>
          </Link>
          <Link to="/post">
            <h3>Куплю терминатора(срочно)</h3>
          </Link>
        </div>
        <div className="bull-thumb-small">
          <img src="" alt="" />
        </div>
        <div className="bulletin-description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            placeat, dignissimos dicta perspiciatis enim quam distinctio
            praesentium expedita facere error ullam aspernatur quaerat,
            molestiae, maiores rem reprehenderit harum neque
          </p>
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
