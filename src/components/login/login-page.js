// eslint-disable-next-line no-unused-vars
import React from "react";
import { connect } from "react-redux";
import axios from "axios";

import {
  emailAction,
  passwordAction,
  tokenAction
} from "../../actions/form-actions";
import SignupButtonBlack from "../../containers/form-buttons/signup-button-black";
import SignupButtonRed from "../../containers/form-buttons/signup-button-red";
import LoginNav from "../../containers/login-nav/login-nav";
import "./login.scss";

// TODO CLEAR FORM FIELDS ON PAGE CHANGE

const Login = props => {
  return (
    <>
      <LoginNav page={"Sign-up"} value={"/signup"} />
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form>
          <div className="group">
            <input
              className="form-input"
              type="text"
              name="email"
              value={props.email}
              onChange={e => props.dispatch(emailAction(e.target.value))}
              required
            />
            <label className="form-input-label">Email</label>
          </div>
          <div className="group">
            <input
              className="form-input"
              type="password"
              name="password"
              value={props.password}
              onChange={e => props.dispatch(passwordAction(e.target.value))}
              required
            />
            <label className="form-input-label">Password</label>
          </div>
        </form>
        <SignupButtonRed value={"in"} />
        <SignupButtonBlack
          value={"Sign-in"}
          buttonClick={() => handleClick(props)}
        />
      </div>
    </>
  );
};
const handleClick = async props => {
  try {
    const { data } = await axios.post("http://localhost:3006/auth", {
      ...props
    });
    props.dispatch(tokenAction(data.token));
    props.history.push("/");
  } catch {
    alert("Invalid email or password!");
  }
};

const mapStateToProps = state => ({
  email: state.email,
  password: state.password
});

export default connect(mapStateToProps)(Login);
