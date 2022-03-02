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
import { login } from '../../auth/login';

function SystemOutPage({ page }) {

  const [usersDb, setUsersDb] = useState([])
  const [userToRegister, setUserToRegister] = useState(null);

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
      if (!res.estado) {
        toast.error("No hay conexión con la base de datos!!!", { autoClose: 10000, theme: "colored" })
      }
      if (res.data) {
        setUsersDb([...usersDb, res.data]);
        toast.success(res.msg);
        setTimeout(() => {
          window.location.href = "http://localhost:3000/login"
        }, 5000);
      } else {
        toast.error(res.msg);
      }
    })
  };

  // Recuperar contraseña:
  const resetPassword = (user) => {
    let endpoint = url + process.env.REACT_APP_API_RESET_PASSWORD;
    let options = {
      body: user,
      headers: { "content-type": "application/json" },
    }

    api.post(endpoint, options).then((res) => {
      if (!res.estado) {
        toast.error("No hay conexión con la base de datos!!!", { autoClose: 10000, theme: "colored" })
      }
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
        <Container titulo="Plataforma de Gestión Catastral" className="container d-flex align-items-center min-vh-100 mt-5">
          <BodyLandingPage />  {/* Children */}
        </Container>}

      {page === "login" &&
        <Container className="container d-flex align-items-center min-vh-100">
          <FormLogin
            login={login}
          />  {/* Children */}
        </Container>}

      {page === "register" &&
        <Container className="container d-flex align-items-center min-vh-100">
          <FormRegister
            registerUser={registerUser}
            userToRegister={userToRegister}
            setUserToRegister={setUserToRegister}
          />  {/* Children */}
        </Container>}

      {page === "resetPassword" &&
        <Container className="container d-flex align-items-center min-vh-100">
          <FormForgotPassword
            resetPassword={resetPassword}
          />  {/* Children */}
        </Container>}

      {page === "newPassword" &&
        <Container className="container d-flex align-items-center min-vh-100">
          <FormNewPassword
            newPassword={newPassword}
          />  {/* Children */}
        </Container>}

      <Footer />
    </>
  );
}

export default SystemOutPage;
