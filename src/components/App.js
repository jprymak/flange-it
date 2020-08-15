import React from "react";

import RotatingFlange from "./RotatingFlange";
import Preview from "./Preview";
import ElementList from "./ElementList";

class App extends React.Component {
  state={
    flanges: []
  }

callbackFunction = (childData)=>{
this.setState({flanges: childData})
}

  render() {
    return (
      <div className="App">
        <RotatingFlange />
        <ElementList parentCallback = {this.callbackFunction} />
        <Preview flanges={this.state.flanges} />
      </div>
    );
  }
}

export default App;
