import React from "react";
import ElementCreator from "./ElementCreator";
import Element from "./Element";
import { v4 as uuidv4 } from "uuid";
import { FlangePN16, ButterflyValvePN16, CheckValvePN16 } from "../data.js";

class ElementList extends React.Component {
  state = {
    elements: [
      { id: uuidv4(), name: "Strainer", DN: "40", quantity: 1 },
      {
        id: uuidv4(),
        name: "Butterfly valve",
        DN: "32",
        quantity: 1,
      },
      { id: uuidv4(), name: "Check valve", DN: "50", quantity: 1 },
    ],
    flanges: {},
    bolts: [],
    hasAlreadyBeenPicked: false,
  };

  countFlanges(elements) {
    const flanges = elements.reduce(function (obj, item) {
      if (!obj[item.DN]) {
        obj[item.DN] = 0;
      }
      obj[item.DN] += item.quantity * 2;
      return obj;
    }, {});

    this.props.getFlanges(
      Object.keys(flanges).map((key) => [key, flanges[key]])
    );
  }

  countBolts(elements) {
    let bolts = [];
    elements.forEach((element) => {
      if (element.name === "Butterfly valve") {
        ButterflyValvePN16.forEach((data) => {
          if (element.DN === data.DN) {
            switch (element.DN) {
              case "32":
                bolts.push({
                  size: data.size,
                  length: data.length,
                  quantity: data.quantity * element.quantity,
                });
                break;
              case "40":
                bolts.push({
                  size: data.size,
                  length: data.length,
                  quantity: data.quantity * element.quantity,
                });
                break;
              case "50":
                bolts.push({
                  size: data.size,
                  length: data.length,
                  quantity: data.quantity * element.quantity,
                });
                break;
              case "65":
                bolts.push({
                  size: data.size,
                  length: data.length,
                  quantity: data.quantity * element.quantity,
                });
                break;
              case "80":
                bolts.push({
                  size: data.size,
                  length: data.length,
                  quantity: data.quantity * element.quantity,
                });
                break;
              case "100":
                bolts.push({
                  size: data.size,
                  length: data.length,
                  quantity: data.quantity * element.quantity,
                });
                break;
              case "125":
                bolts.push({
                  size: data.size,
                  length: data.length,
                  quantity: data.quantity * element.quantity,
                });
                break;
              case "150":
                bolts.push({
                  size: data.size,
                  length: data.length,
                  quantity: data.quantity * element.quantity,
                });
                break;
              case "200":
                bolts.push({
                  size: data.size,
                  length: data.length,
                  quantity: data.quantity * element.quantity,
                });
                break;
              case "250":
                bolts.push({
                  size: data.size,
                  length: data.length,
                  quantity: data.quantity * element.quantity,
                });
                break;
            }
          }
        });
      }
      if (element.name === "Strainer") {
        FlangePN16.forEach((data) => {
          if (element.DN === data.DN) {
            switch (element.DN) {
              case "32":
                bolts.push({
                  size: data.size,
                  length: data.length,
                  quantity: data.quantity * element.quantity,
                });
                break;
              case "40":
                bolts.push({
                  size: data.size,
                  length: data.length,
                  quantity: data.quantity * element.quantity,
                });
                break;
              case "50":
                bolts.push({
                  size: data.size,
                  length: data.length,
                  quantity: data.quantity * element.quantity,
                });
                break;
              case "65":
                bolts.push({
                  size: data.size,
                  length: data.length,
                  quantity: data.quantity * element.quantity,
                });
                break;
              case "80":
                bolts.push({
                  size: data.size,
                  length: data.length,
                  quantity: data.quantity * element.quantity,
                });
                break;
              case "100":
                bolts.push({
                  size: data.size,
                  length: data.length,
                  quantity: data.quantity * element.quantity,
                });
                break;
              case "125":
                bolts.push({
                  size: data.size,
                  length: data.length,
                  quantity: data.quantity * element.quantity,
                });
                break;
              case "150":
                bolts.push({
                  size: data.size,
                  length: data.length,
                  quantity: data.quantity * element.quantity,
                });
                break;
              case "200":
                bolts.push({
                  size: data.size,
                  length: data.length,
                  quantity: data.quantity * element.quantity,
                });
                break;
              case "250":
                bolts.push({
                  size: data.size,
                  length: data.length,
                  quantity: data.quantity * element.quantity,
                });
                break;
            }
          }
        });
      }
      if (element.name === "Check valve") {
        CheckValvePN16.forEach((data) => {
          if (element.DN === data.DN) {
            switch (element.DN) {
              case "32":
                bolts.push({
                  
                  size: data.size,
                  length: data.length,
                  quantity: data.quantity * element.quantity,
                });
                break;
              case "40":
                bolts.push({
                  size: data.size,
                  length: data.length,
                  quantity: data.quantity * element.quantity,
                });
                break;
              case "50":
                bolts.push({
                  size: data.size,
                  length: data.length,
                  quantity: data.quantity * element.quantity,
                });
                break;
              case "65":
                bolts.push({
                  size: data.size,
                  length: data.length,
                  quantity: data.quantity * element.quantity,
                });
                break;
              case "80":
                bolts.push({
                  size: data.size,
                  length: data.length,
                  quantity: data.quantity * element.quantity,
                });
                break;
              case "100":
                bolts.push({
                  size: data.size,
                  length: data.length,
                  quantity: data.quantity * element.quantity,
                });
                break;
              case "125":
                bolts.push({
                  size: data.size,
                  length: data.length,
                  quantity: data.quantity * element.quantity,
                });
                break;
              case "150":
                bolts.push({
                  size: data.size,
                  length: data.length,
                  quantity: data.quantity * element.quantity,
                });
                break;
              case "200":
                bolts.push({
                  size: data.size,
                  length: data.length,
                  quantity: data.quantity * element.quantity,
                });
                break;
              case "250":
                bolts.push({
                  size: data.size,
                  length: data.length,
                  quantity: data.quantity * element.quantity,
                });
                break;
            }
          }
        });
      }
    });

    console.log(bolts);
    this.props.getBolts(bolts);
  }

  addElement = (addedElement) => {
    let notOnList;
    this.setState((prevState) => {
      notOnList = prevState.elements.every(
        (element) =>
          element.name !== addedElement.name || element.DN !== addedElement.DN
      );
      if (notOnList) {
        this.setState({ hasAlreadyBeenPicked: false });
        const elements = [...prevState.elements, addedElement];
        this.countFlanges(elements);
        this.countBolts(elements);
        return { elements };
      } else {
        this.setState({ hasAlreadyBeenPicked: true });
        const elements = [...prevState.elements];
        this.countFlanges(elements);
        this.countBolts(elements);
        return { elements };
      }
    });
  };

  handleDelete = (indexToRemove) => {
    this.setState((prevState) => {
      const elements = prevState.elements.filter(
        (element, index) => index !== indexToRemove
      );
      this.countFlanges(elements);
      this.countBolts(elements);
      return { elements };
    });
  };

  handleUpdate = (indexToUpdate, updatedElement) => {
    this.setState((prevState) => {
      const elements = prevState.elements.map((element, index) =>
        index === indexToUpdate ? updatedElement : element
      );
      this.countFlanges(elements);
      this.countBolts(elements);
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
                onDelete={() => this.handleDelete(index)}
                key={element.id}
                name={element.name}
                DN={element.DN}
              />
            ))}
          </ul>
        </section>
      </>
    );
  }
}

export default ElementList;
