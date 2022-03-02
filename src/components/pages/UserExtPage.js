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
import { helpHttp } from '../../helpers/helpHttp';
import { toast } from 'react-toastify';
import { logout } from '../../auth/logout';

function UserExtPage({ page }) {

    let api = helpHttp();
    let url = process.env.REACT_APP_API_URL

    // Autenticación por rol:
    const tokenIsOk = () => {
        const token = localStorage.getItem("token");
        if (token) {
            const payload = jwtDecode(token);
            return payload.rol;
        }
    }

    const changePassword = (user) => {
        const token = localStorage.getItem("token");
        const payload = jwtDecode(token);
        user.nro_doc = payload.nro_doc;
        let endpoint = url + process.env.REACT_APP_API_CAMBIAR_PASSWORD;
        let options = {
            body: user,
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${token}`
            }
        };

        api.post(endpoint, options).then((res) => {
            if (!res.estado) {
                toast.error("No hay conexión con la base de datos!!!", { autoClose: 10000, theme: "colored" })
            }
            if (!res.err) {
                if (res.estado === "ok") {
                    toast.success(res.msg)
                    setTimeout(() => {
                        logout();
                    }, 5000);
                } else {
                    toast.error(res.msg)
                }
            } else {
                toast.error(res.msg)
            }
        });
    };

    const rol = tokenIsOk();

    return (
        <>
            {auth() && rol === 3 ?
                <>
                    <main className="container-bg">
                        <HeaderUserExt />

                        {page === "home" &&
                            <Container titulo="Plataforma de Gestión Catastral" className="container d-flex align-items-center min-vh-100">
                                <BodyHomeUserExt />  {/* Children */}
                            </Container>}

                        {page === "myProfile" &&
                            <Container titulo="Mi Perfil" className="container d-flex align-items-center min-vh-100">
                                <BodyMyProfile
                                    changePassword={changePassword}
                                />  {/* Children */}
                            </Container>}

                        {page === "pagar" &&
                            <Container titulo="Pagar Impuesto Predial" className="container d-flex align-items-center min-vh-100">
                                <BodyPagarImpuestos />  {/* Children */}
                            </Container>}

                        {page === "asociarPredios" &&
                            <Container titulo="Asociar Predios" className="container d-flex align-items-center min-vh-100">
                                <AsociarPredios />  {/* Children */}
                            </Container>}

                        {page === "convenio" &&
                            <div className="col-lg-8 m-auto">
                                <Container titulo="Solicitar Convenio de Pago" className="container d-flex align-items-center min-vh-100">
                                    <FormConvenio />  {/* Children */}
                                </Container>
                            </div>}

                        <Footer />
                    </main>
                </>
                :
                <>
                    {logout()}
                    <Navigate to="/login" />
                </>
            }
        </>
    )
}

export default UserExtPage;
