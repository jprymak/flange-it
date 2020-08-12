import React from 'react';

import RotatingFlange from "./RotatingFlange";
import Preview from "./Preview";
import ElementList from './ElementList';


function App() {
  return (
    <div className="App">
      <RotatingFlange/>
      <ElementList/>
      <Preview/>
    </div>
  );
}

export default App;
