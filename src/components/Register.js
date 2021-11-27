import '../App.css';
import { Link } from "react-router-dom";

function Register() {
  return (
    <main>
    <div class="container">

      <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div class="container pt-5">
          <div class="row justify-content-center">
            <div class="col-lg-10 col-md-8 d-flex flex-column align-items-center justify-content-center">

              <div class="card mb-3">

                <div class="card-body">

                  <div class="pt-4 pb-2">
                    <h5 class="card-title text-center pb-0 fs-4">Crea una cuenta</h5>
                    <p class="text-center small">Ingresa tu información personal para crear tu cuenta</p>
                  </div>

                  <form class="row g-3 needs-validation" novalidate>
                    <div class="col-6">
                      <label for="yourName" class="form-label">Nombres</label>
                      <input type="text" name="name" class="form-control" id="yourName" required/>
                      <div class="invalid-feedback">Por favor, ingresa tus nombres!</div>
                    </div>

                    <div class="col-6">
                      <label for="yourName" class="form-label">Apellidos</label>
                      <input type="text" name="name" class="form-control" id="yourName" required/>
                      <div class="invalid-feedback">Por favor, ingresa tus apellidos!</div>
                    </div>

                    <div class="col-6">
                      <label for="yourName" class="form-label">Tipo de Documento</label>
                      <select class="form-select" aria-label="Default select example">
                      <option selected>Seleccionar</option>
                      <option value="1">CC</option>
                      <option value="2">TI</option>
                      <option value="3">Pasaporte</option>
                    </select>
                      <div class="invalid-feedback"></div>
                    </div>

                    <div class="col-6">
                      <label for="yourName" class="form-label">Número de Documento</label>
                      <input type="number" name="name" class="form-control" id="yourName" required/>
                      <div class="invalid-feedback">Por favor, ingresa tu número de documento!</div>
                    </div>

                    <div class="col-6">
                      <label for="yourUsername" class="form-label">Correo Electrónico</label>
                      <div class="input-group has-validation">
                        <span class="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="email" name="email" class="form-control" id="yourEmail" required/>
                        <div class="invalid-feedback">Por favor, ingresa un correo electrónico válido!</div>
                      </div>
                    </div>

                    <div class="col-6">
                      <label for="yourPassword" class="form-label">Contraseña</label>
                      <input type="password" name="password" class="form-control" id="yourPassword" required/>
                      <div class="invalid-feedback">Por favor ingresa tu contraseña!</div>
                    </div>

                    <div class="col-12">
                      <div class="form-check">
                        <input class="form-check-input" name="terms" type="checkbox" value="" id="acceptTerms" required/>
                        <label class="form-check-label" for="acceptTerms">Estoy de acuerdo y acepto los <a href="#">términos y condiciones</a></label>
                        <div class="invalid-feedback">Debes aceptar los términos y condiciones antes de continuar.</div>
                      </div>
                    </div>
                    <div class="col-4 m-auto mt-3">
                      <button class="btn btn-primary w-100" type="submit">Crear Cuenta</button>
                    </div>
                    <div class="col-12 text-center">
                      <p class="small mb-0">¿Ya tienes una cuenta? <Link to="/login">Inicia sesión aquí</Link></p>
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

export default Register;
