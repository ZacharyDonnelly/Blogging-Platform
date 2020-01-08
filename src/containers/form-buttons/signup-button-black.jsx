import React from "react";

import "./signup-button-black.scss";

const SignupButton = ({ value, buttonClicked }) => {
  return (
    <div className="login-button" onClick={buttonClicked}>
      <div className="icons-top envelope">
        <i className="fa fa-envelope fa-2x"></i>
      </div>
      <div className="login-button-text">{value} With Email</div>
    </div>
  );
};
SignupButton.defaultProps = {
  value: "Sign-up"
};

export default SignupButton;
