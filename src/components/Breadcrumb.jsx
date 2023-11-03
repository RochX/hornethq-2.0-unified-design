import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Breadcrumb.css";

const Breadcrumb = () => {
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
    <div className="breadcrumb">
      {paths.map((path, index) => (
        <span key={index}>
          <Link to={path.url}>{path.label}</Link>
          {index < paths.length - 1 && <span> { '>'} </span>}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;