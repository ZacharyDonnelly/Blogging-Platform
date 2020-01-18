import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Avatar } from "antd";
import { connect } from "react-redux";

import SvgComponent from "../../utils/svg/nav-svg-config";
import "./blog-landing-nav.scss";

const BlogNav = props => {
  const [scroll, setScroll] = useState(false);
  const [email, setEmail] = useState(false);
  const navRef = useRef(null);
  useEffect(() => {
    setEmail(
      JSON.parse(JSON.stringify(localStorage.getItem("email", props.email)))
    );
    const handleScroll = () => {
      if (window.pageYOffset <= 0) {
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
            <Link to="/profile" className="blog-link">
              {!email ? "Profile" : email}
            </Link>
          </ul>
          <Avatar size={64} icon="user" className="blog-avatar" />
        </div>
        <h2 className="nav-center">
          <SvgComponent className="blog-nav-svg-logo" />
        </h2>
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
