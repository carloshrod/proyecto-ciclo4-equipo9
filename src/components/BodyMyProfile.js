import React from 'react';
import jwtDecode from 'jwt-decode';
import FormChangePassword from './forms/FormChangePassword'

export const initialForm = {
    currentPassword: "",
    newPassword: "",
    renewPassword: "",
}

function BodyMyProfile({ changePassword }) {

    const token = localStorage.getItem("token");
    const payload = jwtDecode(token);

    return (
        <div className="profile col-12">
                <div className="card">
                    <div className="card-body pt-3">
                        <ul className="nav nav-tabs nav-tabs-bordered">
                            <li className="nav-item">
                                <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Vista General</button>
                            </li>

                            <li className="nav-item">
                                <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-change-password">Cambiar Contraseña</button>
                            </li>
                        </ul>

                        <div className="tab-content pt-3">
                            <div className="tab-pane fade show active profile-overview" id="profile-overview">
                                <h5 className="card-title">Detalles del Perfil</h5>

                                <div className="card-body profile-card d-flex flex-column align-items-center">
                                    <img src={payload.avatar || "http://192.168.1.65:8080/default-avatar.png"} alt="Profile" className="img-fluid rounded-circle avatar" />
                                    <h2 className="text-center mt-3">{payload.nombre}</h2>
                                    <div className="social-links mt-3 mb-3">
                                        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="twitter"><i className="bi bi-twitter"></i></a>
                                        <a href="https://es-la.facebook.com" target="_blank" rel="noreferrer" className="facebook"><i className="bi bi-facebook"></i></a>
                                        <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="instagram"><i className="bi bi-instagram"></i></a>
                                        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="linkedin"><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-8 text-center mx-auto">
                                    <div className="row justify-content-center">
                                        <div className="col-5 col-sm-5 col-md-4 col-lg-4 label">Nombre Completo:</div>
                                        <div className="col-7 col-sm-5 col-md-6 col-lg-6 vh-center">{payload.nombre}</div>
                                    </div>

                                    <div className="row justify-content-center">
                                        <div className="col-5 col-sm-5 col-md-4 col-lg-4 label">Número de Documento:</div>
                                        <div className="col-7 col-sm-5 col-md-6 col-lg-6 vh-center">{payload.nro_doc}</div>
                                    </div>

                                    <div className="row justify-content-center">
                                        <div className="col-5 col-sm-5 col-md-4 col-lg-4 label">Correo Electrónico:</div>
                                        <div className="col-7 col-sm-5 col-md-6 col-lg-6 vh-center">{payload.usuario}</div>
                                    </div>

                                    <div className="row justify-content-center">
                                        <div className="col-5 col-sm-5 col-md-4 col-lg-4 label">Dirección de Residencia:</div>
                                        <div className="col-7 col-sm-5 col-md-6 col-lg-6 vh-center">{payload.direccion}</div>
                                    </div>

                                    <div className="row justify-content-center">
                                        <div className="col-5 col-sm-5 col-md-4 col-lg-4 label">Teléfono:</div>
                                        <div className="col-7 col-sm-5 col-md-6 col-lg-6 vh-center">{payload.telefono}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade pt-3" id="profile-change-password">
                                <div className="card-body profile-card d-flex flex-column align-items-center">
                                    <img src={payload.avatar || "http://192.168.1.65:8080/default-avatar.png"} alt="Profile" className="img-fluid rounded-circle avatar" />
                                    <h2 className="text-center mt-3">{payload.nombre}</h2>
                                    <div className="social-links mt-3 mb-3">
                                        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="twitter"><i className="bi bi-twitter"></i></a>
                                        <a href="https://es-la.facebook.com" target="_blank" rel="noreferrer" className="facebook"><i className="bi bi-facebook"></i></a>
                                        <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="instagram"><i className="bi bi-instagram"></i></a>
                                        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="linkedin"><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-10 mx-auto">
                                    <FormChangePassword changePassword={changePassword} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
};

export default BodyMyProfile;
