import React, { useState } from 'react';
import HeaderSystemOut from "../HeaderSystemOut";
import Container from '../Container';
import FormLogin from '../forms/FormLogin'
import FormRegister from '../forms/FormRegister';
import FormForgotPassword from '../forms/FormForgotPassword'
import Footer from "../Footer";
import BodyLandingPage from "../BodyLandingPage";
import { helpHttp } from '../../helpers/helpHttp';
import { toast } from 'react-toastify'
import FormNewPassword from '../forms/FormNewPassword';
import jwtDecode from 'jwt-decode';

function SystemOutPage({ page }) {

  const [usersDb, setUsersDb] = useState([])
  const [userToRegister, setUserToRegister] = useState(null);
  const [error, setError] = useState();
  const [msgError, setMsgError] = useState();

  let api = helpHttp();
  let url = process.env.REACT_APP_API_URL;

  // Registro de usuarios:
  const registerUser = (user) => {
    user.rol = 3; // Rol 3 -> Usuario Externo
    let endpoint = url + process.env.REACT_APP_API_REGISTRO;
    let options = {
      body: user,
      headers: { "content-type": "application/json" },
    };

    api.post(endpoint, options).then((res) => {
      if (res.data) {
        setUsersDb([...usersDb, res.data]);
        toast.success(res.msg);
      } else {
        toast.error(res.msg);
      }
    })
  };

  // Login de usuarios:
  const login = (user) => {
    let endpoint = url + process.env.REACT_APP_API_LOGIN;
    let options = {
      body: user,
      headers: { "content-type": "application/json" },
    };

    api.post(endpoint, options).then(res => {
      if (res.estado) {
        if (res.estado === "ok") {
          setError(false);
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
          setError(false);
          toast.error(res.msg)
        }
      } else {
        setError(true);
        setMsgError("Error, no hay conexión con la base de datos!!!");
      }
    })
  }

  // Olvidó contraseña:
  const resetPassword = (user) => {
    let endpoint = url + process.env.REACT_APP_API_RESET_PASSWORD;
    let options = {
      body: user,
      headers: { "content-type": "application/json" },
    }

    api.post(endpoint, options).then((res) => {
      if (!res.error) {
        toast.info(res.msg)
      } else {
        toast.info(res.msg)
      }
    })
  }

  // Restablecer contraseña:
  const newPassword = (user, token) => {
    user.sentToken = token;
    console.log(token);
    let endpoint = url + process.env.REACT_APP_API_NEW_PASSWORD;
    let options = {
      body: user,
      headers: { "content-type": "application/json" },
    }
    console.log(user);

    api.post(endpoint, options).then((res) => {
      if (!res.error) {
        if (res.estado === "ok") {
          toast.success(res.msg)
          setTimeout(() => {
            window.location.href = "http://localhost:3000/login"
          }, 5000);
        } else {
          toast.error(res.msg)
        }
      } else {
        toast.error(res.msg)
      }
    })
  }

  return (
    <>
      <HeaderSystemOut />

      {page === "landingPage" &&
        <Container titulo="Plataforma de Gestión Catastral" className="container container-center center-v min-vh-100">
          <BodyLandingPage />  {/* Children */}
        </Container>}

      {page === "login" &&
        <Container className="container container-center center-v min-vh-100">
          <FormLogin
            login={login}
            error={error}
            msgError={msgError}
          />  {/* Children */}
        </Container>}

      {page === "register" &&
        <Container className="container container-center center-v min-vh-100">
          <FormRegister
            registerUser={registerUser}
            userToRegister={userToRegister}
            setUserToRegister={setUserToRegister}
          />  {/* Children */}
        </Container>}

      {page === "resetPassword" &&
        <Container className="container container-center center-v min-vh-100">
          <FormForgotPassword
            resetPassword={resetPassword}
          />  {/* Children */}
        </Container>}

      {page === "newPassword" &&
        <Container className="container container-center center-v min-vh-100">
          <FormNewPassword
            newPassword={newPassword}
          />  {/* Children */}
        </Container>}

      <Footer />
    </>
  );
}

export default SystemOutPage;
