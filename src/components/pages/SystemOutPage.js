import React, { useState } from 'react';
import HeaderSystemOut from "../HeaderSystemOut";
import Container from '../Container';
import FormLogin from '../forms/FormLogin'
import FormRegister from '../forms/FormRegister';
import FormForgotPassword from '../forms/FormForgotPassword'
import Footer from "../Footer";
import BodyLandingPage from "../BodyLandingPage";
import { helpHttp } from '../../helpers/helpHttp';
import Message from '../Message';

function SystemOutPage({ page }) {

  const [usersDb, setUsersDb] = useState([])
  const [userToRegister, setUserToRegister] = useState(null);
  const [error, setError] = useState();
  const [msgError, setMsgError] = useState();
  const [success, setSuccess] = useState();
  const [msgSuccess, setMsgSuccess] = useState();

  let api = helpHttp();
  let url = process.env.REACT_APP_API_URL;

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
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setSuccess(false);
        setError(true);
        setMsgError("Su cuenta no pudo ser creada. Intentelo más tarde!!!");
        setTimeout(() => setError(false), 5000);    
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
            error={error && <Message msg={msgError} bgColor="#dc3545"/>}
            success={success && <Message msg={msgSuccess} bgColor="#45CB67"/>}
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
