import React from "react";
import "./homepage.scss";

const HomePage = () => {
  return (
    <div className="wrapper">
      <div className="box header">
        <ul>
          <li>About</li>
          <li>Blog</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="box sidebar">
        <h1>
          Zach <span>Donnell</span>y
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis
          donec et odio pellentesque diam volutpat. Sed egestas egestas
          fringilla phasellus faucibus. Amet tellus cras adipiscing enim. Tellus
          molestie nunc non blandit massa enim nec. Faucibus et molestie ac
          feugiat sed lectus. Gravida rutrum quisque non tellus orci ac.
        </p>

        <p>
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
