import React, { useState, useEffect } from 'react';
import Header from '../components/shared/Header';
import Container from '../components/shared/Container';
import HomeUserExt from "../components/userExt/HomeUserExt";
import MyProfile from '../components/shared/MyProfile';
import FormUser from '../components/admin/FormUser';
import PagarImpuestos from '../components/userExt/PagarImpuestos';
import AsociarPredios from '../components/userExt/AsociarPredios';
import Loader from '../components/shared/Loader';
import Footer from "../components/shared/Footer";
import { auth } from '../auth/auth';
import { Navigate } from 'react-router-dom';
import { helpHttp } from '../helpers/helpHttp';
import { logout } from '../auth/logout';
import { getPayload } from '../auth/getPayload';
import { useCrudUsers } from '../services/useCrudUsers';

function UserExtPage({ page }) {
    const [usersDb, setUsersDb] = useState([])
    const [userToEdit, setUserToEdit] = useState(null);
    const [loading, setLoading] = useState(false);

    let api = helpHttp();
    let url = process.env.REACT_APP_API_URL
    const payload = getPayload();

    useEffect(() => {
        setLoading(true);
        api.get(url + process.env.REACT_APP_API_LISTAR)
            .then((res) => {
                if (!res.err) {
                    if (res.data) {
                        setUsersDb(res.data);
                    }
                } else {
                    setUsersDb(null);
                }
                setLoading(false);
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
                                <HomeUserExt />  {/* Children */}
                            </Container>}

                        {page === "myProfile" &&
                            <Container titulo="Mi Perfil" className="container d-flex align-items-center min-vh-100">
                                <MyProfile
                                    loader={loading && <Loader />}
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

                        {page === "asociarPredios" &&
                            <Container titulo="Asociar Predios" className="container d-flex align-items-center min-vh-100">
                                <AsociarPredios />  {/* Children */}
                            </Container>}

                        {page === "pagar" &&
                            <Container titulo="Pagar Impuesto Predial" className="container d-flex align-items-center min-vh-100">
                                <PagarImpuestos />  {/* Children */}
                            </Container>}

                        <Footer />
                    </main>
                </>
                :
                <>
                    {logout()}
                    <Navigate to={-1} />
                </>
            }
        </>
    )
}

export default UserExtPage;
