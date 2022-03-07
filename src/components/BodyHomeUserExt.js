import React from 'react';
import './CompStyles.css';
import { Link } from "react-router-dom";

function BodyHomeUserExt() {
    return (
        <>
            <img className="d-block mx-auto img-fluid mt-5" src="img/logo-escudo.png" alt="" />

            <section className="section mb-4 mg-t-75px">
                <div className="row">
                    <div className="col-lg-6 px-5">
                        <div className="card card-home-ue">
                            <Link to="/user-ext/asociar-predios">
                                <h5 className="card-title text-center">Asociar predios</h5>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-6 px-5">
                        <div className="card card-home-ue">
                            <Link to="/user-ext/pagar">
                                <h5 className="card-title text-center">Pagar impuesto predial</h5>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-6 px-5">
                        <div className="card card-home-ue">
                            <Link to="/user-ext/convenio">
                                <h5 className="card-title text-center">Solicitar convenio de pago</h5>
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default BodyHomeUserExt;
