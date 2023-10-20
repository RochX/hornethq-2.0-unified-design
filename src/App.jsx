import React from "react";
import { Routes, Route, Navigate, Link, useLocation } from "react-router-dom";
import { DragDropContext } from "react-beautiful-dnd";

import Home from "./pages/Home";
import Academics from "./pages/Academics";
import Grades from "./pages/Academics/Grades";
import Employee from "./pages/Employee";
import FinInfo from "./pages/FinInfo";
import Billing from "./pages/FinInfo/Billing";
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
    { if (index !== pathnameArray.length-1)
        return <span>{(index ? ' > ' : '')} <Link to={pathname} key={`nav-path-${index}`}>{pathname.slice(pathname.lastIndexOf("/")+1)}</Link></span>
      else 
        return (index ? ' > ' : '') + pathname.slice(pathname.lastIndexOf("/")+1)
    }
  );

  const onDragEnd = (result) => {
    // TODO: reorder list
  }

  return (
    <div className="App">
      <Sidebar />
      <div className="main-page">
        <Topbar />
        <div className="content">
          {navButtons}
          <DragDropContext onDragEnd={onDragEnd}>
            <Routes>
              <Route path="/">
                <Route index element={<Navigate to="/home" />} />
                <Route path="home" element={<Home />} />
                <Route path="academics" element={<Academics />} />
                <Route path="/academics/grades" element={<Grades />} />
                <Route path="employee" element={<Employee />} />
                <Route path="financial" element={<FinInfo />} />
                <Route path="/financial/billing" element={<Billing />} />
              </Route>
            </Routes>
          </DragDropContext>
        </div>
      </div>

    </div>
  );
}

export default App;
