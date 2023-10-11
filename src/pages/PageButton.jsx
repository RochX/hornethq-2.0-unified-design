import React from "react";
// PageButton should mimic the current Hornet HQ 2.0 button on the home page
// It has a title and description on what it where it goes
// It also has an icon within a grey circle. Create fallback text in case image is not present

function PageButton (props) {
  return (
    <div className="pagebutton">
      <h3>{props.title}</h3>
      <span>{props.description}</span>
    </div>
  );
}

export default PageButton;