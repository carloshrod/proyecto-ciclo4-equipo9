import React from 'react';

function BodyMyProfile() {
    return (
        <>
            <section className="section profile">
                <div className="row">
                    <div className="col-xl-4">

                        <div className="card">
                            <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">

                                <img src="/img/profile-img.jpg" alt="Profile" className="rounded-circle" />
                                <h2>Kevin Anderson</h2>
                                <h3>Web Designer</h3>
                                <div className="social-links mt-2">
                                    <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                                    <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                                    <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                                    <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-xl-8">

                        <div className="card">
                            <div className="card-body pt-3">
                                {/* <!-- Bordered Tabs --> */}
                                <ul className="nav nav-tabs nav-tabs-bordered">

                                    <li className="nav-item">
                                        <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Vista General</button>
                                    </li>

                                    <li className="nav-item">
                                        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-change-password">Cambiar Contraseña</button>
                                    </li>

                                </ul>
                                <div className="tab-content pt-2">

                                    <div className="tab-pane fade show active profile-overview" id="profile-overview">

                                        <h5 className="card-title">Detalles del Perfil</h5>

                                        <div className="row">
                                            <div className="col-lg-3 col-md-4 label ">Nombre Completo</div>
                                            <div className="col-lg-9 col-md-8">Kevin Anderson</div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-3 col-md-4 label">Número de Documento</div>
                                            <div className="col-lg-9 col-md-8">1452783015</div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-3 col-md-4 label">Correo Electrónico</div>
                                            <div className="col-lg-9 col-md-8">k.anderson@example.com</div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-3 col-md-4 label">Usuario</div>
                                            <div className="col-lg-9 col-md-8">k.anderson</div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-3 col-md-4 label">Dirección de Residencia</div>
                                            <div className="col-lg-9 col-md-8">A108 Adam Street, New York, NY 535022</div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-3 col-md-4 label">Teléfono</div>
                                            <div className="col-lg-9 col-md-8">(436) 486-3538 x29071</div>
                                        </div>


                                    </div>

                                    <div className="tab-pane fade pt-3" id="profile-change-password">
                                        {/* <!-- Change Password Form --> */}
                                        <form>

                                            <div className="row mb-3">
                                                <label for="currentPassword" className="col-md-4 col-lg-3 col-form-label">Contraseña Actual</label>
                                                <div className="col-md-8 col-lg-9">
                                                    <input name="password" type="password" className="form-control" id="currentPassword" />
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <label for="newPassword" className="col-md-4 col-lg-3 col-form-label">Contraseña Nueva</label>
                                                <div className="col-md-8 col-lg-9">
                                                    <input name="newpassword" type="password" className="form-control" id="newPassword" />
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <label for="renewPassword" className="col-md-4 col-lg-3 col-form-label">Reingresar Contraseña Nueva</label>
                                                <div className="col-md-8 col-lg-9">
                                                    <input name="renewpassword" type="password" className="form-control" id="renewPassword" />
                                                </div>
                                            </div>

                                            <div className="text-center">
                                                <button type="submit" className="btn btn-primary rounded-pill">Cambiar Contraseña</button>
                                            </div>
                                        </form>{/* <!-- End Change Password Form --> */}

                                    </div>

                                </div>
                                {/* {/* <!-- End Bordered Tabs --> */}
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* {/* <!-- End #main --> */}
        </>
    )
};

export default BodyMyProfile;
