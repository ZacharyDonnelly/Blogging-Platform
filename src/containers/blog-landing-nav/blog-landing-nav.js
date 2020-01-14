import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Avatar } from "antd";
import { connect } from "react-redux";

import "./blog-landing-nav.scss";

const BlogNav = props => {
  const navRef = useRef();
  useEffect(() => {
    const fixNav = () => {
      const doc = document.body;
      const topOfNav = navRef.current.offsetTop;
      if (window.scrollY >= topOfNav) {
        doc.style.paddingTop = `${navRef.current.offsetHeight}px`;
        doc.classList.add("fixed-nav");
      } else {
        doc.style.paddingTop = 0;
        doc.classList.remove("fixed-nav");
      }
    };
    window.addEventListener("scroll", fixNav);
    return () => {
      window.removeEventListener("scroll", fixNav);
      location.reload();
      navRef.style.width = "100%";
    };
  }, ["scroll"]);
  return (
    <div>
      <nav className="blog-nav" ref={navRef}>
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
