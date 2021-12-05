import React from 'react';
import HeaderSystemOut from "../HeaderSystemOut";
import Container from '../Container';
import Footer from "../Footer";
import BodyLandingPage from "../BodyLandingPage";

function LandingPage() {
  return (
    <>
      <HeaderSystemOut />
      <Container titulo="Plataforma de Gestión Catastral">
        <BodyLandingPage /> {/* Children */}
      </Container>
      <Footer />
    </>
  );
}

export default LandingPage;
