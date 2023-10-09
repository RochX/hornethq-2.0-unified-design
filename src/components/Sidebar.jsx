import React from "react";
import SidebarButton from "./sidebar/SidebarButton";

import "./sidebar/Sidebar.css"

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        {/* we assume images are in the `public` folder */}
        <SidebarButton path="/home" src="/home-icon.png" name="Home" />
        <SidebarButton path="/academics" src="/academics-icon.png" name="Academics" />
      </ul>
    </div>
  );
}

export default Sidebar;