import React from 'react';
import RotatingFlange from "./RotatingFlange";
import ElementCreator from "./ElementCreator";
import ElementList from "./ElementList";
import Preview from "./Preview";

function App() {
  return (
    <div className="App">
      <RotatingFlange/>
      <ElementCreator/>
      <ElementList/>
      <Preview/>
    </div>
  );
}

export default App;
