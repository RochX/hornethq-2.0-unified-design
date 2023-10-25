import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"; // Import your sidebar styles
import SidebarButton from "./SidebarButton";
import { FaBars } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="hamburger" onClick={toggleSidebar}>
        <FaBars />
      </div>
      <ul>
        {/* we assume images are in the `public` folder */}
        <SidebarButton path="/home" src="/home-icon.png" name="Home" />
        <SidebarButton path="/academics" src="/academics-icon.png" name="Academics" />
      </ul>
    </div>
  );
};

export default Sidebar;