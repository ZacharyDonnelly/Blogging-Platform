import React, { useState } from "react";

import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme } from "../../styled-components-config/theme";
import { GlobalStyles } from "../../styled-components-config/global";

import BlogNav from "../../containers/blog-landing-nav/blog-landing-nav";
import BlogTop from "../../containers/blog-landing-first-fold/blog-first-fold";
import BlogMain from "../../containers/blog-landing-main/blog-landing-main";
import MapPosts from "../../containers/map-posts/map-post";
import Posts from "../../containers/posts/posts";

import "./blog-landing.scss";

const BlogLanding = () => {
  //remove redux from this
  const [theme] = useState("light");
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <div className="blog-landing-root">
        <BlogNav />
        <BlogTop />
        <BlogMain />
        <MapPosts />
      </div>
    </ThemeProvider>
  );
};

const mapStateToProps = state => ({
  title: state.title,
  body: state.body
});

export default connect(mapStateToProps)(BlogLanding);
