import React from "react";
import ElementCreator from "./ElementCreator";
import Element from "./Element";
import { v4 as uuidv4 } from "uuid";

class ElementList extends React.Component {
  state = {
    elements: [
      { id: uuidv4(), name: "valve", diameter: "DN 65", quantity: "" },
      { id: uuidv4(), name: "valve", diameter: "DN 65", quantity: "" },
      { id: uuidv4(), name: "valve", diameter: "DN 65", quantity: "" },
    ],
  };

  addElement = (addedElement) => {
    this.setState((prevState) => {
      const elements = [...prevState.elements, addedElement];
      return { elements };
    });
  };

  handleUpdate = (indexToUpdate, updatedElement) => {
    this.setState((prevState) => {
      const elements = prevState.elements.map((element, index) =>
        index === indexToUpdate ? updatedElement : element
      );
      return { elements };
    });
  };

  handleCreate = (createdElement) => {
    this.addElement(createdElement);
  };

  countFlanges = ()=>{
    console.log(this.state.elements)
  }

  render() {
    return (
      <>
        <ElementCreator onCreate={this.handleCreate} />
        <section className="ElementList">
          <h2>Element List</h2>
          <hr></hr>
          <ul>
            {this.state.elements.map((element, index) => (
              <Element

                onChange={(event) =>
                  this.handleUpdate(index, {
                    ...element,
                    quantity: event.target.value,
                  })
                }
                key={element.id}
                name={element.name}
                diameter={element.diameter}
                onTake={this.takeInput}
              />
            ))}
          </ul>
        </section>
        <button onClick={this.countFlanges}>policz</button>
      </>
    );
  }
}

export default ElementList;
