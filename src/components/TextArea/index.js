import React from "react";

function TextArea({ Value, OnChange }) {
  return (
    <textarea className="form-control" value={Value} onChange={OnChange} />
  );
}
export default TextArea;
