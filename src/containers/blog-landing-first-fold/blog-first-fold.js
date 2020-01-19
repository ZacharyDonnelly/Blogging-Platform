import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme } from "../../styled-components-config/theme";
import { GlobalStyles } from "../../styled-components-config/global";
import photo from "../../../public/assets/PS-Blog.png";
import Toggle from "../../components/toggle/toggle";

import "./blog-first-fold.scss";

const BlogTop = props => {
  const [theme, setTheme] = useState("light");
  const [email, setEmail] = useState(false);
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    setEmail(localStorage.getItem("email", props.email));
    console.log(email);
  });

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
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
          <img src={photo} className="blog-img"></img>
          <Toggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>
      <hr className="blog-hr" />
      <h3 className="blog-featured">Featured posts</h3>
    </ThemeProvider>
  );
};

const mapStateToProps = state => ({
  email: state.email
});

export default connect(mapStateToProps)(BlogTop);
