import React from "react";
import PageButtonLayout from "../components/PageButtonLayout";

const PAGE_BUTTONS_CONTENT = [
  {title: "Billing", description: "Here you can view your latest statement and make a payment online.", path: "/financial/billing"},
  {title: "Financial Aid", description: "Here you can access financial aid data, forms, etc."},
  {title: "Tax Information", description: "Here you can change your consent for e-delivery of tax information."}
]

function FinInfo() {
  return (
    <div className="fin-info">
      <h1>Welcome to the Financial Information Page!</h1>
      <PageButtonLayout pagebuttondata={PAGE_BUTTONS_CONTENT} />
    </div>
  );
}

export default FinInfo;