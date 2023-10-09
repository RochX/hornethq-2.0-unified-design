import React from "react";
import { Outlet, Link } from "react-router-dom";

function Sidebar() {
    return (
        <div className="sidebar">
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li>
                    <Link to="/academics">Academics</Link>
                    <ul>
                        <li><Link to="/academics/grades">Grades</Link></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;