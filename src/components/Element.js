import React from "react";


function Element({ name, diameter, quantity, onChange}){
 
    return (
      <>
      <li className="Element">
        {name}; {diameter}{" "}
        <label>
          Quantity: <input onChange={onChange} defaultValue={quantity} type="number" />
        </label>
      </li>
      
      </>
    );
  
}

export default Element;
