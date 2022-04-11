import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../auth/logout';
import { getLoggedUser } from '../../auth/getLoggedUser';

const defaultAvatar = process.env.REACT_APP_DEFAULT_AVATAR;

function HeaderAdmin({ usersDb, payload, btn }) {
    const { imgUrl, nombres } = getLoggedUser(usersDb, payload) || [];

    return (
        <>
            <header id="header" className="header fixed-top d-flex align-items-center">

                <div className="d-flex d-none d-sm-block align-items-center justify-content-between">
                    <img src="/img/logo-gov-co.png" alt="" />
                </div>

                {/* Toggle-Sidebar-Btn */}
                {btn}
                {/* End Toggle-Sidebar-Btn */}

                <nav className="header-nav ms-auto">
                    <ul className="d-flex align-items-center">
                        <li className="nav-item dropdown pe-3">
                            <Link to="/" className="nav-profile d-flex align-items-center pe-0" data-bs-toggle="dropdown">
                                <img src={imgUrl || defaultAvatar} alt="Profile" className="rounded-circle" />
                                <span className="nav-home-ue dropdown-toggle ps-2">{nombres}</span>
                            </Link>{/* <!-- End Profile Image Icon --> */}
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                <li>
                                    <Link to={payload.rol === 1 ? "/admin/my-profile" : "/user-int/my-profile"}>
                                        <div className="dropdown-item dditem d-flex align-items-center">
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
                                        <button className="btn btn-100 btn-light btn-primary dditem" type="button" onClick={()=>logout()}>
                                            <i className="bi bi-box-arrow-right" />
                                            <span>Cerrar Sesión</span>
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default HeaderAdmin;
