import React from "react";
import { Link } from "react-router-dom";
import { Draggable } from "react-beautiful-dnd";
// PageButton should mimic the current Hornet HQ 2.0 button on the home page
// It has a title and description on what it where it goes
// It also has an icon within a grey circle. Create fallback text in case image is not present

function PageButton (props) {
  return (
    <Draggable key={props.id} draggableId={props.id} index={props.index}>
      {(provided) => (
        <div className="pagebutton" 
          {...provided.draggableProps} 
          {...provided.dragHandleProps}
          // note use of ref and NOT innerRef
          ref={provided.innerRef} 
        >
          <Link to={props.path}>
            <h3>{props.title}</h3>
            <span>{props.description}</span>
            <br />
          </Link>
        </div>
      )}
    </Draggable>
  );
}

export default PageButton;