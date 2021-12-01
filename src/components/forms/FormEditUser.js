import React from 'react';

function FormEditUser() {
    return (
        <>
        <section className="section min-vh-100 container-center center-v">
            <div className="row">
                <div className="col-lg-12">

                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Editar Usuario</h5>
                        
                            <form className="row g-3 needs-validation" novalidate>

                                <div className="col-12">
                                    <img src="/img/profile-img.jpg" alt="Profile" className="rounded-circle center-img"/>
                                    <div className="pt-2 text-center m-2">
                                    <a href="#" className="btn btn-primary" title="Subir nueva imagen de perfil"><i className="bi bi-upload"></i></a>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <a href="#" className="btn btn-danger" title="Eliminar imagen de perfil"><i className="bi bi-trash"></i></a>
                                    </div>
                                </div>


                                <div className="col-6">
                                    <label for="yourName" className="form-label">Nombres</label>
                                    <input type="text" name="name" className="form-control" id="yourName" required/>
                                    <div className="invalid-feedback">Por favor, ingresa tus nombres!</div>
                                </div>

                                <div className="col-6">
                                    <label for="yourName" className="form-label">Apellidos</label>
                                    <input type="text" name="lastname" className="form-control" id="yourLastname" required/>
                                    <div className="invalid-feedback">Por favor, ingresa tus apellidos!</div>
                                </div>

                                <div className="col-6">
                                    <label for="yourUsername" className="form-label">Correo Electrónico</label>
                                    <div className="input-group has-validation">
                                    <span className="input-group-text" id="inputGroupPrepend"><i className="bi bi-envelope-fill"></i></span>
                                    <input type="email" name="email" className="form-control" id="yourEmail" required/>
                                    <div className="invalid-feedback">Por favor, ingresa un correo electrónico válido!</div>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <label for="yourUsername" className="form-label">Username</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text" id="inputGroupPrepend"><i className="bi bi-person-fill"></i></span>
                                        <input type="text" name="username" className="form-control" id="yourUsername" required/>
                                        <div className="invalid-feedback">Por favor, ingresa tu usuario!</div>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <label for="yourName" className="form-label">Teléfono</label>
                                    <div className="input-group has-validation">
                                    <span className="input-group-text" id="inputGroupPrepend"><i className="bi bi-telephone-fill"></i></span>
                                    <input type="tel" name="phone" className="form-control" id="yourPhone" required/>
                                    <div className="invalid-feedback">Por favor, ingresa tu número de documento!</div>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <label for="yourName" className="form-label">Dirección</label>
                                    <input type="text" name="adress" className="form-control" id="yourAdress" required/>
                                    <div className="invalid-feedback">Por favor, ingresa tu número de documento!</div>
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

export default FormEditUser;
