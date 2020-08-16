import React from "react";
// import { FlangePN16, ButterflyValvePN16, CheckValvePN16 } from "../data.js";
class Preview extends React.Component {
  render() {
    return (
      <section className="Preview">
        <h2 className="Preview__header">Flanges and bolts preview</h2>

        <div className="Preview__flanges">
          <h3>Flanges</h3>
          <hr></hr>
          <ul>
            {this.props.flanges.map((DN, index) =>
              DN[1] !== 0 ? (
                <li key={index}>
                  DN {DN[0]}; Quantity: {DN[1]}
                </li>
              ) : null
            )}
          </ul>
        </div>
        <div className="Preview__bolts">
          <h3>Bolts</h3>
          <hr></hr>
          {this.props.bolts.map((obj, index) =>
              obj["quantity"] !== 0 ? (
                <li key={index}>
                  Size: {obj["size"]}; Length: {obj["length"]}; Quantity: {obj["quantity"]}
                </li>
              ) : null
            )}
        </div>
      </section>
    );
  }
}

export default Preview;
