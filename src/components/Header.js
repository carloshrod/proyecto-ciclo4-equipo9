import jwtDecode from 'jwt-decode';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { auth } from '../auth/auth';
import { logout } from '../auth/logout';

function Header() {

    const tokenIsOk = () => {
        const token = localStorage.getItem("token");
        if (token) {
            const payload = jwtDecode(token);
            return payload;
        }
    }

    const payload = tokenIsOk();

    return (
        <>
            <header id="header" className="header d-flex align-items-center">

                {auth() && payload.rol === 3 ?
                    <>
                        <a href="https://www.gov.co/home/" target="_blank" rel="noreferrer" className="d-flex d-none d-lg-block align-items-center justify-content-between me-3">
                            <img className="img-fluid" src="/img/logo-gov-co.png" alt="" />
                        </a >

                        <NavLink to="/user-ext-home" className={({ isActive }) => `d-flex nav-home-ue ${isActive ? "active" : ""}`}>
                            <div className="d-inline-flex m-3 align-items-center justify-content-between ">
                                <span style={{ fontSize: "16px" }}>Inicio</span>
                            </div>
                        </NavLink>

                        <NavLink to="/user-ext/asociar-predios" className={({ isActive }) => `nav-home-ue d-none d-md-block ${isActive ? "active" : ""}`}>
                            <div className="d-inline-flex m-3 align-items-center justify-content-between ">
                                <span style={{ fontSize: "16px" }}>Asociar Predios</span>
                            </div>
                        </NavLink>

                        <NavLink to="/user-ext/pagar" className={({ isActive }) => `nav-home-ue d-none d-md-block ${isActive ? "active" : ""}`}>
                            <div className="d-inline-flex m-3 align-items-center justify-content-between ">
                                <span style={{ fontSize: "16px" }}>Pagar Impuesto</span>
                            </div>
                        </NavLink>

                        <NavLink to="/user-ext/convenio" className={({ isActive }) => `nav-home-ue d-none d-md-block ${isActive ? "active" : ""}`}>
                            <div className="d-inline-flex m-3 align-items-center justify-content-between ">
                                <span style={{ fontSize: "16px" }}>Convenios</span>
                            </div>
                        </NavLink>

                        <nav className="header-nav ms-auto">
                            <ul className="d-flex align-items-center">
                                <li className="nav-item dropdown pe-3">
                                    <Link className="nav-link nav-profile d-flex align-items-center pe-0" to="" data-bs-toggle="dropdown">
                                        <img src="/img/profile-img.jpg" alt="Profile" className="rounded-circle" />
                                        <span className="nav-home-ue dropdown-toggle ps-2">{payload.nombre}</span>
                                    </Link>

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
                                                <button className="btn btn-100 btn-light btn-primary dditem-hov" type="button" onClick={() => logout()}>
                                                    <i className="bi bi-box-arrow-right" />
                                                    Cerrar Sesión
                                                </button>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </>
                    :
                    <>
                        <a href="https://www.gov.co/home/" target="_blank" rel="noreferrer" className="d-flex align-items-center justify-content-between me-3">
                            <img className="img-fluid" src="/img/logo-gov-co.png" alt="" />
                        </a >

                        <Link to="/" className="nav-home-ue">
                            <div className="d-inline-flex align-items-center justify-content-between ">
                                <span style={{ fontSize: "35px" }}>
                                    <i className="bi bi-house-door-fill" />
                                </span>
                            </div>
                        </Link>
                        <Link to="/login" className="nav-home-ue d-none d-sm-block ms-auto">
                            <div className="d-inline-flex m-4 align-items-center justify-content-between ">
                                <span style={{ fontSize: "14px", border: "1px solid", borderRadius: "10px", padding: "12px" }}>
                                    <i className="bi bi-person-fill" />
                                    Iniciar Sesión
                                </span>
                            </div>
                        </Link>
                    </>
                }
            </header>
        </>
    )
}

export default Header;
