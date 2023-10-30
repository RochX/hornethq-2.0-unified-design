import React from "react";

import "./PageButtonLayout.css"

function PageButtonLayout (props) {
  return (
    <div className="pagebutton-layout">
      {props.pageButtons}
    </div>
  );
}

export default PageButtonLayout;