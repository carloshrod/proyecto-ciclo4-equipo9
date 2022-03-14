import React from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { useFormUser } from '../../hooks/useFormUser';
import { inputUsers } from '../../tools/inputProps';
import InputForm from '../InputForm';
import jwtDecode from 'jwt-decode';

const initialForm = {
    estado: null,
    nombres: "",
    apellidos: "",
    tipo_doc: "",
    nro_doc: "",
    email: "",
    telefono: "",
    direccion: "",
};

function FormUser({ usersDb, createUser, updateUser, userToEdit, setUserToEdit, titulo, btn_text }) {

    const {
        form,
        reset,
        handleChange,
        handleSubmit
    } = useFormUser(initialForm, usersDb, createUser, updateUser, userToEdit, setUserToEdit);

    const token = localStorage.getItem("token");
    const payload = jwtDecode(token);

    return (
        <>
            <section className="section min-vh-100">
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
                                            <ReactTooltip id="toolTipDelete" place="top" type="dark" effect="solid">
                                                Eliminar imágen de perfil
                                            </ReactTooltip>
                                            <Link to="" data-tip data-for="toolTipUpload" className="btn my-btn-edit">
                                                <i className="bi bi-upload" />
                                            </Link>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <Link to="" data-tip data-for="toolTipDelete" className="btn my-btn-delete">
                                                <i className="bi bi-trash" />
                                            </Link>
                                        </div>
                                    </div>

                                    {inputUsers.map((input) => (
                                        <InputForm
                                            key={input.id}
                                            type={input.type}
                                            {...input}
                                            value={form[input.name]}
                                            onChange={handleChange}
                                            reset={reset}
                                        />
                                    ))}

                                    <div className="col-5 col-sm-3 col-md-2 col-lg-2 m-auto mt-3">
                                        <button className="btn my-btn-success rounded-pill w-100" type="submit" disabled={payload.rol !== 1 ? true : false}>{btn_text}</button>
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
