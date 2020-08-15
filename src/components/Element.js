import React from "react";

function Element({ name, diameter, onChange, onDelete }) {
  return (
    <>
      <li className="Element">
        {name}; {diameter}{" "}
        <label>
          Quantity: <input onChange={onChange} type="number" />
        </label>
        <button onClick={onDelete}>Delete</button>
      </li>
    </>
  );
}

export default Element;
