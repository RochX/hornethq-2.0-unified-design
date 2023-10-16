import React from "react";

import PageButtonLayout from "../components/PageButtonLayout";

const PAGE_BUTTONS_CONTENT = [
  {title: "Tax Information", description: "Here you can change your consent for e-delivery of tax information."},
  {title: "Time Entry", description: "Here you can fill out your timecards."},
  {title: "Earnings Statements", description: "Here you can view your earnings statement history."},
  {title: "Time History", description: "Here you can view your paid timecards."},
  {title: "Time History", description: "Here you can view paid timecards for the people you supervise."}
]

function Employee() {
  return (
    <div className="employee">
      <h1>Welcome to Hornet HQ 2.0 Employee Self-Service!</h1>
      <PageButtonLayout pagebuttondata={PAGE_BUTTONS_CONTENT} />
    </div>
  );
}

export default Employee;