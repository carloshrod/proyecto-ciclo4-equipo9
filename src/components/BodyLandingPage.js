import React from 'react';
import './CompStyles.css'; 
import { Link } from "react-router-dom";

function BodyLandingPage() {
    return (
        <>
        <div id="container-100vh" className="container" >

            <div className="" style={{marginTop: '50px'}}>
                <h1 className="text-center font-weight-bold">Plataforma de Gestión Catastral</h1>
            </div>{/* <!-- End Page Title --> */}

            <div className="mx-auto logo-body-home">
                <img src="img/logo-escudo-cauca.png" alt=""/>
            </div>

            <section className="section mt-5 mb-4">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card card-home">
                            <Link to="/login">
                                <h5 className="card-title text-center">Iniciar Sesión</h5>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card card-home">
                        <Link to="/register">
                            <h5 className="card-title text-center">¿No tienes una cuenta? Registrate aquí!!!</h5>
                        </Link>                
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </>
    )
}

export default BodyLandingPage;
