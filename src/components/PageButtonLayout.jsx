import React from "react";
import PageButton from "./PageButton";

import "./PageButtonLayout.css"

function PageButtonLayout (props) {
  const PAGE_BUTTONS = props.pagebuttondata.map((button) =>
    <PageButton 
      title={button.title}
      description={button.description}
      icon={button.icon}
    />
  )

  return (
    <div className="page-button-layout">
      {PAGE_BUTTONS}
    </div>
  );
}

export default PageButtonLayout;