import React from "react";
import { FlangePN16, ButterflyValvePN16, CheckValvePN16 } from "../data.js";
class Preview extends React.Component {
  render() {
    return (
      <section className="Preview">
        <h2 className="Preview__header">Flanges and bolts preview</h2>

        <div className="Preview__flanges">
          <h3>Flanges</h3>
          <hr></hr>
          
        </div>
        <div className="Preview__bolts">
          <h3>Bolts</h3>
          <hr></hr>
          <ul>
            {/* {FlangePN16.map((element) => (
              <li>{element.bolt}</li>
            ))} */}
          </ul>
        </div>
      </section>
    );
  }
}

export default Preview;
