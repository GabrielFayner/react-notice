import React from "react";

function Input({ type, TextPlaceholder, Value, OnChange }) {
  return (
    <input
      type={type}
      placeholder={TextPlaceholder}
      className="form-control"
      value={Value}
      onChange={OnChange}
    />
  );
}
export default Input;
