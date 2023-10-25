import React, { useState } from "react";
import "./Layout.css";
// import Carrousel from "./components/Carrousel";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import { Outlet } from "react-router-dom";
// import Calendar from "./components/Calendar/Calendar";
import Breadcrumb from "./Breadcrumb"; // Assuming you have a Breadcrumb component
import { useLocation } from "react-router-dom";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

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
    <>
    <div className="container">
      <div className="sidebar"> 
        <Sidebar />
      </div>
        <div className="main">
            <Topbar />
          <div className="breadcrumb">
            <Breadcrumb paths={paths} />
          </div>
        {/* <div className="calendar-carousel">
          <div className="carousel-container">
            <Carrousel />
          </div>
          <div className="calendar">
            <Calendar /> */}
          <Outlet/> 
        </div>
      </div>
    </>
  );
};

export default Layout;