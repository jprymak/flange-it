import React from "react";

function Element({ name, diameter, onChange }) {
  return (
    <>
      <li className="Element">
        {name}; {diameter}{" "}
        <label>
          Quantity: <input onChange={onChange} type="number" />
        </label>
      </li>
    </>
  );
}

export default Element;
