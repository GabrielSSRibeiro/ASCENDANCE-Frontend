import React from "react";

import "./styles.css";

function FormField({ label, onChange, type, placeholder }) {
  return (
    <>
      <label className="form-field-label ">{label}</label>

      <div className="w-100"></div>

      <input
        type={type ? type : ""}
        placeholder={placeholder ? placeholder : ""}
        className="form-field-input"
        onChange={e => onChange(e.target.value)}
      ></input>
    </>
  );
}
export default FormField;
