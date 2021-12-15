import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const initialForm = {
    id: null,
    nombre: "",
    apellidos: "",
    email: "",
    nro_doc: "",
    telefono: "",
    direccion: "",
};

function FormCreateUser({ createUser, updateUser, userToEdit, setUserToEdit, titulo, btn_text }) {
    
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

        if (!form.nombre || !form.apellidos || !form.email || !form.nro_doc || !form.telefono || !form.direccion) {
            alert("Datos incompletos");
            return;
        };

        if (form.nombre === null) {
            createUser(form);
        } else {
            updateUser(form);
        }

        handleReset();
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

                                <form className="row g-3 needs-validation" onSubmit={handleSubmit} noValidate>

                                    <div className="col-12">
                                        <img src="/img/profile-img.jpg" alt="Profile" className="rounded-circle center-img" />
                                        <div className="pt-2 text-center m-2">
                                            <Link to="" className="btn btn-primary" title="Subir nueva imagen de perfil"><i className="bi bi-upload"></i></Link>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <Link to="" className="btn btn-danger" title="Eliminar imagen de perfil"><i className="bi bi-trash"></i></Link>
                                        </div>
                                    </div>


                                    <div className="col-6">
                                        <label htmlFor="yourName" className="form-label">Nombres</label>
                                        <input type="text" name="nombre" className="form-control" id="yourName" onChange={handleChange} value={form.nombre} required />
                                        <div className="invalid-feedback">Por favor, ingresa tus nombres!</div>
                                    </div>

                                    <div className="col-6">
                                        <label htmlFor="yourName" className="form-label">Apellidos</label>
                                        <input type="text" name="apellidos" className="form-control" id="yourLastname" onChange={handleChange} value={form.apellidos} required />
                                        <div className="invalid-feedback">Por favor, ingresa tus apellidos!</div>
                                    </div>

                                    <div className="col-6">
                                        <label htmlFor="yourUsername" className="form-label">Correo Electrónico</label>
                                        <div className="input-group has-validation">
                                            <span className="input-group-text" id="inputGroupPrepend"><i className="bi bi-envelope-fill"></i></span>
                                            <input type="email" name="email" className="form-control" id="yourEmail" onChange={handleChange} value={form.email} required />
                                            <div className="invalid-feedback">Por favor, ingresa un correo electrónico válido!</div>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <label htmlFor="yourUsername" className="form-label">Nro. Documento</label>
                                        <div className="input-group has-validation">
                                            <span className="input-group-text" id="inputGroupPrepend"><i className="bi bi-person-fill"></i></span>
                                            <input type="number" name="nro_doc" className="form-control" id="yourUsername" onChange={handleChange} value={form.nro_doc} required />
                                            <div className="invalid-feedback">Por favor, ingresa tu usuario!</div>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <label htmlFor="yourName" className="form-label">Teléfono</label>
                                        <div className="input-group has-validation">
                                            <span className="input-group-text" id="inputGroupPrepend"><i className="bi bi-telephone-fill"></i></span>
                                            <input type="tel" name="telefono" className="form-control" id="yourPhone" onChange={handleChange} value={form.telefono} required />
                                            <div className="invalid-feedback">Por favor, ingresa tu número de documento!</div>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <label htmlFor="yourName" className="form-label">Dirección</label>
                                        <input type="text" name="direccion" className="form-control" id="yourAdress" onChange={handleChange} value={form.direccion} required />
                                        <div className="invalid-feedback">Por favor, ingresa tu número de documento!</div>
                                    </div>

                                    <div className="col-4 m-auto mt-3">
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

export default FormCreateUser;
