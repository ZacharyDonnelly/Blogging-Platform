import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme } from "../../styled-components-config/theme";
import { GlobalStyles } from "../../styled-components-config/global";
import Toggle from "../../components/toggle/toggle";
// import HomepageSvgComponent from "../../../public/assets/svg/homepage-svg";

import "./homepage.scss";

const HomePage = () => {
  const [theme, setTheme] = useState("light");
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <div className="wrapper">
        <span className="homepage-svg-span" />
        <span className="homepage-svg-span-wrapper">
          {/* <HomepageSvgComponent className="homepage-svg" /> */}
        </span>
        <div className="box header">
          <ul className="homepage-list">
            <li className="homepage-list-item">
              <Link to="/" className="link homepage-link">
                Home
              </Link>
            </li>
            <li className="homepage-list-item">
              <Link to="/blog" className="link homepage-link">
                Blog
              </Link>
            </li>
            <li className="homepage-list-item">
              <Link to="/login" className="link homepage-link">
                Login
              </Link>
            </li>
            <li className="homepage-list-item">
              <Link to="/signup" className="link homepage-link">
                Signup
              </Link>
            </li>
          </ul>
        </div>
        <div className="box sidebar">
          <h1 className="homepage-header">
            Zach <span className="homepage-underline">Donnell</span>y
          </h1>
          <p className="homepage-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis
            donec et odio pellentesque diam volutpat. Sed egestas egestas
            fringilla phasellus faucibus. Amet tellus cras adipiscing enim.
            Tellus molestie nunc non blandit massa enim nec. Faucibus et
            molestie ac feugiat sed lectus. Gravida rutrum quisque non tellus
            orci ac.
          </p>

          <p className="homepage-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis
            donec et odio pellentesque diam volutpat. Sed egestas egestas
            fringilla phasellus faucibus. Amet tellus cras adipiscing enim.
            Tellus molestie nunc non blandit massa enim nec. Faucibus et
            molestie ac feugiat sed lectus. Gravida rutrum quisque non tellus
            orci ac.
          </p>
          <p className="homepage-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis
            donec et odio pellentesque diam volutpat. Sed egestas egestas
            fringilla phasellus faucibus. Amet tellus cras adipiscing enim.
            Tellus molestie nunc non blandit massa enim nec. Faucibus et
            molestie ac feugiat sed lectus. Gravida rutrum quisque non tellus
            orci ac.
          </p>
        </div>
        <div className="box content"></div>
        <Toggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>
  );
};

export default HomePage;
