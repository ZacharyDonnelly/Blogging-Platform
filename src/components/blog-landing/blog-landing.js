import React from "react";

import { connect } from "react-redux";
import BlogTop from "../../containers/blog-first-fold/blog-first-fold";
import "./blog-landing.scss";

const BlogLanding = () => {
  return (
    <div className="full">
      <BlogTop />
    </div>
  );
};

const mapStateToProps = state => ({
  email: state.email
});

export default connect(mapStateToProps)(BlogLanding);
