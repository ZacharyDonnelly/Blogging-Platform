import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import HomePage from "./components/homepage/homepage";
import BlogLanding from "./components/blog-landing/blog-landing";
import Login from "./components/login/login-page";
import Signup from "./components/signup/signup-page";

import configureStore from "./store/configureStore";
import ProfilePage from "./components/profile/profile-page";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({ uri: "http://localhost:3006/graphql" });
const store = configureStore();

const App = () => (
  <Provider store={store}>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Route path="/" exact component={HomePage} />
        <Route path="/blog" exact component={BlogLanding} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/profile" exact component={ProfilePage} />
      </BrowserRouter>
    </ApolloProvider>
  </Provider>
);

export default App;
