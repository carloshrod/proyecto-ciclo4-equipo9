import React, { useState } from 'react';
import HeaderSystemOut from "../HeaderSystemOut";
import Container from '../Container';
import FormLogin from '../forms/FormLogin'
import FormRegister from '../forms/FormRegister';
import FormForgotPassword from '../forms/FormForgotPassword'
import Footer from "../Footer";
import BodyLandingPage from "../BodyLandingPage";
import { helpHttp } from '../../helpers/helpHttp';

function SystemOutPage({ page }) {

  const [usersDb, setUsersDb] = useState([])
  const [userToRegister, setUserToRegister] = useState(null);
  const [error, setError] = useState();
  const [msgError, setMsgError] = useState();
  const [success, setSuccess] = useState();
  const [msgSuccess, setMsgSuccess] = useState();

  let api = helpHttp();
  let url = "http://localhost:8080";

  // Registro de usuarios:
  const registerUser = (user) => {
    user.rol = 3; // Rol 3 -> Usuario Externo

    let endpoint = `${url}/users/registro/`;

    let options = {
      body: user,
      headers: { "content-type": "application/json" },
    };

    api.post(endpoint, options).then((res) => {
      console.log(res)
      console.log(usersDb)
      if (!res.err) {
        setUsersDb([...usersDb, res.data]);
        setError(false)
        setSuccess(true);
        setMsgSuccess("Su cuenta fue creada exitosamente!!!");
      } else {
        setSuccess(false);
        setError(true);
        setMsgError("Su cuenta no pudo ser creada. Intentelo más tarde!!!");      
      }
    });
  };

  return (
    <>
      <HeaderSystemOut />

      {page === "landingPage" &&
        <Container titulo="Plataforma de Gestión Catastral" className="container container-center center-v min-vh-100">
          <BodyLandingPage />  {/* Children */}
        </Container>}

      {page === "login" &&
        <Container className="container container-center center-v min-vh-100">
          <FormLogin />  {/* Children */}
        </Container>}

      {page === "register" &&
        <Container className="container container-center center-v min-vh-100">
          <FormRegister
            registerUser={registerUser}
            userToRegister={userToRegister}
            setUserToRegister={setUserToRegister}
            error={error && <div className=" col-12 alert alert-danger text-center" role="alert">{msgError}</div>}
            success={success && <div className=" col-12 alert alert-success text-center" role="alert">{msgSuccess}</div>}
          />  {/* Children */}
        </Container>}

      {page === "forgotPassword" &&
        <Container className="container container-center center-v min-vh-100">
          <FormForgotPassword />  {/* Children */}
        </Container>}

      <Footer />
    </>
  );
}

export default SystemOutPage;
