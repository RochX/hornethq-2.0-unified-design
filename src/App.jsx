import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import BreadCrumbNav from "./components/BreadCrumbNav";
import MainNavLayout from "./components/MainNav/MainNavLayout";
import Grades from "./pages/Academics/Grades";
import Billing from "./pages/FinInfo/Billing";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";

import "./App.css"

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-page">
        <Topbar />
        <div className="content">
          <BreadCrumbNav />
            <Routes>
              <Route path="/">
                <Route index element={<Navigate to="/home" />} />
                <Route path="home" element={<MainNavLayout id="home" />} />
                <Route path="academics" element={<MainNavLayout id="academics" />} />
                <Route path="/academics/grades" element={<Grades />} />
                <Route path="employee" element={<MainNavLayout id="employee" />} />
                <Route path="financial" element={<MainNavLayout id="financial" />} />
                <Route path="/financial/billing" element={<Billing />} />
              </Route>
            </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
