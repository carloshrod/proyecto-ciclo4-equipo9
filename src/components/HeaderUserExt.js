import jwtDecode from 'jwt-decode';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function HeaderUserExt() {

    const token = localStorage.getItem("token");
    const payload = jwtDecode(token);

    function logout() {
        localStorage.removeItem("token");
        window.location.href = "/login";
    }

    return (
        <>
            {/* <!-- ======= Header ======= --> */}
            <header id="header" className="header d-flex align-items-center">

                <div className="d-flex align-items-center justify-content-between m-2">
                        <img src="/img/logo-gov-co.png" alt="" />
                </div> {/*!-- End Logo -->*/}

                <NavLink to="/user-ext-home" className={({ isActive }) => `nav-home-ue d-none d-lg-block ${isActive ? "active" : ""}`}>
                    <div className="d-inline-flex m-3 align-items-center justify-content-between ">
                        <span>Inicio</span>
                    </div>
                </NavLink>

                <NavLink to="/user-ext/asociar-predios" className={({ isActive }) => `nav-home-ue d-none d-lg-block ${isActive ? "active" : ""}`}>
                    <div className="d-inline-flex m-3 align-items-center justify-content-between ">
                        <span>Asociar predios</span>
                    </div>
                </NavLink>

                <NavLink to="/user-ext/pagar" className={({ isActive }) => `nav-home-ue d-none d-lg-block ${isActive ? "active" : ""}`}>
                    <div className="d-inline-flex m-3 align-items-center justify-content-between ">
                        <span>Pagar predial</span>
                    </div>
                </NavLink>

                <NavLink to="/user-ext/convenio" className={({ isActive }) => `nav-home-ue d-none d-lg-block ${isActive ? "active" : ""}`}>
                    <div className="d-inline-flex m-3 align-items-center justify-content-between ">
                        <span>Convenio de pago</span>
                    </div>
                </NavLink>

                <nav className="header-nav ms-auto">
                    <ul className="d-flex align-items-center">

                        <li className="nav-item dropdown pe-3">

                            <Link className="nav-link nav-profile d-flex align-items-center pe-0" to="" data-bs-toggle="dropdown">
                                <img src="/img/profile-img.jpg" alt="Profile" className="rounded-circle" />
                                <span className="nav-home-ue d-none d-md-block dropdown-toggle ps-2">{payload.nombre}</span>
                            </Link>
                            {/* End Profile Image Icon */}

                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                <li>
                                    <Link to="/user-ext/my-profile">
                                        <div className="dropdown-item dditem-hov d-flex align-items-center">
                                            <span className="m-auto">
                                                <i className="bi bi-person" />
                                                Mi Perfil
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li>
                                    <div className="dropdown-item d-flex align-items-center">
                                        <button className="btn btn-100 btn-light btn-primary dditem-hov" type="button" onClick={logout}>
                                            <i className="bi bi-box-arrow-right" />
                                            Cerrar Sesión
                                        </button>
                                    </div>
                                </li>

                            </ul>
                            {/* End Profile Dropdown Items */}
                        </li>
                        {/* End Profile Nav */}

                    </ul>
                </nav>
                {/* End Icons Navigation */}

            </header>
            {/* End Header      */}
        </>
    )
}

export default HeaderUserExt;
