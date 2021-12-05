import React from 'react';

function FormConvenio() {
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <div className="row m-2">
                        <h5 className="col-4 card-title mb-3 text-center">Código del Predio</h5>
                        <h5 className="col-4 card-title mb-3 text-center">Propietario del Predio</h5>
                        <h5 className="col-4 card-title mb-3 text-center">Total a Pagar</h5>
                    </div>

                    <form className="row g-3 needs-validation justify-content-center" noValidate>

                        <div className="col-3 mt-3 mb-3">
                            <label htmlFor="yourCuotaInicial" className="form-label">Cuota inicial:</label>
                        </div>

                        <div className="col-2 mt-3 mb-3">
                            <select className="form-select text-center" aria-label="Default select example">
                                <option defaultValue>Sí / No</option>
                                <option value="1">Sí</option>
                                <option value="2">No</option>
                            </select>
                        </div>

                        <div className="col-4 mt-3 mb-3">
                            <input type="number" name="cuotaInicial" className="form-control text-center" id="yourCuotaInicial" required />
                        </div>

                        <div className="col-5 mt-3 mb-3">
                            <label htmlFor="yourNroCuotas" className="form-label">Número de cuotas:</label>
                        </div>

                        <div className="col-4 mt-3 mb-3">
                            <select name="nroCuotas" className="form-select text-center" id="yourNroCuotas" aria-label="Default select example">
                                <option defaultValue>Seleccionar</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                        </div>

                        <div className="col-5 mt-3 mb-3">
                            <label htmlFor="yourVrCuotas" className="form-label">Valor de cuotas:</label>
                        </div>

                        <div className="col-4 mt-3 mb-3">
                            <div className="input-group has-validation">
                                <input type="number" name="vrCuotas" className="form-control text-center" id="yourVrCuotas" required />
                            </div>
                        </div>

                        <div className="col-4 m-auto mt-3 mb-3">
                            <button className="btn btn-primary rounded-pill w-100" type="submit">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
};

export default FormConvenio;
