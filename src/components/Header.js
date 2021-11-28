import React from 'react';

function Header() {
    return (
        <>
        <header id="header" class="header d-flex align-items-center">
            <div class="d-flex align-items-center justify-content-between">
                <a href="/" class="d-flex align-items-center">
                <img src="/img/logo-gov-co.png"  alt=""/>
                <span class="d-none d-lg-block"></span>
                </a>
            </div> {/*!-- End Logo -->*/}
        </header> {/*<!-- End Header -->*/}        
        </>
    )
}

export default Header;
