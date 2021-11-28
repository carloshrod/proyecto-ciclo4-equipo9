import React from 'react';

function ForgotPassword() {
  return (
    <>
    <div class="container">

      <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6 col-md-8 d-flex flex-column align-items-center justify-content-center">

              <div class="card mb-3 form-1">

                <div class="card-body">

                  <div class="pt-4 pb-2">
                    <h5 class="card-title text-center pb-0 fs-4">¿Olvidaste tu contraseña?</h5>
                    <p class="text-center small">Ingresa tu correo electrónico a continuación y te enviaremos un enlace para restablecer tu contraseña</p>
                  </div>

                  <form class="row g-3 needs-validation justify-content-center" novalidate>

                    <div class="col-9">
                      <label for="yourUsername" class="form-label">Correo Electrónico</label>
                      <div class="input-group has-validation">
                        <span class="input-group-text" id="inputGroupPrepend"><i class="bi bi-envelope-fill"></i></span>
                        <input type="email" name="email" class="form-control" id="yourEmail" required/>
                        <div class="invalid-feedback">Por favor, ingresa un correo electrónico válido!</div>
                      </div>
                    </div>

                    <div class="col-7">
                      <button class="btn btn-primary rounded-pill w-100" type="submit">Restablecer Contraseña</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    {/* <!-- End #main --> */}
  </>
  );
}

export default ForgotPassword;
