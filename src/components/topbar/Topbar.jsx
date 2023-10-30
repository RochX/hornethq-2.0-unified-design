import React from "react";
import "./Topbar.css"

function Topbar() {

  return (
    <div className="topbar">
      < img path="/home" src="/Hornet HQ.png" alt="Hornet HQ Icon" className="topbar-image" />
       <div className="topbar-ribbon">{/* create top bar ribbon */}</div>
    </div>
  );
}

export default Topbar;