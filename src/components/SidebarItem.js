import React from 'react';
import { NavLink } from "react-router-dom";

function SidebarItem({ linkTo, icono, titulo }) {
    return (
        <>
            <div className="">
                <NavLink to={linkTo} className={({ isActive }) => `sidebar-nav nav-link collapsed p-3 ${isActive ? "active" : ""}`}>
                    <i className={icono}></i>
                    <span>{titulo}</span>
                </NavLink>
            </div>
        </>
    )
};

export default SidebarItem;
