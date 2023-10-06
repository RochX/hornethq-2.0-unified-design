import React from "react";
import { Outlet, Link } from "react-router-dom"

function Layout () {
    return (
        <div>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li>
                    <Link to="/academics">Academics</Link>
                    <ul>
                        <li><Link to="/academics/grades">Grades</Link></li>
                    </ul>
                </li>
            </ul>
            <Outlet />
        </div>
    );
}

export default Layout;