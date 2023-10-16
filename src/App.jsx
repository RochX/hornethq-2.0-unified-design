import React from "react";
import { Routes, Route, Outlet, Link, useLocation } from "react-router-dom";
import { nanoid } from "nanoid";

import Home from "./pages/Home";
import Academics from "./pages/Academics";
import Grades from "./pages/Academics/Grades";
import Employee from "./pages/Employee";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";

import "./App.css"

function App() {
  // slice to remove the starting '/'
  const locationArray = useLocation().pathname.slice(1).split("/");

  let pathnameArray = []
  for (let i = 0; i < locationArray.length; i++) {
    if (i === 0) {
      pathnameArray.push("/" + locationArray[i]);
    }
    else {
      pathnameArray.push(pathnameArray[i-1] + "/" + locationArray[i]);
    }
  }
  // add home path to beginning if not already present
  if (pathnameArray[0] !== "/home") {
    pathnameArray.splice(0, 0, "/home");
  }
  // map all path elements into navigation links
  const navButtons = pathnameArray.map((pathname, index) =>
      <span>{(index ? ' > ' : '')} <Link to={pathname} key={`nav-path-${index}`}>{pathname}</Link></span>
  );

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
          {navButtons}
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="academics" element={<Academics />} />
              <Route path="/academics/grades" element={<Grades />} />
              <Route path="employee" element={<Employee />} />
            </Route>
          </Routes>
        </div>
      </div>

    </div>
  );
}

export default App;
