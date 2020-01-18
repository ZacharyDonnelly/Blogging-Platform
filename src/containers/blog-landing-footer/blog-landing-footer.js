import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

import "./blog-landing-footer.scss";

const BlogFooter = () => {
  return (
    <div className="blog-footer">
      <h2 className="blog-footer-header">
        Would you like to receive my newsletter?
      </h2>
      <form action="#" className="blog-footer-form">
        <span className="blog-footer-form-span">
          <input className="gate" type="text" placeholder="Enter Email here" />
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
  );
};

export default BlogFooter;
