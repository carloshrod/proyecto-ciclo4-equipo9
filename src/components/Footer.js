import React from 'react';

function Footer() {
    return (
        <>
        <footer class="footer section d-flex align-items-center">
            <div class="container">
                <div class="row align-items-center justify-content-between">
                    <div class="col-4">
                        <h5 className="text-center">Redes Sociales:&nbsp;&nbsp;
                        <a href="https://es-la.facebook.com/GobCauca/"><i class="bi bi-facebook"></i></a>&nbsp;&nbsp;
                        <a href="https://www.instagram.com/GobCauca/"><i class="bi bi-instagram"></i></a>&nbsp;&nbsp;
                        <a href="https://twitter.com/GobCauca"><i class="bi bi-twitter"></i></a>&nbsp;&nbsp;
                        <a href="https://www.youtube.com/channel/UCJUgHfrUdzJojR2Ktao7fHw"><i class="bi bi-youtube"></i></a>
                        </h5>
                    </div>
                    <div class="col-4">
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
