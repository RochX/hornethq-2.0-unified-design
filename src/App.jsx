import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

import Home from "./pages/Home";
import Academics from "./pages/Academics";
import Grades from "./pages/Academics/Grades";
import "./App.css"
import Layout from "./Layout";

function App() {
  return (
    <div className="App">
      <div className="main-page">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="academics" element={<Academics />} />
              <Route path="/academics/grades" element={<Grades />} />
            </Route>
          </Routes>
        </div>
        </div>
  );
}

export default App;
