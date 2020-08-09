import React from "react";

function ElementList() {
  return (
    <section className="ElementList">
        <h2>Element List</h2>
        <hr></hr>
      <ul>
        <li>
          Check valve; DN50{" "}
          <label>
            Quantity: <input type="number" />
          </label>{" "}
        </li>
      </ul>
    </section>
  );
}

export default ElementList;
