import React from "react";

import "./Topbar.css"

function Topbar() {
  return (
    <div className="topbar">
      <img path="/hornethq-icon.png" alt="Hornet HQ Icon" />
      <div className="topbar-ribbon">{/* create top bar ribbon */}</div>
    </div>
  );
}

export default Topbar;