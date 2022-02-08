import jwtDecode from 'jwt-decode';
import React, { useRef, useState } from 'react';
import { Link } from "react-router-dom";
import Message from '../Message';
import { toast } from 'react-toastify';


function FormLogin() {

  const [data, setData] = useState({
    email: "",
    password: "",
    recordarme: false
  })

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }

  const enviarDatos = (event) => {
    event.preventDefault();
  }

  const [error, setError] = useState();
  const [msgError, setMsgError] = useState();
  const emailRef = useRef();
  const passwordRef = useRef();

  let url = process.env.REACT_APP_API_URL

  function login() {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    fetch(`${url}/users/login`, {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify({ email, password })
    }).then(res => res.json())
      .then(res => {
        if (res.estado === "ok") {
          localStorage.setItem("token", res.token);
          const payload = jwtDecode(res.token);
          if (payload.rol === 3) {
            window.location.href = res.url;
          } else if (payload.rol === 2) {
            window.location.href = res.url;
          } else if (payload.rol === 1) {
            window.location.href = res.url;
          }
        } else {
          toast.error(res.msg)
        }
      }).catch( () => {
        setError(true);
        setMsgError("Error, no hay conexión con la base de datos!!!");
      })
  }

  return (
    <>
      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
          <div className="row justify-content-center">

          {error && <Message msg={msgError} bgColor="#dc3545"/>}

            <div className="col-lg-5 col-md-7 d-flex flex-column align-items-center justify-content-center">        
              <div className="card mb-3 form-1">
                <div className="card-body">
                  <div className="pt-4 pb-2">
                    <h5 className="card-title text-center pb-0 fs-4">Bienvenido</h5>
                    <p className="text-center small">Ingresa tu usuario y tu contraseña</p>
                  </div>
                  {/* ******************** Form Login ******************** */}
                  <form className="row g-3 needs-validation justify-content-center" onSubmit={enviarDatos} noValidate>

                    <div className="col-10">
                      <label htmlFor="idUsuario" className="form-label">Usuario</label>
                      <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend"><i className="bi bi-person-fill"></i></span>
                        <input ref={emailRef} type="text" name="email" className="form-control" id="idUsuario" value={data.email} onChange={handleInputChange} required />
                        <div className="invalid-feedback">Por favor, ingresa tu usuario!</div>
                      </div>
                    </div>

                    <div className="col-10">
                      <label htmlFor="idPassword" className="form-label">Contraseña</label>
                      <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend"><i className="bi bi-lock-fill"></i></span>
                        <input ref={passwordRef} type="password" name="password" className="form-control" id="idPassword" value={data.password} onChange={handleInputChange} required />
                        <div className="invalid-feedback">Por favor, ingresa tu contraseña!</div>
                      </div>
                    </div>

                    <div className="col-6">
                      <button onClick={login} className="btn btn-primary rounded-pill w-100" type="submit">Iniciar Sesión</button>
                    </div>

                    <div className="col-10 text-center">
                      <p className="small mb-0">¿No tienes una cuenta? <Link to="/register" style={{ fontWeight: 'bold' }}>Registrate aquí!</Link></p>
                    </div>

                    <div className="col-10 text-center">
                      <p className="small mb-0">¿Olvidaste tu contraseña? <Link to="/forgot-password" style={{ fontWeight: 'bold' }}>Recuperala aquí!</Link></p>
                    </div>
                  </form>
                  {/* ******************** End Form Login ******************** */}

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FormLogin;
