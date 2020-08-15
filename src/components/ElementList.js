import React from "react";
import ElementCreator from "./ElementCreator";
import Element from "./Element";
import { v4 as uuidv4 } from "uuid";

class ElementList extends React.Component {
  state = {
    elements: [
      { id: uuidv4(), name: "Strainer", diameter: "DN 40", quantity: 1 },
      {
        id: uuidv4(),
        name: "Butterfly valve",
        diameter: "DN 32",
        quantity: 1,
      },
      { id: uuidv4(), name: "Check valve", diameter: "DN 50", quantity: 1 },
    ],
    flanges: {},
    hasAlreadyBeenPicked: false,
  };

  countFlanges(elements) {
    const flanges = elements.reduce(function (obj, item) {
      if (!obj[item.diameter]) {
        obj[item.diameter] = 0;
      }
      obj[item.diameter] += item.quantity * 2;
      return obj;
    }, {});

    this.state.flanges = Object.keys(flanges).map((key) => [key, flanges[key]]);
    
    this.props.parentCallback(this.state.flanges);
  }

  addElement = (addedElement) => {
    let notOnList;
    this.setState((prevState) => {
      notOnList = prevState.elements.every(
        (element) =>
          element.name !== addedElement.name ||
          element.diameter !== addedElement.diameter
      );
      if (notOnList) {
        this.setState({ hasAlreadyBeenPicked: false });
        const elements = [...prevState.elements, addedElement];
        this.countFlanges(elements);
        return { elements };
      } else {
        this.setState({ hasAlreadyBeenPicked: true });
        const elements = [...prevState.elements];
        this.countFlanges(elements);
        return { elements };
      }
    });
  };

  handleUpdate = (indexToUpdate, updatedElement) => {
    this.setState((prevState) => {
      const elements = prevState.elements.map((element, index) =>
        index === indexToUpdate ? updatedElement : element
      );
      this.countFlanges(elements);
      return { elements };
    });
  };

  handleCreate = (createdElement) => {
    this.addElement(createdElement);
  };

  render() {
    return (
      <>
        <ElementCreator
          hasAlreadyBeenPicked={this.state.hasAlreadyBeenPicked}
          elements={this.state.elements}
          onCreate={this.handleCreate}
        />
        <section className="ElementList">
          <h2>Element List</h2>
          <hr></hr>
          <ul>
            {this.state.elements.map((element, index) => (
              <Element
                onChange={(event) => {
                  this.handleUpdate(index, {
                    ...element,
                    quantity: event.target.value,
                  });
                }}
                key={element.id}
                name={element.name}
                diameter={element.diameter}
              />
            ))}
          </ul>
        </section>
      </>
    );
  }
}

export default ElementList;
