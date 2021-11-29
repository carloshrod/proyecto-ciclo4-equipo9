import React from 'react';

function Footer() {
    return (
        <>
        <footer id="footer-lp" className="footer section d-flex align-items-center">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-4">
                        <h5 classNameName="text-center">Redes Sociales:&nbsp;&nbsp;
                        <a href="https://es-la.facebook.com/GobCauca/"><i className="bi bi-facebook"></i></a>&nbsp;&nbsp;
                        <a href="https://www.instagram.com/GobCauca/"><i className="bi bi-instagram"></i></a>&nbsp;&nbsp;
                        <a href="https://twitter.com/GobCauca"><i className="bi bi-twitter"></i></a>&nbsp;&nbsp;
                        <a href="https://www.youtube.com/channel/UCJUgHfrUdzJojR2Ktao7fHw"><i className="bi bi-youtube"></i></a>
                        </h5>
                    </div>
                    <div className="col-4">
                        <a href="https://www.gov.co/home/">
                        <img src="/img/logo-footer.png" alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer;
