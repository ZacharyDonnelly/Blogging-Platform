import React, { useState } from "react";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme } from "../../styled-components-config/theme";
import { GlobalStyles } from "../../styled-components-config/global";
import photo from "../../../public/assets/PS-Blog.png";
import Toggle from "../../components/toggle/toggle";

import "./blog-first-fold.scss";

const BlogTop = () => {
  const [theme, setTheme] = useState("light");
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === "light") {
      setTheme("dark");
      // otherwise, it should be light
    } else {
      setTheme("light");
    }
  };
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <div>
        <div className="blog-wrapper">
          <div className="blog-container">
            <div className="sidebar-container">
              <h2 className="sidebar-header">A Little Description..</h2>
              <p className="sidebar-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
                impedit commodi excepturi nulla aliquam quia autem vero ut.
                Aliquam eius soluta nobis magnam qui dolor fugit natus obcaecati
                cupiditate nostrum, reprehenderit et consectetur. Est earum
                dolorum porro facilis fugit quidem nemo aliquam dignissimos. Ex,
                eligendi incidunt corrupti ducimus illum magni.
              </p>
              <br />
              <p className="sidebar-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
                impedit commodi excepturi nulla aliquam quia autem vero ut.
                Aliquam eius soluta nobis magnam qui dolor fugit natus obcaecati
                cupiditate nostrum, reprehenderit et consectetur. Est earum
                dolorum porro facilis fugit quidem nemo aliquam dignissimos. Ex,
                eligendi incidunt corrupti ducimus illum magni.
              </p>
              <br />
              <p className="sidebar-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
                impedit commodi excepturi nulla aliquam quia autem vero ut.
                Aliquam eius soluta nobis magnam qui dolor fugit natus obcaecati
                cupiditate nostrum, reprehenderit et consectetur. Est earum
                dolorum porro facilis fugit quidem nemo aliquam dignissimos. Ex,
                eligendi incidunt corrupti ducimus illum magni.
              </p>
            </div>
          </div>
          <img src={photo} className="blog-img"></img>
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
