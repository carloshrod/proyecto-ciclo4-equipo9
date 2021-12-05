import React from 'react';
import { Link } from "react-router-dom";

function HeaderSystemOut() {
    return (
        <>
        <header id="header" className="header d-flex align-items-center">
            <div className="d-flex align-items-center justify-content-between">
                <Link to="/" className="d-flex align-items-center">
                <img src="/img/logo-gov-co.png"  alt=""/>
                <span className="d-none d-lg-block"></span>
                </Link>
            </div> {/*!-- End Logo -->*/}
        </header> {/*<!-- End Header -->*/}        
        </>
    )
}

export default HeaderSystemOut;
