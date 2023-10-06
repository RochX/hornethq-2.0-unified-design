import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

import Home from "./pages/Home";
import Academics from "./pages/Academics"
import Grades from "./pages/Academics/Grades"
import Layout from "./pages/Layout";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
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

      <hr></hr>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="home" element={<Home />}/>
          <Route path="academics" element={<Academics />}>
            {/* TODO: make Grade render when within "/academics/grades" */}
          </Route>
          <Route path="/academics/grades" element={<Grades />} /> 
          
        </Route>
      </Routes>

    </div>
  );
}

export default App;
