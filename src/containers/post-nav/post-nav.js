import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Avatar } from "antd";
import "./post-nav.scss";

const PostNav = () => {
  const [scroll, setScroll] = useState(false);
  const [user, setUser] = useState(false);
  const navRef = useRef(null);
  useEffect(() => {
    setUser(localStorage.getItem("email"));
    const handleScroll = () => {
      if (window.scrollY > 0.0001) {
        setScroll(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div className="profile-nav-wrapper">
      <nav
        className="profile-nav-navbar"
        ref={navRef}
        style={{
          position: scroll ? "fixed" : "relative"
        }}>
        <div className="clearfix">
          <ul className="profile-nav-list-left">
            <Link to="/" className="post-link">
              Home
            </Link>
          </ul>
        </div>
        <div className="clearfix">
          <ul className="profile-nav-list-logout">
            <Link to="/" onClick={signOut} className="post-link">
              {!user ? "Profile" : user}
            </Link>
          </ul>
          <Avatar size={64} icon="user" className="profile-avatar" />
        </div>
      </nav>
    </div>
  );
};

const signOut = () => {
  window.localStorage.removeItem("email");
  window.localStorage.clear();
};

export default PostNav;
