import React from 'react';
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
    <div className="container">

      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-7 d-flex flex-column align-items-center justify-content-center">

              <div className="card mb-3 form-1">

                <div className="card-body">

                  <div className="pt-4 pb-2">
                    <h5 className="card-title text-center pb-0 fs-4">Bienvenido</h5>
                    <p className="text-center small">Ingresa tu usuario y tu contraseña</p>
                  </div>

                  <form className="row g-3 needs-validation justify-content-center" novalidate>

                    <div className="col-10">
                      <label for="yourUsername" className="form-label">Username</label>
                      <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend"><i className="bi bi-person-fill"></i></span>
                        <input type="text" name="username" className="form-control" id="yourUsername" required/>
                        <div className="invalid-feedback">Por favor, ingresa tu usuario!</div>
                      </div>
                    </div>

                    <div className="col-10">
                      <label for="yourPassword" className="form-label">Password</label>
                      <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend"><i className="bi bi-lock-fill"></i></span>
                        <input type="password" name="passwword" className="form-control" id="yourPassword" required/>
                        <div className="invalid-feedback">Por favor, ingresa tu contraseña!</div>
                      </div>
                    </div>

                    <div className="col-10">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe"/>
                        <label className="form-check-label" for="rememberMe">Recordarme</label>
                      </div>
                    </div>
                    <div className="col-6">
                      <button className="btn btn-primary rounded-pill w-100" type="submit">Iniciar Sesión</button>
                    </div>
                    <div className="col-10 text-center">
                      <p className="small mb-0">¿No tienes una cuenta? <Link to="/register" style={{fontWeight: 'bold'}}>Registrate aquí!</Link></p>
                    </div>
                    <div className="col-10 text-center">
                      <p className="small mb-0">¿Olvidaste tu contraseña? <Link to="/forgotPassword" style={{fontWeight: 'bold'}}>Recuperala aquí!</Link></p>
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
