import React from 'react';

import RotatingFlange from "./RotatingFlange";
import EditableSection from "./EditableSection";
import Preview from "./Preview";


function App() {
  return (
    <div className="App">
      <RotatingFlange/>
      <EditableSection/>
      <Preview/>
    </div>
  );
}

export default App;
