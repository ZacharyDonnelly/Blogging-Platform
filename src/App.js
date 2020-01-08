import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import HomePage from "./components/homepage/homepage";
import BlogMain from "./components/blog-main/blog-main";
import Login from "./components/login/login-page";
import Signup from "./components/signup/signup-page";

import configureStore from "./store/configureStore";

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
      <Route path="/blog" exact component={BlogMain} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={Signup} />
    </BrowserRouter>
  </Provider>
);

export default App;
