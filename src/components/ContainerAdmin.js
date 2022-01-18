import React from 'react';
import { NavLink } from 'react-router-dom';

function ContainerAdmin({ titulo, linkTo, subtitulo, sep, subtitulo2, children }) {
    return (
        <>
            <main id="main" className="main min-vh-100 container-bg">
                <div className="pagetitle">
                    <h1>{titulo}</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <NavLink to={linkTo}>
                                <div className="admin-link-active">{subtitulo}</div>
                            </NavLink>
                            {sep}
                            <NavLink to="#">
                                <div className="admin-link">{subtitulo2}</div>
                            </NavLink>
                        </ol>
                    </nav>
                </div>

                <section className="section dashboard">
                    <div className="row">
                        {children}
                    </div>
                </section>
            </main>{/* <!-- End #main --> */}
        </>
    )
};

export default ContainerAdmin;
