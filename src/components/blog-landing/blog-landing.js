import React from "react";
import { Link } from "react-router-dom";


import photo from "../../../public/assets/PS-Blog.png";

import "./blog-landing.scss";

const BlogLanding = () => {
  return (
    <div className="full">
      <nav className="blog-nav">
        <div className="clearfix">
          <ul className="blog-list-left">
            <Link to="/" className="blog-link">
              Home
            </Link>
          </ul>
          <ul className="blog-list-right">
            <Link to="/profile" className="blog-link">
              Profile
            </Link>
          </ul>
        </div>
      </nav>
      <h2 className="nav-center">Bloggr</h2>
      <div className="blog-wrapper">
        <div className="blog-container">
          <div className="sidebar-container">
            <h2 className="sidebar-header">Header</h2>
            <p className="sidebar-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
              impedit commodi excepturi nulla aliquam quia autem vero ut.
              Aliquam eius soluta nobis magnam qui dolor fugit natus obcaecati
              cupiditate nostrum, reprehenderit et consectetur. Est earum
              dolorum porro facilis fugit quidem nemo aliquam dignissimos. Ex,
              eligendi incidunt corrupti ducimus illum magni.
            </p>
          <div className="clearfix">
            <ul className="blog-list-right">
              <Link to="/profile" className="blog-link">
                Profile
              </Link>
            </ul>
          </div>
        </div>
        <img src={photo} className="blog-img"></img>
      </div>
    </div>
  );
};

export default BlogLanding;
