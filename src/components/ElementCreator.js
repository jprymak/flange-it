import React from "react";

function ElementCreator() {
  return (
    <section className="ElementCreator">
      <h2 className="ElementCreator__header">Pick element</h2>
      <hr></hr>
      <form className="ElementCreator__form">
        <label>
          Element:{" "}
          <select className="ElementCreator__item">
            <option value="element-1">Strainer</option>
            <option value="element-2">Butterfly valve</option>
            <option value="element-3">Check valve</option>
            <option value="element-4">Other devices</option>
          </select>
        </label>
        <label>
          Nominal diameter:{" "}
          <select className="ElementCreator__item">
            <option value="element-1">DN 32</option>
            <option value="element-2">DN 40</option>
            <option value="element-3">DN 50</option>
            <option value="element-4">DN 65</option>
            <option value="element-4">DN 80</option>
            <option value="element-4">DN 100</option>
            <option value="element-4">DN 125</option>
            <option value="element-4">DN 150</option>
            <option value="element-4">DN 200</option>
          </select>
        </label>
        <button className="ElementCreator__submit-button">Add element</button>
      </form>
    </section>
  );
}

export default ElementCreator;
