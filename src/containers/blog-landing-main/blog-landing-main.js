import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

import AddPost from "../add-post/add-post";
import "./blog-landing-main.scss";

const BlogMain = ({ email }) => {
  return (
    <>
      <div className="blog-footer">
        {email ? <AddPost /> : <div style={{ display: "none" }} />}
        {email ? (
          <div className="hr-div" />
        ) : (
          <div style={{ display: "none" }} />
        )}
        <h2 className="blog-footer-header">
          Would you like to receive my newsletter?
        </h2>
        <form action="#" className="blog-footer-form">
          <span className="blog-footer-form-span">
            <input
              className="gate"
              type="text"
              placeholder="Enter Email here"
            />
            <label htmlFor="class">Enter Email</label>
          </span>
        </form>
        <div className="blog-footer-icons">
          <FontAwesomeIcon
            icon={faTwitter}
            size="2x"
            className="blog-footer-icon-twitter"
          />
          <FontAwesomeIcon
            icon={faGithub}
            size="2x"
            className="blog-footer-icon-github"
          />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  email: state.login.email
});

export default connect(mapStateToProps)(BlogMain);
