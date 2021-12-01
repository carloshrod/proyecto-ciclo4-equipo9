import React from 'react';

function FormEditPredio() {
    return (
        <>
        <section className="section min-vh-100 mt-3">
            <div className="row">
                <div className="col-lg-12">

                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Código del Predio</h5>
                        
                            <form className="row g-3 needs-validation" novalidate>

                                <div className="col-6">
                                    <label for="yourName" className="form-label">Nro. Documento del Propietario</label>
                                    <input type="number" name="docm" className="form-control" id="yourDocm" required/>
                                    <div className="invalid-feedback">Por favor, ingresa un número de documento del propietario!</div>
                                </div>

                                <div className="col-6">
                                    <label for="yourName" className="form-label">Nombre del Propietario</label>
                                    <input type="text" name="name" className="form-control" id="yourName" required/>
                                    <div className="invalid-feedback">Por favor, ingresa nombre del propetario!</div>
                                </div>

                                <div className="col-6">
                                    <label for="yourUsername" className="form-label">Área Construida</label>
                                    <div className="input-group has-validation">
                                    <span className="input-group-text" id="inputGroupPrepend"><i className="bi bi-building"></i></span>
                                    <input type="number" name="areac" className="form-control" id="yourAreac" required/>
                                    <div className="invalid-feedback">Por favor, ingresa área construida del predio!</div>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <label for="yourUsername" className="form-label">Área Total</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text" id="inputGroupPrepend"><i className="bi bi-building"></i></span>
                                        <input type="number" name="areat" className="form-control" id="yourAreat" required/>
                                        <div className="invalid-feedback">Por favor, ingresa área total del predio!</div>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <label for="yourName" className="form-label">Dirección</label>
                                    <div className="input-group has-validation">
                                    <input type="text" name="adress" className="form-control" id="yourAdress" required/>
                                    <div className="invalid-feedback">Por favor, ingresa dirección del predio!</div>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <label for="yourName" className="form-label">Teléfono</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text" id="inputGroupPrepend"><i className="bi bi-telephone-fill"></i></span>
                                        <input type="tel" name="phone" className="form-control" id="yourPhone" required/>
                                        <div className="invalid-feedback">Por favor, ingresa número de teléfono del propietario!</div>
                                    </div>
                                </div>

                                <div className="col-4 m-auto mt-3">
                                    <button className="btn btn-primary rounded-pill w-100" type="submit">Editar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>                       
        </>
    )
}

export default FormEditPredio;
