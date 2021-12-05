import React from 'react';
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <>
        {/* <!-- ======= Sidebar ======= --> */}
        <aside id="sidebar" className="sidebar">

            <ul className="sidebar-nav" id="sidebar-nav">

            <li className="nav-item">
                <Link to="/home-admin" className="nav-link collapsed">
                <i className="bi bi-grid"></i>
                <span>Dashboard</span>
                </Link>
            </li>
            {/* <!-- End Dashboard Nav --> */}

            <li className="nav-item">
                <Link to="/home-admin/my-profile" className="nav-link collapsed">
                <i class="bi bi-person-circle"></i>
                <span>Mi Perfil</span>
                </Link>
            </li>
            {/* <!-- End My Profile --> */}

            <li className="nav-item">
                <Link to="/home-admin/manage-users" className="nav-link collapsed">
                <i className="bi bi-pencil-fill"></i>
                <i className="bi bi-people-fill"></i>
                <span>Gestionar Usuarios</span>
                </Link>
            </li>
            {/* <!-- End Profile Page Nav --> */}

            <li className="nav-item">
                <Link to="/home-admin/create-predio" className="nav-link collapsed">
                <i className="bi bi-plus-circle-fill"></i>
                <i className="bi bi-building"></i>
                <span>Crear Predios</span>
                </Link>
            </li>
            {/* <!-- End F.A.Q Page Nav --> */}

            <li className="nav-item">
                <Link to="/home-admin/manage-predio" className="nav-link collapsed">
                <i className="bi bi-pencil-fill"></i>
                <i className="bi bi-building"></i>
                <span>Gestionar Predios</span>
                </Link>
            </li>
            {/* <!-- End Contact Page Nav --> */}

            </ul>

        </aside>
        {/* <!-- End Sidebar--> */}
        </>
    )
}

export default Sidebar;
