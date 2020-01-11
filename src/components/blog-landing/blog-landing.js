import React from "react";
import { Link } from "react-router-dom";

import photo from "../../../public/assets/Artboard 1.png";
import "./blog-landing.scss";

const BlogMain = () => {
  return (
    <div className="outter-div">
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
        <img className="top-img" src={photo} alt="Laptop and Coffee" />
      </div>
      <div className="side-container">
        <div className="blog-sidebar">
          <h2 className="sidebar-left-header"></h2>
        </div>
      </div>
    </div>
  );
};

export default BlogMain;
