import React from "react";
import { Link } from "react-router-dom";
import "./Breadcrumb.css";

const Breadcrumb = ({ paths }) => {
  const linkStyle = {
    color: "blue", // Change this to your desired text color
    textDecoration: "none", // Remove the underline if you want
  };
  
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