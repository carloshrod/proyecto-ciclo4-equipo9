import React from 'react';
import HeaderUserExt from '../HeaderUserExt';
import Container from '../Container';
import BodyHomeUserExt from "../BodyHomeUserExt";
import BodyMyProfile from '../BodyMyProfile';
import BodyPagarImpuestos from '../BodyPagarImpuestos';
import TableAsociarPredios from '../TableAsociarPredios';
import FormConvenio from '../forms/FormConvenio';
import Footer from "../Footer";

function UserExtPage({ page }) {
    return (
        <>
            <HeaderUserExt />

            {page === "home" &&
                <Container titulo="Plataforma de Gestión Catastral">
                    <BodyHomeUserExt />  {/* Children */}
                </Container>}

            {page === "myProfile" &&
                <Container titulo="Mi Perfil">
                    <BodyMyProfile />  {/* Children */}
                </Container>}

            {page === "pagar" &&
                <Container titulo="Pagar Impuesto Predial">
                    <BodyPagarImpuestos />  {/* Children */}
                </Container>}

            {page === "asociarPredios" &&
                <Container titulo="Asociar Predios">
                    <TableAsociarPredios />  {/* Children */}
                </Container>}

            {page === "convenio" &&
                <div className="col-lg-8 m-auto">
                    <Container titulo="Solicitar Convenio de Pago">
                        <FormConvenio />  {/* Children */}
                    </Container>
                </div>}

            <Footer />
        </>
    )
}

export default UserExtPage;
