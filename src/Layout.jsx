import React, { useState } from "react";
import "./Layout.css";
// import Carrousel from "./components/Carrousel";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import { Outlet } from "react-router-dom";
// import Calendar from "./components/Calendar/Calendar";

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
      <div>
        <div className="main"> 
        <Topbar />
        </div>
        {/* <div className="calendar-carousel">
          <div className="carousel-container">
            <Carrousel />
          </div>
          <div className="calendar">
            <Calendar /> */}
        <div className="outlet"><Outlet/> </div>
      </div>
    </div>
    </>
  );
};

export default Layout;