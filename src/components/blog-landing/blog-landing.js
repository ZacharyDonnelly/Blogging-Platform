import React from "react";
import "./blog-landing.scss";

const BlogMain = () => {
  return (
    <>
      <div className="nav-div">
        <nav className="blog-nav">
          <ul className="blog-list-left">
            <li className="blog-item">Home</li>
          </ul>
          <div className="clearfix">
            <ul className="blog-list-right">
              <li className="blog-item" id="right-side">
                Profile
              </li>
            </ul>
          </div>
        </nav>
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
