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
      console.log(res.data)
      console.log(usersDb)
      if (!res.err) {
        setUsersDb([...usersDb, res.data]);
      } else {
        window.alert('Error, tu cuenta no pudo ser creada. Intentalo más tarde.');
      }
    });
  };

  return (
    <>
      <HeaderSystemOut />

      {page === "landingPage" &&
        <Container titulo="Plataforma de Gestión Catastral">
          <BodyLandingPage />  {/* Children */}
        </Container>}

      {page === "login" &&
        <Container>
          <FormLogin />  {/* Children */}
        </Container>}

      {page === "register" &&
        <Container>
          <FormRegister
            registerUser={registerUser}
            userToRegister={userToRegister}
            setUserToRegister={setUserToRegister}
          />  {/* Children */}
        </Container>}

      {page === "forgotPassword" &&
        <Container>
          <FormForgotPassword />  {/* Children */}
        </Container>}

      <Footer />
    </>
  );
}

export default SystemOutPage;
