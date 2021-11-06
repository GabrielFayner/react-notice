import React from "react";

function Select({ Label, Value, OnChange }) {
  return (
    <select className="form-control" onChange={OnChange}>
      <option value={Value}>{Label}</option>
    </select>
  );
}
export default Select;
