import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

export const initialForm = {
  nombres: "",
  apellidos: "",
  tipo_doc: "",
  nro_doc: "",
  email: "",
  password: "",
  telefono: "",
  direccion: "",
};

function FormRegister({ registerUser, userToEdit, setUserToEdit }) {

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

    if (!form.nombres || !form.apellidos || !form.tipo_doc || !form.nro_doc || !form.email || !form.password || !form.telefono) {
      alert("Datos incompletos");
      return;
    };
    registerUser(form);
    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialForm);
    setUserToEdit(null);
  };

  return (
    <>
      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container pt-2">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-8 d-flex flex-column align-items-center justify-content-center">

              <div className="card form-1">

                <div className="card-body">

                  <div className="pt-4 pb-2">
                    <h5 className="card-title text-center pb-0 fs-4">Crea una cuenta</h5>
                    <p className="text-center small">Ingresa tu información personal para crear tu cuenta</p>
                  </div>

                  <form className="row g-3 needs-validation" onSubmit={handleSubmit} noValidate>
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
                      <label htmlFor="yourPassword" className="form-label">Contraseña</label>
                      <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend"><i className="bi bi-lock-fill"></i></span>
                        <input type="password" name="password" className="form-control" id="yourPassword" onChange={handleChange} value={form.password} required />
                        <div className="invalid-feedback">Por favor ingresa tu contraseña!</div>
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

                    <div className="col-6">
                      <label htmlFor="yourAdress" className="form-label">Dirección</label>
                      <input type="text" name="direccion" className="form-control" id="yourAdress" onChange={handleChange} value={form.direccion} required />
                      <div className="invalid-feedback">Por favor, ingresa tu número de documento!</div>
                    </div>

                    <div className="col-12">
                      <div className="form-check">
                        <input className="form-check-input" name="terminos" type="checkbox"  id="acceptTerms" required />
                        <label className="form-check-label" htmlFor="acceptTerms">Estoy de acuerdo y acepto los <Link to="">términos y condiciones</Link></label>
                        <div className="invalid-feedback">Debes aceptar los términos y condiciones antes de continuar.</div>
                      </div>
                    </div>

                    <div className="col-4 m-auto mt-3">
                      <button className="btn btn-primary rounded-pill w-100" type="submit">Crear Cuenta</button>
                    </div>

                    <div className="col-12 text-center">
                      <p className="small mb-0">¿Ya tienes una cuenta? <Link to="/login" style={{ fontWeight: 'bold' }}>Inicia sesión aquí</Link></p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FormRegister;
