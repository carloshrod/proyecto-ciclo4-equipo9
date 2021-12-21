import jwtDecode from 'jwt-decode';
import React from 'react';
import { Link } from 'react-router-dom';

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

                <div className="d-flex align-items-center justify-content-between">
                    <Link to="/home-user-ext" className="d-flex align-items-center">
                        <img src="/img/logo-gov-co.png" alt="" />
                        <span className="d-none d-lg-block"></span>
                    </Link>
                </div> {/*!-- End Logo -->*/}

                <nav className="header-nav ms-auto">
                    <ul className="d-flex align-items-center">

                        <li className="nav-item dropdown pe-3">

                            <Link className="nav-link nav-profile d-flex align-items-center pe-0" to="" data-bs-toggle="dropdown">
                                <img src="/img/profile-img.jpg" alt="Profile" className="rounded-circle" />
                                <span className="d-none d-md-block dropdown-toggle ps-2">{payload.usuario}</span>
                            </Link>
                            {/* End Profile Image Icon */}

                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                <li>
                                    <Link to="/home-user-ext/my-profile">
                                        <div className="dropdown-item d-flex align-items-center">
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
                                        <button className="btn btn-100 btn-light btn-primary" type="button" onClick={logout}>
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
