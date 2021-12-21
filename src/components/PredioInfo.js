import React from 'react';

function PredioInfo({ predio }) {
    return (
        <>
            <div className="card mt-3">

                <div className="card-body">
                    <h5 className="card-title">Código del Predio: {predio.codigo} &nbsp;&nbsp; - &nbsp;&nbsp; CC Propietario: {predio.nro_doc}</h5>

                    <div className="tab-content pt-2">

                        <div className="tab-pane fade show active profile-overview" id="profile-overview">

                            <h5 className="card-title">Detalles del Predio</h5>

                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-3 col-md-4 label">Nombre del Propietario:</div>
                                    <div className="col-lg-3 col-md-8">{predio.nom_prop}</div>

                                    <div className="col-lg-3 col-md-4 label">Área Construída:</div>
                                    <div className="col-lg-3 col-md-8">1500</div>

                                    <div className="col-lg-3 col-md-4 label mt-2">Área Total:</div>
                                    <div className="col-lg-3 col-md-8 mt-3">1800</div>

                                    <div className="col-lg-2 col-md-4 label mt-3">Dirección del Predio:</div>
                                    <div className="col-lg-4 col-md-8 mt-3">A108 Adam Street, New York, NY 535022</div>

                                    <div className="col-lg-3 col-md-4 label mt-3">Barrio:</div>
                                    <div className="col-lg-3 col-md-8 mt-3">Ciudad Jardín</div>

                                    <div className="col-lg-3 col-md-4 label mt-3">Fecha de Pago max:</div>
                                    <div className="col-lg-3 col-md-8 mt-3">2022-12-20</div>

                                    <div className="col-lg-3 col-md-4 label mt-3">Fecha de Pago max (Dcto 40%):</div>
                                    <div className="col-lg-3 col-md-8 mt-3">2022-03-20</div>

                                    <div className="col-lg-3 col-md-4 label mt-3">Fecha de Pago max (Dcto 20%):</div>
                                    <div className="col-lg-3 col-md-8 mt-3">2022-06-20</div>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default PredioInfo;
