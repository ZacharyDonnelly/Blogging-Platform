import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "antd";
import { connect } from "react-redux";
import SvgComponent from "../../utils/svg/nav-svg-config";
import "./profile-nav.scss";

const ProfileNav = () => {
  return (
    <div className="profile-nav-wrapper">
      <nav className="profile-nav-navbar">
        <div className="clearfix">
          <ul className="profile-nav-list-left">
            <Link to="/">Home</Link>
          </ul>
        </div>
        <div className="clearfix">
          <ul className="profile-nav-list-right">
            <Link to="/blog">Blog</Link>
          </ul>
          <ul className="profile-nav-list-logout">
            <Link to="/" onClick={signOut}>
              Sign Out
            </Link>
          </ul>
          <Avatar size={64} icon="user" className="profile-avatar" />
        </div>
        <h2 className="nav-center">
          <SvgComponent className="blog-nav-svg-logo" />
        </h2>
      </nav>
    </div>
  );
};

const signOut = () => {
  window.localStorage.removeItem("email");
};
const mapStateToProps = state => ({
  email: state.email
});

export default connect(mapStateToProps)(ProfileNav);
