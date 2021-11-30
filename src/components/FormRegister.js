import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
    <div className="container">

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

                  <form className="row g-3 needs-validation" novalidate>
                    <div className="col-6">
                      <label for="yourName" className="form-label">Nombres</label>
                      <input type="text" name="name" className="form-control" id="yourName" required/>
                      <div className="invalid-feedback">Por favor, ingresa tus nombres!</div>
                    </div>

                    <div className="col-6">
                      <label for="yourName" className="form-label">Apellidos</label>
                      <input type="text" name="name" className="form-control" id="yourName" required/>
                      <div className="invalid-feedback">Por favor, ingresa tus apellidos!</div>
                    </div>

                    <div className="col-6">
                      <label for="yourName" className="form-label">Tipo de Documento</label>
                      <select className="form-select" aria-label="Default select example">
                      <option selected>Seleccionar</option>
                      <option value="1">CC</option>
                      <option value="2">TI</option>
                      <option value="3">Pasaporte</option>
                    </select>
                      <div className="invalid-feedback"></div>
                    </div>

                    <div className="col-6">
                      <label for="yourName" className="form-label">Número de Documento</label>
                      <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend"><i className="bi bi-fingerprint"></i></span>
                        <input type="number" name="name" className="form-control" id="yourName" required/>
                        <div className="invalid-feedback">Por favor, ingresa tu número de documento!</div>
                      </div>
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
                      <label for="yourPassword" className="form-label">Contraseña</label>
                      <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend"><i className="bi bi-lock-fill"></i></span>
                        <input type="password" name="password" className="form-control" id="yourPassword" required/>
                        <div className="invalid-feedback">Por favor ingresa tu contraseña!</div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-check">
                        <input className="form-check-input" name="terms" type="checkbox" value="" id="acceptTerms" required/>
                        <label className="form-check-label" for="acceptTerms">Estoy de acuerdo y acepto los <a href="#">términos y condiciones</a></label>
                        <div className="invalid-feedback">Debes aceptar los términos y condiciones antes de continuar.</div>
                      </div>
                    </div>
                    <div className="col-4 m-auto mt-3">
                      <button className="btn btn-primary rounded-pill w-100" type="submit">Crear Cuenta</button>
                    </div>
                    <div className="col-12 text-center">
                      <p className="small mb-0">¿Ya tienes una cuenta? <Link to="/login" style={{fontWeight: 'bold'}}>Inicia sesión aquí</Link></p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </>
  );
}

export default Register;
