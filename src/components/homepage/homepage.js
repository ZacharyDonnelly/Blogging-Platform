import React from "react";
import { Link } from "react-router-dom";

import "./homepage.scss";

const HomePage = () => {
  return (
    <div className="wrapper">
      <div className="box header">
        <ul>
          <li>
            <Link to="/" className="link homepage-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/blog" className="link homepage-link">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/login" className="link homepage-link">
              Login
            </Link>
          </li>
          <li>
            <Link to="/signup" className="link homepage-link">
              Signup
            </Link>
          </li>
        </ul>
      </div>
      <div className="box sidebar">
        <h1 className="homepage-header">
          Zach <span className="homepage-underline">Donnell</span>y
        </h1>
        <p className="homepage-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis
          donec et odio pellentesque diam volutpat. Sed egestas egestas
          fringilla phasellus faucibus. Amet tellus cras adipiscing enim. Tellus
          molestie nunc non blandit massa enim nec. Faucibus et molestie ac
          feugiat sed lectus. Gravida rutrum quisque non tellus orci ac.
        </p>

        <p className="homepage-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis
          donec et odio pellentesque diam volutpat. Sed egestas egestas
          fringilla phasellus faucibus. Amet tellus cras adipiscing enim. Tellus
          molestie nunc non blandit massa enim nec. Faucibus et molestie ac
          feugiat sed lectus. Gravida rutrum quisque non tellus orci ac.
        </p>
        <p className="homepage-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis
          donec et odio pellentesque diam volutpat. Sed egestas egestas
          fringilla phasellus faucibus. Amet tellus cras adipiscing enim. Tellus
          molestie nunc non blandit massa enim nec. Faucibus et molestie ac
          feugiat sed lectus. Gravida rutrum quisque non tellus orci ac.
        </p>
      </div>
      <div className="box content"></div>
    </div>
  );
};

export default HomePage;
