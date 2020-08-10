import React from "react";

import Element from"./Element";
class ElementList extends React.Component {
  
  render() {
    const {elements} = this.props;
    return (
      <section className="ElementList">
        <h2>Element List</h2>
        <hr></hr>
        <ul>
          {elements.map((element)=>
            <Element key={element.id} name={element.name} diameter={element.diameter}/>
          )}
        </ul>
      </section>
    );
  }
}

export default ElementList;
