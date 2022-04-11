import React, { useState } from 'react';
import Header from '../components/shared/Header';
import Container from '../components/shared/Container';
import LandingPage from "../components/systemOut/LandingPage";
import FormLogin from '../components/systemOut/FormLogin'
import FormRegister from '../components/systemOut/FormRegister';
import FormForgotPassword from '../components/systemOut/FormForgotPassword';
import FormNewPassword from '../components/systemOut/FormNewPassword';
import Footer from "../components/shared/Footer";
import { login } from '../auth/login';
import { useCrudUsers } from '../services/useCrudUsers';
import { auth } from '../auth/auth';
import { Navigate } from 'react-router-dom';

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
      {!auth() ?
        <>
          <Header />

          {page === "landingPage" &&
            <Container titulo="Plataforma de Gestión Catastral" className="container d-flex align-items-center min-vh-100">
              <LandingPage />  {/* Children */}
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
        :
        <>
          <Navigate to={-1} />
        </>
      }
    </>
  );
}

export default SystemOutPage;
