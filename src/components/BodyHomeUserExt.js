import React from 'react';
import './CompStyles.css'; 
import { Link } from "react-router-dom";

function BodyHomeUserExt() {
    return (
        <>
        <div id="container-100vh" className="container" >

            <div className="" style={{marginTop: '50px'}}>
                <h1 className="text-center font-weight-bold">Plataforma de Gestión Catastral</h1>
            </div>{/* <!-- End Page Title --> */}

            <div className="mx-auto logo-body-home" style={{marginTop: '70px'}}>
                <img src="img/logo-escudo.png" alt=""/>
            </div>

            <section className="section mb-4" style={{marginTop: '70px'}}>
                <div className="row">
                    <div className="col-lg-6 px-5">
                        <div className="card card-home">
                            <Link to="/pagar">
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
                <div className="row justify-content-center" style={{marginTop: '30px'}}>
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
        </>
    )
}

export default BodyHomeUserExt;
