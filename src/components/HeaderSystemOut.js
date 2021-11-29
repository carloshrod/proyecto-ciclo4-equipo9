import React from 'react';

function HeaderSystemOut() {
    return (
        <>
        <header id="header" className="header d-flex align-items-center">
            <div className="d-flex align-items-center justify-content-between">
                <a href="/" className="d-flex align-items-center">
                <img src="/img/logo-gov-co.png"  alt=""/>
                <span className="d-none d-lg-block"></span>
                </a>
            </div> {/*!-- End Logo -->*/}
        </header> {/*<!-- End Header -->*/}        
        </>
    )
}

export default HeaderSystemOut;
