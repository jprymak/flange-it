import React from "react";
import ElementCreator from "./ElementCreator";
import ElementList from "./ElementList";


class EditableSection extends React.Component{
    render(){
        return(
            <>
            <ElementCreator/>
            <ElementList/>
            </>
        )
    }
}

export default EditableSection;