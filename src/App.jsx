import React from "react";
import { Routes, Route, Navigate, Link, useLocation } from "react-router-dom";
import { DragDropContext } from "react-beautiful-dnd";

import ButtonPage from "./pages/ButtonPage";
import Grades from "./pages/Academics/Grades";
import Billing from "./pages/FinInfo/Billing";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";

import "./App.css"

const HOME_PAGE_BUTTONS_CONTENT = [
  {title: "Academics", description: "Go to academics page.", path: "/academics"},
  // {title: "Billing", description: "Here you can view your latest statement and make a payment online."},
  {title: "Financial Information", description: "Here you can access billing, financial aid data, forms, etc.", path: "/financial"},
  // {title: "Tax Information", description: "Here you can change your consent for e-delivery of tax information."},
  {title: "Employee", description: "Here you can view your tax form consents, earnings statements, banking information, timecards, and leave balances.", path: "/employee"},
  {title: "Student Planning", description: "Here you can search for courses, plan your terms, and schedule & register your course sections."},
  {title: "Course Catalog", description: "Here you can view and search the course catalog."},
  {title: "Grades", description: "Here you can view your grades by term.", path: "/academics/grades"}
]

const ACADEMICS_PAGE_BUTTONS_CONTENT = [
  {title: "Grades", description: "View grades here.", icon: "", path: "/academics/grades"},
  {title: "Course Catalog", description: "View the course catalog", icon: ""},
  {title: "Student Planning", description: "View and register for upcoming classes.", icon: ""},
  {title: "Unofficial Transcript", description: "Download an unofficial transcript."}
]

const FININFO_PAGE_BUTTONS_CONTENT = [
  {title: "Billing", description: "Here you can view your latest statement and make a payment online.", path: "/financial/billing"},
  {title: "Financial Aid", description: "Here you can access financial aid data, forms, etc."},
  {title: "Tax Information", description: "Here you can change your consent for e-delivery of tax information."}
]

const EMPLOYEE_PAGE_BUTTONS_CONTENT = [
  {title: "Tax Information", description: "Here you can change your consent for e-delivery of tax information."},
  {title: "Time Entry", description: "Here you can fill out your timecards."},
  {title: "Earnings Statements", description: "Here you can view your earnings statement history."},
  {title: "Time History", description: "Here you can view your paid timecards."},
  {title: "Time History", description: "Here you can view paid timecards for the people you supervise."}
]

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
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    console.log(result)

    // PROBLEM: I now need to keep the current list of page buttons at the top level in order to use them within this function...
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
                <Route path="home" element={<ButtonPage className="home" pageButtonData={HOME_PAGE_BUTTONS_CONTENT} />} />
                <Route path="academics" element={<ButtonPage className="academics" pageButtonData={ACADEMICS_PAGE_BUTTONS_CONTENT} />} />
                <Route path="/academics/grades" element={<Grades />} />
                <Route path="employee" element={<ButtonPage className="employee" pageButtonData={EMPLOYEE_PAGE_BUTTONS_CONTENT} />} />
                <Route path="financial" element={<ButtonPage className="financial" pageButtonData={FININFO_PAGE_BUTTONS_CONTENT} />} />
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
