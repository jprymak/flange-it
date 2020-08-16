import React from "react";

function Element({ name, DN, onChange, onDelete }) {
  return (
    <>
      <li className="Element">
        {name}; DN {DN}{" "}
        <label>
          Quantity: <input onChange={onChange} type="number" />
        </label>
        <button onClick={onDelete}>Delete</button>
      </li>
    </>
  );
}

export default Element;
