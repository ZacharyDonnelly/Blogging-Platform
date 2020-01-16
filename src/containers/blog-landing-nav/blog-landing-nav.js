import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Avatar } from "antd";
import { connect } from "react-redux";

import "./blog-landing-nav.scss";

const BlogNav = props => {
  const [scroll, setScroll] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (ref.current.getBoundingClientRect().top <= 0) {
        setScroll(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  });
  return (
    <div>
      <nav
        className="blog-nav"
        ref={ref}
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
            <Link to="/profile" className="blog-link">
              {!props.email ? "Profile" : props.email}
            </Link>
          </ul>
          <Avatar size={64} icon="user" className="blog-avatar" />
        </div>
        <h2 className="nav-center">Bloggr</h2>
      </nav>
    </div>
  );
};

BlogNav.defaultProps = {
  email: "Profile"
};

const mapStateToProps = state => ({
  email: state.email
});

export default connect(mapStateToProps)(BlogNav);
