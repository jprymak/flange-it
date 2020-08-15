import React from "react";
import ElementCreator from "./ElementCreator";
import Element from "./Element";
import { v4 as uuidv4 } from "uuid";

class ElementList extends React.Component {
  state = {
    elements: [
      { id: uuidv4(), name: "Strainer", diameter: "DN 40", quantity: "1" },
      {
        id: uuidv4(),
        name: "Butterfly valve",
        diameter: "DN 32",
        quantity: "1",
      },
      { id: uuidv4(), name: "Check valve", diameter: "DN 50", quantity: "1" },
    ],
    flanges: [],
    hasAlreadyBeenPicked: false,
  };

  //  hasBeenPickedCheck(boolean){
  //     if(boolean){
  //       this.setState({hasAlreadyBeenPicked:false})
  //     }
  //     else{
  //       this.setState({hasAlreadyBeenPicked:true})
  //     }
  //   }

  calculateFlanges = () => {
    let flanges = this.state.elements
      .reduce(function (obj, item) {
        if (!obj[item.diameter]) {
          obj[item.diameter] = 0;
        }
        obj[item.diameter]+=2;
        return obj;
      }, {})
    // flanges = Object.keys(flanges).map((key) => [key, flanges[key]]);
    // flanges = flanges.map(element=>element.[1]*2)
    //  flanges= flanges.map(index=>element*2)
      // console.log(flanges["DN 40"]*2)
      console.log(flanges)
    this.setState({ flanges: flanges });
  };

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
        return { elements };
      } else {
        this.setState({ hasAlreadyBeenPicked: true });
        const elements = [...prevState.elements];
        return { elements };
      }
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

  countFlanges = () => {
    console.log(this.state.flanges);
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
        <button onClick={this.calculateFlanges}>policz</button>
        <button onClick={this.countFlanges}>sprawdz</button>
      </>
    );
  }
}

export default ElementList;
