import React from "react";

import FormField from "../../containers/form-fields/form-fields";
import SignupButtonBlack from "../../containers/form-buttons/signup-button-black";
import SignupButtonRed from "../../containers/form-buttons/signup-button-red";
import "./signup.scss";

class Signup extends React.Component {
  // const { email, password, displayName } = this.state;
  // if (!email || !password || !displayName) {
  //   alert("Please fill in the form!");
  //   return;
  // }
  constructor() {
    super();
    this.state = {
      email: "",
      display: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form">
          <FormField
            type="text"
            name="display"
            value={this.state.display}
            handleChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormField
            type="text"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormField
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <FormField
            type="password"
            name="password"
            value={this.state.confirmPassword}
            handleChange={this.handleChange}
            label="Current Password"
            required
          />
        </form>
        <SignupButtonRed />
        <SignupButtonBlack />
      </div>
    );
  }
}
export default Signup;
