import React from "react";
import ElementCreator from "./ElementCreator";
import ElementList from "./ElementList";
import { v4 as uuidv4 } from 'uuid';

class EditableSection extends React.Component{

    state = {
        elements: [
            {id: uuidv4(), name: "valve", diameter: "DN 65" },
            {id: uuidv4(), name: "valve", diameter: "DN 65" },
            {id: uuidv4(), name: "valve", diameter: "DN 65" },
        ]
      }

      addElement = (addedElement) =>{
          this.setState(prevState => {
              const elements = [...prevState.elements, addedElement]
              return {elements};
          })
      }

      

      handleCreate = (createdElement) =>{
            this.addElement(createdElement)
      }
    

    render(){
        return(
            <>
            <ElementCreator onCreate={this.handleCreate}/>
            <ElementList elements={this.state.elements}/>
            </>
        )
    }
}

export default EditableSection;