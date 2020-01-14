import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "antd";
import { connect } from "react-redux";

import "./blog-landing-nav.scss";

const BlogNav = props => {
  return (
    <div>
      <nav className="blog-nav">
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
      </nav>
      <h2 className="nav-center">Bloggr</h2>
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
