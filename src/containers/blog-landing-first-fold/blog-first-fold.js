import React, { useState } from "react";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme } from "../../styled-components-config/theme";
import { GlobalStyles } from "../../styled-components-config/global";
import Toggle from "../../components/toggle/toggle";

import "./blog-first-fold.scss";

const BlogTop = () => {
  const [theme, setTheme] = useState("light");
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <div className="blog-wrapper">
        <div className="blog-container">
          <img
            src="https://images.unsplash.com/photo-1576235789670-28a9c8e950b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            className="blog-img"></img>
          <Toggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>
      <hr className="blog-hr" />
    </ThemeProvider>
  );
};

const mapStateToProps = state => ({
  email: state.email
});

export default connect(mapStateToProps)(BlogTop);
