import React from "react";

function Input({ type, Name, TextPlaceholder, Value, OnChange }) {
  return (
    <input
      type={type}
      name={Name}
      placeholder={TextPlaceholder}
      className="form-control"
      value={Value}
      onChange={OnChange}
    />
  );
}
export default Input;
