import React from 'react';
import HeaderUserExt from '../HeaderUserExt';
import Container from '../Container';
import BodyHomeUserExt from "../BodyHomeUserExt";
import BodyMyProfile from '../BodyMyProfile';
import BodyPagarImpuestos from '../BodyPagarImpuestos';
import AsociarPredios from '../AsociarPredios';
import FormConvenio from '../forms/FormConvenio';
import Footer from "../Footer";
import { auth } from '../../auth/auth';
import { Navigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

function UserExtPage({ page }) {

    const tokenIsOk = () => {
        const token = localStorage.getItem("token");
        if (token) {
            const payload = jwtDecode(token);
            return payload.rol;
        }
    }

    const rol = tokenIsOk();

    return (
        <>
            {auth() && rol === 3 ?
                <>
                    <main className="container-bg">
                        <HeaderUserExt />

                        {page === "home" &&
                            <Container titulo="Plataforma de Gestión Catastral" className="container container-center center-v min-vh-100">
                                <BodyHomeUserExt />  {/* Children */}
                            </Container>}

                        {page === "myProfile" &&
                            <Container titulo="Mi Perfil" className="container container-center center-v min-vh-100">
                                <BodyMyProfile />  {/* Children */}
                            </Container>}

                        {page === "pagar" &&
                            <Container titulo="Pagar Impuesto Predial" className="container container-center center-v min-vh-100">
                                <BodyPagarImpuestos />  {/* Children */}
                            </Container>}

                        {page === "asociarPredios" &&
                            <Container titulo="Asociar Predios a su Cuenta" className="container container-center center-v min-vh-100">
                                <AsociarPredios />  {/* Children */}
                            </Container>}

                        {page === "convenio" &&
                            <div className="col-lg-8 m-auto">
                                <Container titulo="Solicitar Convenio de Pago" className="container container-center center-v min-vh-100">
                                    <FormConvenio />  {/* Children */}
                                </Container>
                            </div>}

                        <Footer />
                    </main>
                </>

                :
                <Navigate to="/login" />

            }
        </>
    )
}

export default UserExtPage;
