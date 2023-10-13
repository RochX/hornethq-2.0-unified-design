import React from "react";

import PageButtonLayout from "../components/PageButtonLayout"

const PAGE_BUTTONS_CONTENT = [
  {title: "Billing", description: "Here you can view your latest statement and make a payment online."},
  {title: "Financial Aid", description: "Here you can access financial aid data, forms, etc."},
  {title: "Tax Information", description: "Here you can change your consent for e-delivery of tax information."},
  {title: "Employee", description: "Here you can view your tax form consents, earnings statements, banking information, timecards, and leave balances."},
  {title: "Student Planning", description: "Here you can search for courses, plan your terms, and schedule & register your course sections."},
  {title: "Course Catalog", description: "Here you can view and search the course catalog."},
  {title: "Grades", description: "Here you can view your grades by term."}
]

function Home() {
  return (
    <div className="home">
      <h1>Hello Student, welcome to Hornet HQ 2.0!</h1>
      <h3>Navigate to where you need to go with either the buttons below or on the sidebar.</h3>
      <PageButtonLayout pagebuttondata={PAGE_BUTTONS_CONTENT} />
    </div>
  );
}

export default Home;