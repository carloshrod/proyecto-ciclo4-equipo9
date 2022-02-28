import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useFormRegister } from '../../hooks/useFormRegister';
import { inputUsersRegister } from '../../tools/inputProps';
import InputForm from '../InputForm';
import Message from '../Message';

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

function FormRegister({ registerUser, userToRegister, setUserToRegister, error, msgError }) {

  const [terms, setTerms] = useState(false);

  const {
    form,
    reset,
    handleChange,
    handleSubmit
  } = useFormRegister(initialForm, registerUser, userToRegister, setUserToRegister, terms)

  return (
    <>
      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container pt-2">
          <div className="row justify-content-center">

          {error && <Message msg={msgError} bgColor="#dc3545" />}

            <div className="col-lg-10 col-md-8 d-flex flex-column align-items-center justify-content-center">
              <div className="card form-1">
                <div className="card-body">
                  <div className="pt-4 pb-2">
                    <h5 className="card-title text-center pb-0 fs-4">¡Registrate!</h5>
                    <p className="text-center small">Ingresa tu información personal para crear tu cuenta</p>
                  </div>

                  <form className="row g-3 needs-validation mt-1" onSubmit={handleSubmit} noValidate>

                    {inputUsersRegister.map((input) => (
                      <InputForm
                        key={input.id}
                        type={input.type}
                        {...input}
                        value={form[input.name]}
                        onChange={handleChange}
                        reset={reset}
                      />
                    ))}

                    <div className="col-12 ms-5">
                      <div className="form-check">
                        <input className="form-check-input" name="terminos" type="checkbox" id="acceptTerms" onChange={(e) => setTerms(e.target.checked)} required />
                        <label className="form-check-label" htmlFor="acceptTerms">Estoy de acuerdo y acepto los <a href="https://www.mintic.gov.co/portal/715/articles-62124_politica_tratamiento_datos_personales_u20200917.pdf" target="_blank" rel="noreferrer">términos y condiciones</a></label>
                        <div className="invalid-feedback">Debes aceptar los términos y condiciones antes de continuar.</div>
                      </div>
                    </div>

                    <div className="col-5 col-lg-3 m-auto mt-3">
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
