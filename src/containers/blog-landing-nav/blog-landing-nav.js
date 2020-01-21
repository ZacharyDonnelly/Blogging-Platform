import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Avatar } from "antd";

// import SvgComponent from "../../../public/assets/svg/nav-svg-config";
import "./blog-landing-nav.scss";

const BlogNav = () => {
  const [scroll, setScroll] = useState(false);
  const [user, setUser] = useState(false);
  const navRef = useRef(null);
  useEffect(() => {
    setUser(localStorage.getItem("email"));
    const handleScroll = () => {
      if (window.scrollY > 0.001) {
        setScroll(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div className="blog-nav-wrapper">
      <nav
        className="blog-nav"
        ref={navRef}
        style={{
          position: scroll ? "fixed" : "relative"
        }}>
        <div className="clearfix">
          <ul className="blog-list-left">
            <Link to="/" className="blog-link">
              Home
            </Link>
          </ul>
          <ul className="blog-list-right">
            <li className="blog-link blog-li">{!user ? "Profile" : user}</li>
          </ul>
          <Avatar size={64} icon="user" className="blog-avatar" />
        </div>
        <h2 className="nav-center">
          {/* <SvgComponent className="blog-nav-svg-logo" /> */}
        </h2>
      </nav>
    </div>
  );
};

export default BlogNav;
