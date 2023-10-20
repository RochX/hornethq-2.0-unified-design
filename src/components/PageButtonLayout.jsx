import React from "react";
import PageButton from "./PageButton";
import { Droppable } from "react-beautiful-dnd";

import "./PageButtonLayout.css"

import { nanoid } from 'nanoid'

function PageButtonLayout (props) {
  const PAGE_BUTTONS = props.pagebuttondata.map((button, index) =>
    <PageButton 
      id={`pagebutton-${index}`}
      key={`pagebutton-${index}`}
      index={index}
      title={button.title}
      description={button.description}
      icon={button.icon}
      path={button.path}
    />
  )

  return (
    <Droppable droppableId={`droppable-id-${nanoid()}`}>
      {(provided) => (
      <div className={"page-button-layout"}
        // note use of ref and NOT innerRef
        ref={provided.innerRef} 
        {...provided.droppableProps}
      >
          {PAGE_BUTTONS}
          {provided.placeholder}
      </div>
      )}
    </Droppable>
  );
}

export default PageButtonLayout;