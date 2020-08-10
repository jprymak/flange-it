import React from "react";

function Element({ name, diameter }) {
  return (
    <li className="Element">
      {name}; {diameter}{" "}
      <label>
        Quantity: <input type="number" />
      </label>
    </li>
  );
}

export default Element;
