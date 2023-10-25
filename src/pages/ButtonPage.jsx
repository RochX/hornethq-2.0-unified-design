import React from "react";

import PageButtonLayout from "../components/PageButtonLayout";

function Content(props) {
  return (
  <div className={props.className}>
    <h1>Welcome to the {props.className} page!</h1>
    <PageButtonLayout pagebuttondata={props.pageButtonData} />
  </div>
  )
}

export default Content;