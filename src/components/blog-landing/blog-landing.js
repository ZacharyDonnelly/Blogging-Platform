import React from "react";

import { connect } from "react-redux";
import BlogNav from "../../containers/blog-landing-nav/blog-landing-nav";
import BlogTop from "../../containers/blog-first-fold/blog-first-fold";
import BlogMiddle from "../../containers/blog-second-fold/blog-second-fold";

import "./blog-landing.scss";

const BlogLanding = () => {
  return (
    <div className="full">
      <BlogNav />
      <BlogTop />
      <BlogMiddle />
    </div>
  );
};

const mapStateToProps = state => ({
  email: state.email
});

export default connect(mapStateToProps)(BlogLanding);
