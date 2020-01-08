import React from "react";

import "./form-field.scss";

const FormField = ({ label, handleChange, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} onChange={handleChange} />
      <label className="form-input-label">{label}</label>
    </div>
  );
};

export default FormField;
