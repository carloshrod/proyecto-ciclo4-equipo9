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
import { toast } from 'react-toastify';
import { logout } from '../../auth/logout';
import axios from 'axios';
import FormUser from '../forms/FormUser';
import { getToken } from '../../auth/getToken';

function UserExtPage({ page }) {
    const [usersDb, setUsersDb] = useState([])
    const [userToEdit, setUserToEdit] = useState(null);
    let api = helpHttp();
    let url = process.env.REACT_APP_API_URL
    const { token, payload } = getToken()

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

    const updateUser = async (formData) => {
        let endpoint = url + process.env.REACT_APP_API_EDITAR;
        let options = {
            headers: {
                "authorization": `Bearer ${token}`
            }
        };
        await axios.post(endpoint, formData, options).then((res) => {
            if (!res.data.estado) {
                toast.error("No hay conexión con la base de datos!!!", { autoClose: 10000, theme: "colored" })
            }
            if (!res.err) {
                if (res.data.estado === "ok") {
                    let newData = usersDb.map((e) => (e._id === res.data.user._id ? res.data.user : e));
                    setUsersDb(newData);
                    toast.success(res.data.msg)
                } else {
                    toast.error(res.data.msg)
                }
            } else {
                toast.error(res.data.msg)
            }
        });
    };

    const changePassword = (user) => {
        const token = localStorage.getItem("token");
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

    // Autenticación por rol:
    const rol = payload.rol;

    return (
        <>
            {auth() && rol === 3 ?
                <>
                    <main className="container-bg">
                        <Header />

                        {page === "home" &&
                            <Container titulo="Plataforma de Gestión Catastral" className="container d-flex align-items-center min-vh-100">
                                <BodyHomeUserExt />  {/* Children */}
                            </Container>}

                        {page === "myProfile" &&
                            <Container titulo="Mi Perfil" className="container d-flex align-items-center min-vh-100">
                                <BodyMyProfile
                                    payload={payload}
                                    usersDb={usersDb}
                                    changePassword={changePassword}
                                    setUserToEdit={setUserToEdit}
                                    formEdit={
                                        <FormUser
                                            titulo="Datos del usuario a editar"
                                            usersDb={usersDb}
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
