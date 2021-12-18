import React from 'react';
import { Link } from 'react-router-dom';

function HeaderUserInt() {

    function logout() {
        localStorage.removeItem("token");
        window.location.href = "/";
    }

    return (
        <>
            {/* {/* <!-- ======= Header ======= --> */}
            <header id="header" className="header fixed-top d-flex align-items-center">

                <div className="d-flex align-items-center justify-content-between">
                    <img src="/img/logo-gov-co.png" alt="" />
                    <i className="bi bi-list toggle-sidebar-btn"></i>
                </div>
                {/* <!-- End Logo --> */}

                <nav className="header-nav ms-auto">
                    <ul className="d-flex align-items-center">

                        <li className="nav-item dropdown pe-3">

                            <Link to="" className="nav-link nav-profile d-flex align-items-center pe-0" data-bs-toggle="dropdown">
                                <img src="/img/profile-img.jpg" alt="Profile" className="rounded-circle" />
                                <span className="d-none d-md-block dropdown-toggle ps-2">K. Anderson</span>
                            </Link>{/* <!-- End Profile Image Icon --> */}

                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                <li className="dropdown-header">
                                    <h6>Kevin Anderson</h6>
                                    <span>Web Designer</span>
                                </li>
                                
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li>
                                    <Link to="/home-user-int/my-profile" className="dropdown-item d-flex align-items-center">
                                        <i className="bi bi-person"></i>
                                        <span>Mi Perfil</span>
                                    </Link>
                                </li>

                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li>
                                    <div className="dropdown-item d-flex align-items-center">
                                        <button className="btn btn-100 btn-light btn-primary" type="button" onClick={logout}>
                                            <i className="bi bi-box-arrow-right"/>
                                            Salir
                                        </button>
                                    </div>
                                </li>

                            </ul>{/* <!-- End Profile Dropdown Items --> */}
                        </li>{/* <!-- End Profile Nav --> */}

                    </ul>
                </nav>{/* <!-- End Icons Navigation --> */}

            </header>{/* <!-- End Header --> */}
        </>
    )
}

export default HeaderUserInt;
