import React from "react";
import "./Topbar.css"
import Breadcrumb from "../Breadcrumb"; // Assuming you have a Breadcrumb component
import { useLocation } from "react-router-dom";

function Topbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  // Parse the current path and create breadcrumb paths
  const paths = currentPath
    .split("/")
    .filter((path) => path)
    .map((path, index, array) => {
      const url = `/${array.slice(0, index + 1).join("/")}`;
      return { url, label: path.charAt(0).toUpperCase() + path.slice(1) }; // Capitalize the first letter
    });

  return (
    <div className="topbar">
       <img path="/hornethq-icon.png" alt="Hornet HQ Icon" /> 
      <Breadcrumb paths={paths} />
      <div className="topbar-ribbon">{/* create top bar ribbon */}</div>
    </div>
  );
}

export default Topbar;