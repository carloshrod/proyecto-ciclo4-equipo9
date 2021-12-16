import React from 'react';

function FormForgotPassword() {
  return (
    <>
      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 d-flex flex-column align-items-center justify-content-center">

              <div className="card mb-3 form-1">

                <div className="card-body">

                  <div className="col-8 pt-4 pb-2 m-auto">
                    <h5 className="card-title text-center pb-0 fs-4">¿Olvidaste tu contraseña?</h5>
                    <p className="text-center small">Ingresa tu correo electrónico a continuación y te enviaremos un enlace para restablecer tu contraseña</p>
                  </div>

                  <form className="row g-3 needs-validation justify-content-center" novalidate>

                    <div className="col-9">
                      <label for="yourUsername" className="form-label">Correo Electrónico</label>
                      <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend"><i className="bi bi-envelope-fill"></i></span>
                        <input type="email" name="email" className="form-control" id="yourEmail" required/>
                        <div className="invalid-feedback">Por favor, ingresa un correo electrónico válido!</div>
                      </div>
                    </div>

                    <div className="col-7">
                      <button className="btn btn-primary rounded-pill w-100" type="submit">Restablecer Contraseña</button>
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

export default FormForgotPassword;
