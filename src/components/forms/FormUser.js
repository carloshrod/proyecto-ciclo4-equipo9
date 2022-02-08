import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { toast } from 'react-toastify'

export const initialForm = {
    estado: null,
    nombres: "",
    apellidos: "",
    tipo_doc: "",
    nro_doc: "",
    email: "",
    telefono: "",
    direccion: "",
};

function FormUser({ createUser, updateUser, userToEdit, setUserToEdit, titulo, btn_text }) {

    const [form, setForm] = useState(initialForm);

    useEffect(() => {
        if (userToEdit) {
            setForm(userToEdit);
        } else {
            setForm(initialForm);
        }
    }, [userToEdit]);


    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.nombres || !form.apellidos || !form.tipo_doc || !form.nro_doc || !form.email || !form.telefono || !form.direccion) {
            toast.error("Datos incompletos");
            return;
        };

        if (form.estado === null) {
            createUser(form);
            handleReset();
        } else {
            updateUser(form);
        }
    };

    const handleReset = (e) => {
        setForm(initialForm);
        setUserToEdit(null);
    };

    return (
        <>
            <section className="section min-vh-100 container-center center-v">
                <div className="row">
                    <div className="col-lg-12">

                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{titulo}</h5>

                                <form className="row g-3 needs-validation" encType="multipart/form-data" onSubmit={handleSubmit} noValidate>

                                    <div className="col-12">
                                        <img src="/img/profile-img.jpg" alt="Profile" className="rounded-circle center-img" />
                                        <div className="pt-2 text-center m-2">
                                            <ReactTooltip id="toolTipUpload" place="top" type="dark" effect="solid">
                                                Subir nueva imágen de perfil
                                            </ReactTooltip>
                                            <Link to="" className="btn btn-primary">
                                            <i data-tip data-for="toolTipUpload" className="bi bi-upload" />
                                            </Link>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <Link to="" className="btn btn-danger">
                                                <ReactTooltip id="toolTipDelete" place="top" type="dark" effect="solid">
                                                    Eliminar imágen de perfil
                                                </ReactTooltip>
                                                <i data-tip data-for="toolTipDelete" className="bi bi-trash" />
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <label htmlFor="yourName" className="form-label">Nombres</label>
                                        <input type="text" name="nombres" className="form-control" id="yourName" onChange={handleChange} value={form.nombres} required />
                                        <div className="invalid-feedback">Por favor, ingresa tus nombres!</div>
                                    </div>

                                    <div className="col-6">
                                        <label htmlFor="yourLastname" className="form-label">Apellidos</label>
                                        <input type="text" name="apellidos" className="form-control" id="yourLastname" onChange={handleChange} value={form.apellidos} required />
                                        <div className="invalid-feedback">Por favor, ingresa tus apellidos!</div>
                                    </div>

                                    <div className="col-6">
                                        <label htmlFor="idTipoDoc" className="form-label">Tipo de Documento</label>
                                        <select className="form-select" name="tipo_doc" aria-label="Default select example" id="idTipoDoc" onChange={handleChange} value={form.tipo_doc} required>
                                            <option defaultValue>Seleccionar</option>
                                            <option value="1">CC</option>
                                            <option value="2">CE</option>
                                            <option value="3">Pasaporte</option>
                                        </select>
                                        <div className="invalid-feedback"></div>
                                    </div>

                                    <div className="col-6">
                                        <label htmlFor="yourUsername" className="form-label">Nro. Documento</label>
                                        <div className="input-group has-validation">
                                            <span className="input-group-text" id="inputGroupPrepend"><i className="bi bi-fingerprint"></i></span>
                                            <input type="number" name="nro_doc" className="form-control" id="yourUsername" onChange={handleChange} value={form.nro_doc} required />
                                            <div className="invalid-feedback">Por favor, ingresa tu usuario!</div>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <label htmlFor="yourEmail" className="form-label">Correo Electrónico</label>
                                        <div className="input-group has-validation">
                                            <span className="input-group-text" id="inputGroupPrepend"><i className="bi bi-envelope-fill"></i></span>
                                            <input type="email" name="email" className="form-control" id="yourEmail" onChange={handleChange} value={form.email} required />
                                            <div className="invalid-feedback">Por favor, ingresa un correo electrónico válido!</div>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <label htmlFor="yourPhone" className="form-label">Teléfono</label>
                                        <div className="input-group has-validation">
                                            <span className="input-group-text" id="inputGroupPrepend"><i className="bi bi-telephone-fill"></i></span>
                                            <input type="number" name="telefono" className="form-control" id="yourPhone" onChange={handleChange} value={form.telefono} required />
                                            <div className="invalid-feedback">Por favor, ingresa tu número de documento!</div>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="yourAdress" className="form-label">Dirección</label>
                                        <input type="text" name="direccion" className="form-control" id="yourAdress" onChange={handleChange} value={form.direccion} required />
                                        <div className="invalid-feedback">Por favor, ingresa tu número de documento!</div>
                                    </div>

                                    <div className="col-3 col-md-2 col-lg-2 m-auto mt-3">
                                        <button className="btn btn-primary rounded-pill w-100" type="submit">{btn_text}</button>
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

export default FormUser;
