import React from 'react';
import { NavLink } from "react-router-dom";

function SidebarItem({ linkTo, icono, titulo }) {
    return (
        <>
            <div className="">
                <NavLink exact to={linkTo} className={({ isActive }) => `sidebar-nav nav-link collapsed ${isActive ? "active" : "inactive"}`}>
                    <i className={icono}></i>
                    <span>{titulo}</span>
                </NavLink>
            </div>
        </>
    )
};

export default SidebarItem;
