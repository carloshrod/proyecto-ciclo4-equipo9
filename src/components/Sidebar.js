import React from 'react';

function Sidebar() {
    return (
        <>
        {/* <!-- ======= Sidebar ======= --> */}
        <aside id="sidebar" className="sidebar">

            <ul className="sidebar-nav" id="sidebar-nav">

            <li className="nav-item">
                <a className="nav-link " href="/home_admin">
                <i className="bi bi-grid"></i>
                <span>Dashboard</span>
                </a>
            </li>
            {/* <!-- End Dashboard Nav --> */}

            <li className="nav-item">
                <a className="nav-link collapsed" href="/home_admin/manage_users">
                <i className="bi bi-pencil-fill"></i>
                <i className="bi bi-people-fill"></i>
                <span>Gestionar Usuarios</span>
                </a>
            </li>
            {/* <!-- End Profile Page Nav --> */}

            <li className="nav-item">
                <a className="nav-link collapsed" href="pages-faq.html">
                <i className="bi bi-plus-circle-fill"></i>
                <i className="bi bi-building"></i>
                <span>Crear Predios</span>
                </a>
            </li>
            {/* <!-- End F.A.Q Page Nav --> */}

            <li className="nav-item">
                <a className="nav-link collapsed" href="pages-contact.html">
                <i className="bi bi-pencil-fill"></i>
                <i className="bi bi-building"></i>
                <span>Gestionar Predios</span>
                </a>
            </li>
            {/* <!-- End Contact Page Nav --> */}

            </ul>

        </aside>
        {/* <!-- End Sidebar--> */}
        </>
    )
}

export default Sidebar;
