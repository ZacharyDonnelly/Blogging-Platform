import React, { useState } from "react";

import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme } from "../../styled-components-config/theme";
import { GlobalStyles } from "../../styled-components-config/global";

import BlogNav from "../../containers/blog-landing-nav/blog-landing-nav";
import BlogTop from "../../containers/blog-landing-first-fold/blog-first-fold";
import BlogMiddle from "../../containers/blog-landing-second-fold/blog-second-fold";
import BlogFooter from "../../containers/blog-landing-footer/blog-landing-footer.js";

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
        <BlogMiddle />
        <BlogFooter />
      </div>
    </ThemeProvider>
  );
};

const mapStateToProps = state => ({
  email: state.email
});

export default connect(mapStateToProps)(BlogLanding);
