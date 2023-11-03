import React, { useState } from "react";
import "./Layout.css";
// import Carrousel from "./components/Carrousel";
import Sidebar from "./sidebar/Sidebar";
import Topbar from "./topbar/Topbar";
import { Outlet } from "react-router-dom";
// import Calendar from "./components/Calendar/Calendar";
import Breadcrumb from "./Breadcrumb"; // Assuming you have a Breadcrumb component
import { useLocation } from "react-router-dom";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
    <div className="container">
      <div className="sidebar"> 
        <Sidebar />
      </div>
        <div className="main">
            <Topbar />
          <div className="breadcrumb">
            <Breadcrumb />
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