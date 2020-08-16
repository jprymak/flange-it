import React from "react";
import { v4 as uuidv4 } from "uuid";
class ElementCreator extends React.Component {
  constructor(props) {
    super(props);
    this.elementInput = React.createRef();
    this.diameterInput = React.createRef();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onCreate({
      id: uuidv4(),
      name: this.elementInput.current.value,
      DN: this.diameterInput.current.value,
      quantity: "1",
    });
  };

  render() {
    return (
      <section className="ElementCreator">
        <h2 className="ElementCreator__header">Pick element</h2>
        <hr></hr>
        <form onSubmit={this.handleSubmit} className="ElementCreator__form">
          <label>
            Element:{" "}
            <select className="ElementCreator__item" ref={this.elementInput}>
              <option value="Strainer">Strainer</option>
              <option value="Butterfly valve">Butterfly valve</option>
              <option value="Check valve">Check valve</option>
              <option value="Other devices">Other devices</option>
            </select>
          </label>
          <label>
            Nominal diameter:{" "}
            <select className="ElementCreator__item" ref={this.diameterInput}>
              <option value="32">DN 32</option>
              <option value="40">DN 40</option>
              <option value="50">DN 50</option>
              <option value="65">DN 65</option>
              <option value="80">DN 80</option>
              <option value="100">DN 100</option>
              <option value="125">DN 125</option>
              <option value="150">DN 150</option>
              <option value="200">DN 200</option>
            </select>
          </label>
          {this.props.hasAlreadyBeenPicked ? (
            <p style={{ color: "red" }}>
              You've already picked that element. Choose a different one.
            </p>
          ) : null}
          <button className="ElementCreator__submit-button">Add element</button>
        </form>
      </section>
    );
  }
}

export default ElementCreator;
