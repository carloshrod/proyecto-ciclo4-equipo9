import React from 'react';

function FormFechaPagoDcto() {
    return (
        <>
            <section className="section min-vh-100 mt-3">
            <div className="row">
                <div className="col-lg-12">

                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title mb-3">Código del Predio</h5>
                        
                            <form className="row g-3 needs-validation" novalidate>

                                <div className="col-6 mt-3 mb-3">
                                    <label for="yourName" className="form-label">Fecha de pago máxima:</label>
                                </div>

                                <div className="col-6 mt-3 mb-3">
                                    <input type="date" name="name" className="form-control" id="yourName" required/>
                                </div>

                                <div className="col-6 mt-3 mb-3">
                                    <label for="yourUsername" className="form-label">Fecha de pago máxima para tener descuento del 40%:</label>
                                </div>

                                <div className="col-6 mt-3 mb-3">
                                    <div className="input-group has-validation">
                                        <input type="date" name="areat" className="form-control" id="yourAreat" required/>
                                    </div>
                                </div>

                                <div className="col-6 mt-3 mb-3">
                                    <label for="yourName" className="form-label">Fecha de pago máxima para tener descuento del 20%:</label>
                                </div>

                                <div className="col-6 mt-3 mb-3">
                                    <div className="input-group has-validation">
                                        <input type="date" name="phone" className="form-control" id="yourPhone" required/>
                                    </div>
                                </div>

                                <div className="col-4 m-auto mt-3 mb-3">
                                    <button className="btn btn-primary rounded-pill w-100" type="submit">Enviar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        </>
    )
};

export default FormFechaPagoDcto;
