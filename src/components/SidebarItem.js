import React from 'react';
import { Link } from "react-router-dom";

function SidebarItem({ linkTo, icono, titulo }) {
    return (
        <>
            <Link to={linkTo} className="nav-link collapsed">
                <i className={icono}></i>
                <span>{titulo}</span>
            </Link>
        </>
    )
};

export default SidebarItem;
