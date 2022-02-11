import jwtDecode from 'jwt-decode';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

export const initialForm = {
    currentPassword: "",
    newPassword: "",
    renewPassword: "",
}

function BodyMyProfile({ changePassword }) {

    const token = localStorage.getItem("token");
    const payload = jwtDecode(token);

    const [form, setForm] = useState(initialForm);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.currentPassword || !form.newPassword || !form.renewPassword) {
            toast.error("Datos incompletos!!!");
            return;
        };

        if (form.currentPassword === form.newPassword) {
            toast.error("Ingrese una contraseña que no haya utilizado antes!!!")
            return;
        }

        if (form.newPassword !== form.renewPassword) {
            toast.error("Las contraseñas no coinciden!!!");
            return;
        }

        changePassword(form);
        handleReset();
    };

    const handleReset = (e) => {
        setForm(initialForm);
    };

    return (
        <>
            <section className="section profile d-flex justify-content-center">
                <div className="row col-12">

                    <div className="col-12 col-md-4 col-xl-4">
                        <div className="card">
                            <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                                <img src="/img/profile-img.jpg" alt="Profile" className="rounded-circle" />
                                <h2 className="text-center">{payload.nombre}</h2>
                                <div className="social-links mt-2">
                                    <a href="https://twitter.com" target="_blank" rel="noreferrer" className="twitter"><i className="bi bi-twitter"></i></a>
                                    <a href="https://es-la.facebook.com" target="_blank" rel="noreferrer" className="facebook"><i className="bi bi-facebook"></i></a>
                                    <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="instagram"><i className="bi bi-instagram"></i></a>
                                    <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="linkedin"><i className="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-8 col-xl-8">
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
                                <div className="tab-content pt-3">

                                    <div className="tab-pane fade show active profile-overview" id="profile-overview">
                                        <h5 className="card-title">Detalles del Perfil</h5>

                                        <div className="row justify-content-center">
                                            <div className="col-5 col-sm-5 col-md-4 col-lg-4 label">Nombre Completo:</div>
                                            <div className="col-7 col-sm-5 col-md-6 col-lg-6">{payload.nombre}</div>
                                        </div>

                                        <div className="row justify-content-center">
                                            <div className="col-5 col-sm-5 col-md-4 col-lg-4 label">Número de Documento:</div>
                                            <div className="col-7 col-sm-5 col-md-6 col-lg-6">{payload.nro_doc}</div>
                                        </div>

                                        <div className="row justify-content-center">
                                            <div className="col-5 col-sm-5 col-md-4 col-lg-4 label">Correo Electrónico:</div>
                                            <div className="col-7 col-sm-5 col-md-6 col-lg-6">{payload.usuario}</div>
                                        </div>

                                        <div className="row justify-content-center">
                                            <div className="col-5 col-sm-5 col-md-4 col-lg-4 label">Dirección de Residencia:</div>
                                            <div className="col-7 col-sm-5 col-md-6 col-lg-6">{payload.direccion}</div>
                                        </div>

                                        <div className="row justify-content-center">
                                            <div className="col-5 col-sm-5 col-md-4 col-lg-4 label">Teléfono:</div>
                                            <div className="col-7 col-sm-5 col-md-6 col-lg-6">{payload.telefono}</div>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade pt-3" id="profile-change-password">
                                        {/* <!-- Change Password Form --> */}
                                        <form onSubmit={handleSubmit} noValidate>
                                            <div className="row mb-3 justify-content-center">
                                                <label htmlFor="currentPassword" className="col-md-5 col-lg-4 col-form-label">Contraseña Actual</label>
                                                <div className="col-md-5 col-lg-6">
                                                    <input name="currentPassword" type="password" className="form-control" id="currentPassword" onChange={handleChange} value={form.currentPassword} />
                                                </div>
                                            </div>

                                            <div className="row mb-3 justify-content-center">
                                                <label htmlFor="newPassword" className="col-md-5 col-lg-4 col-form-label">Contraseña Nueva</label>
                                                <div className="col-md-5 col-lg-6">
                                                    <input name="newPassword" type="password" className="form-control" id="newPassword" onChange={handleChange} value={form.newPassword} />
                                                </div>
                                            </div>

                                            <div className="row mb-3 justify-content-center">
                                                <label htmlFor="renewPassword" className="col-md-5 col-lg-4 col-form-label">Reingresar Contraseña Nueva</label>
                                                <div className="col-md-5 col-lg-6">
                                                    <input name="renewPassword" type="password" className="form-control" id="renewPassword" onChange={handleChange} value={form.renewPassword} />
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
