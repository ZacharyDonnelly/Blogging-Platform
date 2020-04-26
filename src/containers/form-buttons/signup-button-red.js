import React from "react";

import "./signup-button-red.scss";
const SignupButtonRed = ({ value }) => {
  return (
    <div className="custom-button gplus">
      <div className="icons fa-gplus">
        <i className="fa fa-google"></i>
      </div>
      <div className="signtext">Sign-{value} with Gmail</div>
    </div>
  );
};

SignupButtonRed.defaultProps = {
  value: "up"
};

export default SignupButtonRed;
