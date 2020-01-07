import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import HomePage from "./components/homepage/homepage";
import BlogMain from "./components/blog-main/blog-main";
import Login from "./components/login/login-page";
import Signup from "./components/signup/signup-page";

const App = () => (
  <BrowserRouter>
    <Route path="/" exact component={HomePage} />
    <Route path="/blog" exact component={BlogMain} />
    <Route path="/signup" exact component={Login} />
    <Route path="/login" exact component={Signup} />
  </BrowserRouter>
);

export default App;
