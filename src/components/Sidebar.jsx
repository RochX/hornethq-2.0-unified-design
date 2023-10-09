import React from "react";
import { Outlet, Link } from "react-router-dom";
import SidebarButton from "./sidebar/SidebarButton";

import "./sidebar/Sidebar.css"

// import link image icons
import HomeIcon from "./sidebar/home-icon.png"
import AcademicsIcon from "./sidebar/academics-icon.png"

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <SidebarButton path="/home" src={HomeIcon} name="Home" />
        <SidebarButton path="/academics" src={AcademicsIcon} name="Academics" />
      </ul>
    </div>
  );
}

export default Sidebar;