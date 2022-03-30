import React, { useState } from 'react';
import Header from '../Header';
import Container from '../Container';
import FormLogin from '../forms/FormLogin'
import FormRegister from '../forms/FormRegister';
import FormForgotPassword from '../forms/FormForgotPassword'
import Footer from "../Footer";
import BodyLandingPage from "../BodyLandingPage";
import FormNewPassword from '../forms/FormNewPassword';
import { login } from '../../auth/login';
import { useCrudUsers } from '../../services/useCrudUsers';

function SystemOutPage({ page }) {
  const [usersDb, setUsersDb] = useState([])
  const [userToRegister, setUserToRegister] = useState(null);

  const {
    registerUser, // Registro de usuarios externos
    resetPassword, // Recuperar contraseña
    newPassword // Restablecer contraseña
  } = useCrudUsers(usersDb, setUsersDb)

  return (
    <>
      <Header />

      {page === "landingPage" &&
        <Container titulo="Plataforma de Gestión Catastral" className="container d-flex align-items-center min-vh-100">
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
