import React from 'react';
import './CompStyles.css'; 
import { Link } from "react-router-dom";

function BodyHomeUserExt() {
    return (
        <>
        <div className="container container-center center-v min-vh-100">
            <div className="container">

            <div>
                <h1 className="text-center font-weight-bold">Plataforma de Gestión Catastral</h1>
            </div>{/* <!-- End Page Title --> */}

            <div className="mx-auto logo-body-home mg-t-50px">
                <img src="img/logo-escudo.png" alt=""/>
            </div>

            <section className="section mb-4 mg-t-75px">
                <div className="row">
                    <div className="col-lg-6 px-5">
                        <div className="card card-home">
                            <Link to="/home-user-ext/pagar">
                                <h5 className="card-title text-center">Pagar impuesto predial</h5>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-6 px-5">
                        <div className="card card-home">
                        <Link to="/asociar">
                            <h5 className="card-title text-center">Asociar predios</h5>
                        </Link>                
                        </div>
                    </div>

                </div>
                <div className="row justify-content-center mg-t-25px">
                    <div className="col-lg-6 px-5">
                        <div className="card card-home">
                        <Link to="/convenio">
                            <h5 className="card-title text-center">Solicitar convenio de pago</h5>
                        </Link>                
                        </div>
                    </div>
                </div>
            </section>
            </div>
        </div>
        </>
    )
}

export default BodyHomeUserExt;
