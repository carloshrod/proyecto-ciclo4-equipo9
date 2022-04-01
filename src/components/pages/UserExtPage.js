import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Container from '../Container';
import BodyHomeUserExt from "../BodyHomeUserExt";
import BodyMyProfile from '../BodyMyProfile';
import BodyPagarImpuestos from '../BodyPagarImpuestos';
import AsociarPredios from '../AsociarPredios';
import FormConvenio from '../forms/FormConvenio';
import Footer from "../Footer";
import { auth } from '../../auth/auth';
import { Navigate } from 'react-router-dom';
import { helpHttp } from '../../helpers/helpHttp';
import { logout } from '../../auth/logout';
import FormUser from '../forms/FormUser';
import { getPayload } from '../../auth/getPayload';
import { useCrudUsers } from '../../services/useCrudUsers';

function UserExtPage({ page }) {
    const [usersDb, setUsersDb] = useState([])
    const [userToEdit, setUserToEdit] = useState(null);
    let api = helpHttp();
    let url = process.env.REACT_APP_API_URL
    const payload = getPayload();

    useEffect(() => {
        api.get(url + process.env.REACT_APP_API_LISTAR)
            .then((res) => {
                if (!res.err) {
                    if (res.data) {
                        setUsersDb(res.data);
                    }
                } else {
                    setUsersDb(null);
                }
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const {
        updateUser, // Editar mi perfil
        changePassword // Cambiar contraseña
    } = useCrudUsers(usersDb, setUsersDb)

    // Autenticación por rol:
    const getRol = () => {
        if (payload) {
            return payload.rol
        } else {
            return 0
        }
    }
    const rol = getRol();

    return (
        <>
            {auth() && rol === 3 ?
                <>
                    <main className="container-bg">
                        <Header usersDb={usersDb} payload={payload} />

                        {page === "home" &&
                            <Container titulo="Plataforma de Gestión Catastral" className="container d-flex align-items-center min-vh-100">
                                <BodyHomeUserExt />  {/* Children */}
                            </Container>}

                        {page === "myProfile" &&
                            <Container titulo="Mi Perfil" className="container d-flex align-items-center min-vh-100">
                                <BodyMyProfile
                                    usersDb={usersDb}
                                    payload={payload}
                                    changePassword={changePassword}
                                    setUserToEdit={setUserToEdit}
                                    formEdit={
                                        <FormUser
                                            updateUser={updateUser}
                                            userToEdit={userToEdit}
                                            setUserToEdit={setUserToEdit}
                                            btn_text="Editar"
                                        />}
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
