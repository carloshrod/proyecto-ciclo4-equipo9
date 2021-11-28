import React from 'react';
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
    <div class="container">

      <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-5 col-md-7 d-flex flex-column align-items-center justify-content-center">

              <div class="card mb-3 form-1">

                <div class="card-body">

                  <div class="pt-4 pb-2">
                    <h5 class="card-title text-center pb-0 fs-4">Bienvenido</h5>
                    <p class="text-center small">Ingresa tu usuario y tu contraseña</p>
                  </div>

                  <form class="row g-3 needs-validation justify-content-center" novalidate>

                    <div class="col-10">
                      <label for="yourUsername" class="form-label">Username</label>
                      <div class="input-group has-validation">
                        <span class="input-group-text" id="inputGroupPrepend"><i class="bi bi-person-fill"></i></span>
                        <input type="text" name="username" class="form-control" id="yourUsername" required/>
                        <div class="invalid-feedback">Por favor, ingresa tu usuario!</div>
                      </div>
                    </div>

                    <div class="col-10">
                      <label for="yourPassword" class="form-label">Password</label>
                      <div class="input-group has-validation">
                        <span class="input-group-text" id="inputGroupPrepend"><i class="bi bi-lock-fill"></i></span>
                        <input type="password" name="passwword" class="form-control" id="yourPassword" required/>
                        <div class="invalid-feedback">Por favor, ingresa tu contraseña!</div>
                      </div>
                    </div>

                    <div class="col-10">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe"/>
                        <label class="form-check-label" for="rememberMe">Recordarme</label>
                      </div>
                    </div>
                    <div class="col-6">
                      <button class="btn btn-primary rounded-pill w-100" type="submit">Iniciar Sesión</button>
                    </div>
                    <div class="col-10 text-center">
                      <p class="small mb-0">¿No tienes una cuenta? <Link to="/register" style={{fontWeight: 'bold'}}>Registrate aquí!</Link></p>
                    </div>
                    <div class="col-10 text-center">
                      <p class="small mb-0">¿Olvidaste tu contraseña? <Link to="/forgotPassword" style={{fontWeight: 'bold'}}>Recuperala aquí!</Link></p>
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

export default Login;
