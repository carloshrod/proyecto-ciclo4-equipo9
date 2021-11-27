import '../App.css';
import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <main>
    <div class="container">

      <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div class="container pt-5">
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

              <div class="card mb-3">

                <div class="card-body">

                  <div class="pt-4 pb-2">
                    <h5 class="card-title text-center pb-0 fs-4">¿Olvidaste tu contraseña?</h5>
                    <p class="text-center small">Ingresa tu correo electrónico a continuación y te enviaremos un enlace para restablecer tu contraseña</p>
                  </div>

                  <form class="row g-3 needs-validation justify-content-center" novalidate>

                    <div class="col-12">
                      <label for="yourEmail" class="form-label">Correo Electrónico</label>
                      <input type="email" name="email" class="form-control" id="yourEmail" required/>
                      <div class="invalid-feedback">Por favor, ingresa un correo electrónico válido!</div>
                    </div>

                    <div class="col-8">
                      <button class="btn btn-primary w-100" type="submit">Restablecer Contraseña</button>
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
  </main>
  );
}

export default ForgotPassword;
