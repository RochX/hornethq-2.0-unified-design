import React from "react";
import { Link } from "react-router-dom";

function SidebarButton(props) {
    console.log(props)
    return (
        <div className="sidebarbutton">
            <Link to={props.path}>
                <img className="sidebarbutton-photo" src={props.src} alt={props.name} />
            </Link>
        </div>
    );
}

export default SidebarButton