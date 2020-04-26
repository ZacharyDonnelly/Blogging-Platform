import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import HomePage from "../src/containers/homepage/homepage";
import BlogLanding from "./components/blog-landing/blog-landing";
import Login from "./components/login/login-page";
import Signup from "./components/signup/signup-page";
import FullPost from "../src/components/full-post/full-post";

import configureStore from "./store/configureStore";
const store = configureStore();

// const client = new ApolloClient({ uri: "http://localhost:3006/graphql" });

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
      <Route path="/blog" exact component={BlogLanding} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/posts/:id" exact component={FullPost} />
    </BrowserRouter>
  </Provider>
);

export default App;
