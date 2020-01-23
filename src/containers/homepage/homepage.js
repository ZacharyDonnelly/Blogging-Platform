import React from "react";
import { Link } from "react-router-dom";

import "./homepage.scss";

const HomePage = () => {
  return (
    <div className="wrapper">
      <span className="homepage-svg-span" />
      <span className="homepage-svg-span-wrapper"></span>
      <div className="box header">
        <ul className="homepage-list">
          <li className="homepage-list-item">
            <Link to="/" className="link homepage-link">
              Home
            </Link>
          </li>
          <li className="homepage-list-item">
            <Link to="/blog" className="link homepage-link">
              Blog
            </Link>
          </li>
          <li className="homepage-list-item">
            <Link to="/login" className="link homepage-link">
              Login
            </Link>
          </li>
          <li className="homepage-list-item">
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
          Hey, Welcome to my personal site & blog! The purpose of this blog is
          for my personal posts, rather than using a public site like Medium.
          Well, my name is Zach Donnelly. I am from upstate New York. So, I have
          been teaching myself web development for about 7 months now and am
          competent with HTML, CSS/SCSS, Javascript, React, Node, as well as
          Python. With minor experience in GraphQL/Apollo, Next JS, & Styled
          Components.
        </p>

        <p className="homepage-body">
          Besides web development I am a security enthusiast who loves doing
          HackTheBox & other capture the flag games. I have been writing my own
          tooling recently and will be adding those to my GitHub soon. Also, I
          love photography, some of the pictures you may see on my blog posts
          will be my own! Sadly, photography certainly sits on the back burner
          to web development/security.
        </p>
        <p className="homepage-body">
          Other than that, I am very into personal fitness and an advocate for
          healthy eating. Well enough about me, I hope you enjoy your stay!
        </p>
      </div>
      <div className="box content"></div>
    </div>
  );
};

export default HomePage;
