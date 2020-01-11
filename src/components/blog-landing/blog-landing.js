import React from "react";
import { Link } from "react-router-dom";

import "./blog-landing.scss";

const BlogMain = () => {
  return (
    <>
      <div className="nav-div">
        <nav className="blog-nav">
          <ul className="blog-list-left">
            <Link to="/" className="blog-link">
              Home
            </Link>
          </ul>
          <div className="clearfix">
            <ul className="blog-list-right">
              <Link to="/profile" className="blog-link">
                Profile
              </Link>
            </ul>
          </div>
        </nav>
        <h2 className="nav-center">Bloggr</h2>
      </div>
      <div className="wrapper">
        <img
          className="top-img"
          src="https://burst.shopifycdn.com/photos/laptop-on-desk-from-above_925x.jpg"
          alt="Laptop and Coffee"
        />
      </div>
    </>
  );
};

export default BlogMain;
