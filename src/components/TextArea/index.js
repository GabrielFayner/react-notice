import React from "react";

function TextArea({ Name, Value, OnChange }) {
  return (
    <textarea
      className="form-control"
      name={Name}
      value={Value}
      onChange={OnChange}
    />
  );
}
export default TextArea;
