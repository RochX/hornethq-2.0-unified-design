import React from "react";
import { Link } from "react-router-dom"

function Academics() {
    return (
        <div className="academics">
            <h1>Academics Page</h1>
            <Link to="/academics/grades"> Go to Grades</Link>
        </div>
    );
}

export default Academics;