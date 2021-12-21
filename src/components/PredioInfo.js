import React from 'react';

function PredioInfo({ predio }) {
    return (
        <>
            <div className="card mt-1 mb-2">

                <div className="card-body">
                    <h5 className="card-title">Código del Predio: &nbsp; {predio.codigo} &nbsp;&nbsp; - &nbsp;&nbsp; CC Propietario: &nbsp; {predio.doc_prop}</h5>

                    <div className="tab-content pt-2">

                        <div className="tab-pane fade show active profile-overview" id="profile-overview">

                            <h5 className="card-title">Detalles del Predio</h5>

                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-3 col-md-4 label">Nombre del Propietario:</div>
                                    <div className="col-lg-3 col-md-8">{predio.nom_prop}</div>

                                    <div className="col-lg-3 col-md-4 label">Área Construída:</div>
                                    <div className="col-lg-3 col-md-8">{predio.area_c}</div>

                                    <div className="col-lg-3 col-md-4 label mt-2">Área Total:</div>
                                    <div className="col-lg-3 col-md-8 mt-3">{predio.area_t}</div>

                                    <div className="col-lg-3 col-md-4 label mt-2">Valor del predio:</div>
                                    <div className="col-lg-3 col-md-8 mt-3">${predio.valor_predio}</div>

                                    <div className="col-lg-3 col-md-4 label mt-2">Valor a pagar:</div>
                                    <div className="col-lg-3 col-md-8 mt-3">${predio.valor_predial}</div>

                                    <div className="col-lg-3 col-md-4 label mt-3">Dirección del Predio:</div>
                                    <div className="col-lg-3 col-md-8 mt-3">{predio.direccion}</div>

                                    <div className="col-lg-3 col-md-4 label mt-3">Barrio:</div>
                                    <div className="col-lg-3 col-md-8 mt-3">{predio.barrio}</div>

                                    <div className="col-lg-3 col-md-4 label mt-3">Fecha de Pago max:</div>
                                    <div className="col-lg-3 col-md-8 mt-3">{predio.fecha_pago}</div>

                                    <div className="col-lg-3 col-md-4 label mt-3">Fecha de Pago max (Dcto 40%):</div>
                                    <div className="col-lg-3 col-md-8 mt-3">{predio.fecha_pago2}</div>

                                    <div className="col-lg-3 col-md-4 label mt-3">Fecha de Pago max (Dcto 20%):</div>
                                    <div className="col-lg-3 col-md-8 mt-3">{predio.fecha_pago3}</div>

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
