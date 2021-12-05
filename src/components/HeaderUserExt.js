import React from 'react';
import { Link } from 'react-router-dom';

function HeaderUserExt() {
    return (
        <>
        {/* <!-- ======= Header ======= --> */}
        <header id="header" className="header d-flex align-items-center">

            <div className="d-flex align-items-center justify-content-between">
                <Link to="/home-user-ext" className="d-flex align-items-center">
                <img src="/img/logo-gov-co.png"  alt=""/>
                <span className="d-none d-lg-block"></span>
                </Link>
            </div> {/*!-- End Logo -->*/}

            <nav className="header-nav ms-auto">
            <ul className="d-flex align-items-center">

                <li className="nav-item dropdown pe-3">

                <Link className="nav-link nav-profile d-flex align-items-center pe-0" to="" data-bs-toggle="dropdown">
                    <img src="/img/profile-img.jpg" alt="Profile" className="rounded-circle"/>
                    <span className="d-none d-md-block dropdown-toggle ps-2">K. Anderson</span>
                </Link> 
                {/* End Profile Image Icon */}

                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                    <li className="dropdown-header">
                    <h6>Kevin Anderson</h6>
                    <span>Web Designer</span>
                    </li>
                    <li>
                    <hr className="dropdown-divider"/>
                    </li>

                    <li>
                    <Link className="dropdown-item d-flex align-items-center" to="/home-user-ext/profile">
                        <i className="bi bi-person"></i>
                        <span>My Profile</span>
                    </Link>
                    </li>
                    <li>
                    <hr className="dropdown-divider"/>
                    </li>

                    <li>
                    <hr className="dropdown-divider"/>
                    </li>

                    <li>
                    <Link className="dropdown-item d-flex align-items-center" to="">
                        <i className="bi bi-box-arrow-right"></i>
                        <span>Sign Out</span>
                    </Link>
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
