// eslint-disable-next-line no-unused-vars
import React from "react";

import FormField from "../../containers/form-fields/form-fields";
import SignupButtonBlack from "../../containers/form-buttons/signup-button-black";
import SignupButtonRed from "../../containers/form-buttons/signup-button-red";
import "./login.scss";
import LoginNav from "../../containers/login-nav/login-nav";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      display: "",
      password: ""
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <>
        <LoginNav page={"Sign-up"} value={"/signup"} />
        <div className="sign-in">
          <h2 className="title">I already have an account</h2>
          <span>Sign in with your email and password</span>

          <form>
            <FormField
              name="email"
              type="email"
              label="Email"
              handleChange={this.handleChange}
              value={this.state.email}
              required
            />
            <FormField
              name="password"
              type="password"
              handleChange={this.handleChange}
              value={this.state.password}
              label="Password"
              required
            />
          </form>
          <SignupButtonRed value={"in"} />
          <SignupButtonBlack value={"Sign-in"} />
        </div>
      </>
    );
  }
}

export default Login;
