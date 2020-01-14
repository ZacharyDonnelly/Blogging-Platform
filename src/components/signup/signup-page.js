import React from "react";
import { connect } from "react-redux";
import axios from "axios";

import SignupButtonBlack from "../../containers/form-buttons/signup-button-black";
import SignupButtonRed from "../../containers/form-buttons/signup-button-red";
import LoginNav from "../../containers/login-nav/login-nav";
import "./signup.scss";
import {
  displayAction,
  emailAction,
  passwordAction
} from "../../actions/form-actions";

// TODO CLEAR FORM FIELDS ON PAGE CHANGE

const Signup = props => {
  return (
    <>
      <LoginNav value="/login" />
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={() => handleSubmit(props)}>
          <div className="group">
            <input
              className="form-input"
              type="text"
              name="display"
              value={props.display}
              onChange={e => props.dispatch(displayAction(e.target.value))}
              required
            />
            <label className="form-input-label">Display Name</label>
          </div>
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
        <SignupButtonRed />
        <SignupButtonBlack buttonClick={() => handleSubmit(props)} />
      </div>
    </>
  );
};

const handleSubmit = async props => {
  try {
    const { data } = await axios.post("http://localhost:3006/verify", {
      ...props
    });
    if (data === "No Match") {
      axios.post("http://localhost:3006/users", { ...props });
      localStorage.setItem("creds", JSON.stringify({ ...props }));
      props.history.push("/blog");
    }
  } catch (err) {
    console.error(err);
    alert("Email or Username already in use");
  }
};

const mapStateToProps = state => ({
  email: state.email,
  password: state.password,
  display: state.display
});

export default connect(mapStateToProps)(Signup);
