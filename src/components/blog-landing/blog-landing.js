import React, {useState} from "react";

import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme } from "../../../theme";
import { GlobalStyles } from "../../../global";
import BlogNav from "../../containers/blog-landing-nav/blog-landing-nav";
import BlogTop from "../../containers/blog-first-fold/blog-first-fold";
import BlogMiddle from "../../containers/blog-second-fold/blog-second-fold";

import "./blog-landing.scss";

const BlogLanding = () => {
  const [theme, setTheme] = useState("light");
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
    <GlobalStyles/>
    <div className="full">
      <BlogNav />
      <BlogTop />
      <BlogMiddle />
    </div>
    </ThemeProvider>
  );
};

const mapStateToProps = state => ({
  email: state.email
});

export default connect(mapStateToProps)(BlogLanding);
