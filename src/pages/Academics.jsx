import React from "react";
import { Link } from "react-router-dom"

import PageButtonLayout from "./PageButtonLayout"

const PAGE_BUTTONS_CONTENT = [
  {title: "Grades", description: "View grades here.", icon: ""},
  {title: "Course Catalog", description: "View the course catalog", icon: ""},
  {title: "Student Planning", description: "View and register for upcoming classes.", icon: ""},
  {title: "Unofficial Transcript", description: "Download an unofficial transcript."}
]


function Academics() {
  return (
    <div className="academics">
      <h1>Academics Page</h1>
      <Link to="/academics/grades"> Go to Grades</Link>
      <PageButtonLayout pagebuttondata={PAGE_BUTTONS_CONTENT} />
    </div>
  );
}

export default Academics;