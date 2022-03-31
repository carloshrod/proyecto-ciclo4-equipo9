import React, { useEffect, useState } from 'react';
import HeaderAdmin from "../HeaderAdmin";
import Sidebar from "../Sidebar";
import ContainerAdmin from '../ContainerAdmin';
import FooterAdmin from "../FooterAdmin";
import Dashboard from '../Dashboard';
import BodyMyProfile from '../BodyMyProfile';
import FormUser from '../forms/FormUser';
import TableUsers from '../TableUsers';
import FormPredio from '../forms/FormPredio';
import TablePredios from '../TablePredios';
import { helpHttp } from '../../helpers/helpHttp';
import Loader from '../Loader';
import Message from '../Message';
import { auth } from '../../auth/auth';
import { Navigate } from 'react-router-dom';
import { logout } from '../../auth/logout';
import { getPayload } from '../../auth/getPayload';
import { useCrudUsers } from '../../services/useCrudUsers';
import { useCrudPredios } from '../../services/useCrudPredios';

function AdminUserIntPage({ tipo, page }) {
    const [usersDb, setUsersDb] = useState([])
    const [userToEdit, setUserToEdit] = useState(null);
    const [prediosDb, setPrediosDb] = useState([])
    const [predioToEdit, setPredioToEdit] = useState(null);
    const [historial, setHistorial] = useState([])
    const [error, setError] = useState(null);
    const [msgError, setMsgError] = useState();
    const [loading, setLoading] = useState(false);
    const [inactive, setInactive] = useState(false); // Toggle-Sidebar
    let api = helpHttp();
    let url = process.env.REACT_APP_API_URL;
    const payload = getPayload();

    // ******************** CRUD Users ********************
    // Obtener usuarios:
    useEffect(() => {
        setLoading(true);
        api.get(url + process.env.REACT_APP_API_LISTAR)
            .then((res) => {
                if (!res.err) {
                    setError(null);
                    if (res.data) {
                        setUsersDb(res.data);
                    } else {
                        setError(true);
                        setMsgError("Error, no hay conexión con la base de datos!!!");
                    }
                } else {
                    setUsersDb(null);
                }
                setLoading(false);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const {
        createUser, // Crear usuarios
        updateUser, // Editar usuarios
        deleteUser, // Eliminar usuarios
        changePassword // Cambiar contraseña
    } = useCrudUsers(usersDb, setUsersDb)
    // ******************** End CRUD Users ********************

    // ********************* CRUD predios *********************
    // Obtener predios:
    useEffect(() => {
        setLoading(true);
        api.get(url + process.env.REACT_APP_API_LISTAR_P)
            .then((res) => {
                if (!res.error) {
                    setError(null);
                    if (res.data1) {
                        setPrediosDb(res.data1);
                        setHistorial(res.data2)
                    } else {
                        setError(true);
                        setMsgError("Error, no hay conexión con la base de datos!!!");
                    }
                } else {
                    setPrediosDb(null);
                    // setError(res);
                }
                setLoading(false);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const {
        createPredio, // Crear predios
        updatePredio, // Editar predios
        deletePredio // Eliminar predios
    } = useCrudPredios(prediosDb, setPrediosDb, usersDb, setUsersDb, historial, setHistorial)
    // ******************* End CRUD predios *******************

    // Contar usuarios por rol:
    const countUsers = () => {
        if (usersDb) {
            const cantUsuarios = a => usersDb.filter((e) =>
                (e.rol === a)).length;
            return cantUsuarios;
        }
    }

    // Contar predios:
    const countPredios = () => {
        if (prediosDb) {
            const cantPredios = prediosDb.length;
            return cantPredios;
        }
    }

    // Autenticación por rol:
    const getRol = () => {
        if (payload) {
            return payload
        } else {
            return 0
        }
    }
    const rol = getRol();

    return (
        <>
            {auth() && rol !== 3 ?
                <>
                    <main className={inactive ? "toggle-sidebar" : ""}>
                        <HeaderAdmin btn={<div onClick={() => { setInactive(!inactive) }}>
                            <i className="nav-home-ue bi bi-list toggle-sidebar-btn"></i>
                        </div>} />

                        <Sidebar/>

                        {page === "home" &&
                            <ContainerAdmin titulo="Dashboard" linkTo="#">
                                <Dashboard
                                    cantidadUsuarios={usersDb ? countUsers() : countUsers}
                                    cantidadPredios={countPredios()}
                                    usersDb={usersDb}
                                    prediosDb={prediosDb}
                                    historial={historial}
                                    error={error && <Message msg={msgError} bgColor="#dc3545" />}
                                />  {/* Children */}
                            </ContainerAdmin>}

                        {page === "myProfile" &&
                            <ContainerAdmin titulo="Mi Perfil" linkTo="#" >
                                <BodyMyProfile
                                    payload={payload}
                                    usersDb={usersDb}
                                    setUserToEdit={setUserToEdit}
                                    changePassword={changePassword}
                                    formEdit={
                                        <FormUser
                                            usersDb={usersDb}
                                            updateUser={updateUser}
                                            userToEdit={userToEdit}
                                            setUserToEdit={setUserToEdit}
                                            btn_text="Editar"
                                        />}
                                />  {/* Children */}
                            </ContainerAdmin>}

                        {page === "createUser" &&
                            <ContainerAdmin titulo="Crear Usuario" linkTo="#" >
                                <FormUser
                                    titulo="Ingrese los datos del usuario"
                                    usersDb={usersDb}
                                    createUser={createUser}
                                    setUserToEdit={setUserToEdit}
                                    btn_text="Crear"
                                />  {/* Children */}
                            </ContainerAdmin>}

                        {page === "manageUsers" &&
                            <ContainerAdmin titulo="Gestionar Usuarios" linkTo="#" >
                                {loading && <Loader />}
                                <TableUsers
                                    users={usersDb.filter((user) => user.rol !== 1)}
                                    setUserToEdit={setUserToEdit}
                                    deleteUser={deleteUser}
                                    error={error && <Message msg={msgError} bgColor="#dc3545" />}
                                />
                            </ContainerAdmin>}

                        {page === "editUser" &&
                            <ContainerAdmin titulo="Editar Usuario" linkTo="/admin/manage-users" subtitulo="Gestionar Usuarios" sep="&nbsp;/&nbsp;" subtitulo2="Editar Usuario">
                                <FormUser
                                    titulo="Datos del usuario a editar"
                                    usersDb={usersDb}
                                    updateUser={updateUser}
                                    userToEdit={userToEdit}
                                    setUserToEdit={setUserToEdit}
                                    btn_text="Editar"
                                />  {/* Children */}
                            </ContainerAdmin>}

                        {page === "createPredio" &&
                            <ContainerAdmin titulo="Crear Predio" linkTo="#">
                                <FormPredio
                                    titulo="Ingrese los datos del predio"
                                    prediosDb={prediosDb}
                                    createPredio={createPredio}
                                    updatePredio={updatePredio}
                                    setPredioToEdit={setPredioToEdit}
                                    btn_text="Crear"
                                />  {/* Children */}
                            </ContainerAdmin>}

                        {page === "managePredio" && <ContainerAdmin titulo="Gestionar Predios" linkTo="#">
                            {loading && <Loader />}
                            <TablePredios
                                predios={prediosDb}
                                setPredioToEdit={setPredioToEdit}
                                deletePredio={deletePredio}
                                linkTo={tipo === "admin" ? "/admin/manage-predios/edit" : "/user-int/manage-predios/edit"}
                                error={error && <Message msg={msgError} bgColor="#dc3545" />}
                            />
                        </ContainerAdmin>}

                        {page === "editPredio" &&
                            <ContainerAdmin
                                titulo="Editar Predio"
                                linkTo={tipo === "admin" ? "/admin/manage-predios" : "/user-int/manage-predios"}
                                subtitulo="Gestionar Predios"
                                sep="&nbsp;/&nbsp;"
                                subtitulo2="Editar Predio">
                                <FormPredio
                                    titulo="Datos del predio a editar"
                                    prediosDb={prediosDb}
                                    createPredio={createPredio}
                                    updatePredio={updatePredio}
                                    predioToEdit={predioToEdit}
                                    setPredioToEdit={setPredioToEdit}
                                    btn_text="Editar"
                                />  {/* Children */}
                            </ContainerAdmin>}

                        <FooterAdmin />
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

export default AdminUserIntPage;
