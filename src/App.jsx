import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

import Home from "./pages/Home";
import Academics from "./pages/Academics";
import Grades from "./pages/Academics/Grades";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";

import "./App.css"

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <p>
          Hornet HQ 2.0 Unified Design Prototype
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <hr></hr> */}
      
      <Sidebar />
      <div className="main-page">
        <Topbar />
        <div className="content">
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="academics" element={<Academics />} />
              <Route path="/academics/grades" element={<Grades />} />
            </Route>
          </Routes>
        </div>
      </div>

    </div>
  );
}

export default App;
