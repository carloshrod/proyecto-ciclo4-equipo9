import React from 'react';
import HeaderSystemOut from "../HeaderSystemOut";
import Container from '../Container';
import FormLogin from '../forms/FormLogin'
import FormRegister from '../forms/FormRegister';
import FormForgotPassword from '../forms/FormForgotPassword'
import Footer from "../Footer";
import BodyLandingPage from "../BodyLandingPage";

function SystemOutPage({ page }) {
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
          <FormRegister />  {/* Children */}
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
