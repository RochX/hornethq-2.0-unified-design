import React from "react";
import PageButton from "./PageButton";
import { Droppable } from "react-beautiful-dnd";

import "./PageButtonLayout.css"

import { nanoid } from 'nanoid'

function PageButtonLayout (props) {
  return (
    <Droppable droppableId={`droppable-id-${nanoid()}`}>
      {(provided) => (
      <div className={"page-button-layout"}
        // note use of ref and NOT innerRef
        ref={provided.innerRef} 
        {...provided.droppableProps}
      >
          {props.pageButtons}
          {provided.placeholder}
      </div>
      )}
    </Droppable>
  );
}

export default PageButtonLayout;