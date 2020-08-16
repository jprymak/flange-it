import React from "react";

import RotatingFlange from "./RotatingFlange";
import Preview from "./Preview";
import ElementList from "./ElementList";

class App extends React.Component {
  state = {
    flanges: [],
    bolts: [],
  };

  getFlanges = (childData) => {
    this.setState({ flanges: childData });
  };
  getBolts = (childData) => {
    this.setState({ bolts: childData });
  };

  render() {
    return (
      <div className="App">
        <RotatingFlange />
        <ElementList getFlanges={this.getFlanges} getBolts={this.getBolts} />
        <Preview flanges={this.state.flanges} bolts={this.state.bolts} />
      </div>
    );
  }
}

export default App;
