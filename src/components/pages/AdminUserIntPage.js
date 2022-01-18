import React, { useEffect, useState } from 'react';
import HeaderAdmin from "../HeaderAdmin";
import HeaderUserInt from '../HeaderUserInt';
import Sidebar from "../Sidebar";
import ContainerAdmin from '../ContainerAdmin';
import FooterAdmin from "../FooterAdmin";
import Dashboard from '../Dashboard';
import BodyMyProfile from '../BodyMyProfile';
import FormUser from '../forms/FormUser';
import TableUsers from '../TableUsers';
import FormPredio from '../forms/FormPredio';
import TablePredios from '../TablePredios';
import FormFechaPagoDcto from '../forms/FormFechaPagoDcto';
import FormEjecutarAlgoritmo from '../forms/FormEjecutarAlgoritmo';
import { helpHttp } from '../../helpers/helpHttp';
import Loader from '../Loader';
import Message from '../Message';
import { auth } from '../../auth/auth';
import { Navigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import SidebarItem from '../SidebarItem';

function AdminUserIntPage({ tipo, page }) {

    // ******************** CRUD Users ********************
    const [usersDb, setUsersDb] = useState([])
    const [userToEdit, setUserToEdit] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    let api = helpHttp();
    let url = "http://localhost:8080";

    useEffect(() => {
        if (usersDb === null) return;
        setLoading(true);
        api.get(`${url}/users/listar`)
            .then((res) => {
                if (!res.err) {
                    setUsersDb(res.data);
                    setError(null);
                } else {
                    setUsersDb(null);
                    setError(res);
                }
                setLoading(false);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // ********** Crear Usuario **********
    const createUser = (user) => {
        user.rol = 2; // Rol 2 -> Usuario Interno
        user.password = "User_1234";
        user.estado = 1;

        let endpoint = `${url}/users/guardar/`;
        const token = localStorage.getItem("token");
        let options = {
            body: user,
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${token}`
            },
        };

        api.post(endpoint, options).then((res) => {
            console.log(res)
            console.log(usersDb)
            if (!res.err) {
                setUsersDb([...usersDb, res.data]);
                console.log(usersDb)
            } else {
                setError(res);
            }
        });
    };

    // ********** Editar Usuario **********
    const updateUser = (user) => {
        let endpoint = `${url}/users/editar/`;
        const token = localStorage.getItem("token");
        let options = {
            body: user,
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${token}`
            }
        };
        api.post(endpoint, options).then((res) => {
            console.log(res.data)
            console.log(usersDb)
            if (!res.err) {
                let newData = usersDb.map((e) => (e._id === user._id ? user : e));
                setUsersDb(newData);
                console.log(newData)
            } else {
                setError(res);
            }
        });

    };

    // ********** Borrar Usuario **********
    const deleteUser = (nro_doc) => {
        let isDelete = window.confirm(
            `¿Estás seguro de eliminar el usuario con número de documento '${nro_doc}'?`
        );

        if (isDelete) {
            let endpoint = `${url}/users/eliminar/${nro_doc}`;
            const token = localStorage.getItem("token");
            let options = {
                headers: {
                    "content-type": "application/json",
                    "authorization": `Bearer ${token}`
                },
            };

            console.log(nro_doc)

            api.del(endpoint, options).then((res) => {
                if (!res.err) {
                    let newData = usersDb.filter((el) => el.nro_doc !== nro_doc);
                    setUsersDb(newData);
                } else {
                    setError(res);
                }
            });
        } else {
            return;
        }

    };
    // ******************** End CRUD Users ********************

    // ********************* CRUD predios *********************
    const [prediosDb, setPrediosDb] = useState([])
    const [predioToEdit, setPredioToEdit] = useState(null);


    useEffect(() => {
        setLoading(true);
        api.get(`${url}/predios/listar`)
            .then((res) => {
                // console.log(res)
                if (!res.err) {
                    setPrediosDb(res.data);
                    setError(null);
                } else {
                    setPrediosDb(null);
                    setError(res);
                }
                setLoading(false);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const createPredio = (predio) => {
        predio.estado = 1;
        predio.valor_predial = predio.valor_predio * 0.01;

        let endpoint = `${url}/predios/guardar/`;
        const token = localStorage.getItem("token");
        let options = {
            body: predio,
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${token}`
            },
        };
        console.log(predio);
        api.post(endpoint, options).then((res) => {
            console.log(prediosDb)
            console.log(res.data)
            if (!res.err) {
                setPrediosDb([...prediosDb, res.data]);
            } else {
                setError(res);
            }
        });
    };

    const updatePredio = (predio) => {
        predio.valor_predial = predio.valor_predio * 0.01;

        let endpoint = `${url}/predios/editar`;
        const token = localStorage.getItem("token");

        let options = {
            body: predio,
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${token}`
            },
        };

        console.log(predio)

        api.post(endpoint, options).then((res) => {
            console.log(res)
            if (!res.err) {
                let newData = prediosDb.map((e) => (e._id === predio._id ? predio : e));
                setPrediosDb(newData);
            } else {
                setError(res);
            }
        });
    };

    const deletePredio = (codigo) => {
        let isDelete = window.confirm(
            `¿Estás seguro de eliminar el predio con codigo '${codigo}'?`
        );

        if (isDelete) {
            let endpoint = `${url}/predios/eliminar/${codigo}`;
            const token = localStorage.getItem("token");
            let options = {
                headers: {
                    "content-type": "application/json",
                    "authorization": `Bearer ${token}`
                },
            };

            api.del(endpoint, options).then((res) => {
                //console.log(res);
                if (!res.err) {
                    let newData = prediosDb.filter((el) => el.codigo !== codigo);
                    setPrediosDb(newData);
                } else {
                    setError(res);
                }
            });
        } else {
            return;
        }
    };
    // ******************* End CRUD predios *******************

    const countUsers = () => {
        if (usersDb !== null) {
            const cantUsuarios = a => usersDb.filter((e) =>
                (e.rol === a)).length; //cuenta los usuarios segun el rol}
            return cantUsuarios;
        }
    }

    const cantidadUsuarios = countUsers();

    const countPredios = () => {
        if (prediosDb !== null) {
            const cantPredios = prediosDb.length;
            return cantPredios;
        }
    }

    const cantidadPredios = countPredios();

    // Autenticación por rol:
    const tokenIsOk = () => {
        const token = localStorage.getItem("token");
        if (token) {
            const payload = jwtDecode(token);
            return payload.rol;
        }
    }

    const rol = tokenIsOk();


    // Toggle-Sidebar:
    const [inactive, setInactive] = useState(false);

    return (
        <>
            {auth() && rol !== 3 ?
                <>
                    <main className={inactive ? "toggle-sidebar" : ""}>
                        {tipo === "admin" ?
                            <> <HeaderAdmin btn={<div onClick={() => { setInactive(!inactive) }}>
                                <i className="nav-home-ue bi bi-list toggle-sidebar-btn"></i>
                            </div>} />
                                <Sidebar
                                    logo={<img src="../img/logo.png" alt="" className="logo-sidebar" />}
                                    item1={<SidebarItem linkTo="/admin/dashboard" icono="bi bi-grid" titulo="Dashboard" />}
                                    item2={<SidebarItem linkTo="/admin/my-profile" icono="bi bi-person-circle" titulo="Mi Perfil" />}
                                    item3={<SidebarItem linkTo="/admin/create-user" icono="bi bi-person-plus-fill" titulo="Crear Usuarios" />}
                                    item4={<SidebarItem linkTo="/admin/manage-users" icono="bi bi-pencil-fill" titulo="Gestionar Usuarios" />}
                                    item5={<SidebarItem linkTo="/admin/create-predio" icono="bi bi-plus-circle-fill" titulo="Crear Predio" />}
                                    item6={<SidebarItem linkTo="/admin/manage-predio" icono="bi bi-building" titulo="Gestionar Predios" />}
                                />
                            </>
                            :
                            <> <HeaderUserInt btn={<div onClick={() => { setInactive(!inactive) }}>
                                <i className="nav-home-ue bi bi-list toggle-sidebar-btn"></i>
                            </div>} />
                                <Sidebar
                                    logo={<img src="../img/logo.png" alt="" className="logo-sidebar" />}
                                    item1={<SidebarItem linkTo="/user-int/dashboard" icono="bi bi-grid" titulo="Dashboard" />}
                                    item2={<SidebarItem linkTo="/user-int/my-profile" icono="bi bi-person-circle" titulo="Mi Perfil" />}
                                    item5={<SidebarItem linkTo="/user-int/create-predio" icono="bi bi-plus-circle-fill" titulo="Crear Predio" />}
                                    item6={<SidebarItem linkTo="/user-int/manage-predio" icono="bi bi-pencil-fill" titulo="Gestionar Predios" />}
                                />
                            </>
                        }

                        {page === "home" &&
                            <ContainerAdmin titulo="Dashboard" linkTo="#">
                                <Dashboard
                                    cantidadUsuarios={cantidadUsuarios}
                                    cantidadPredios={cantidadPredios} />  {/* Children */}
                            </ContainerAdmin>}

                        {page === "myProfile" &&
                            <ContainerAdmin titulo="Mi Perfil" linkTo="#" >
                                <BodyMyProfile />  {/* Children */}
                            </ContainerAdmin>}

                        {page === "createUser" &&
                            <ContainerAdmin titulo="Crear Usuario" linkTo="#" >
                                <FormUser
                                    titulo="Ingrese los datos del usuario"
                                    createUser={createUser}
                                    updateUser={updateUser}
                                    setUserToEdit={setUserToEdit}
                                    btn_text="Crear"
                                />  {/* Children */}
                            </ContainerAdmin>}

                        {page === "manageUsers" &&
                            <ContainerAdmin titulo="Gestionar Usuarios" linkTo="#" >
                                {loading && <Loader />}
                                {error && (
                                    <Message
                                        msg={`Error ${error.status}: ${error.statusText}`}
                                        bgColor="#dc3545"
                                    />
                                )}
                                {usersDb && (
                                    <TableUsers
                                        users={usersDb}
                                        setUserToEdit={setUserToEdit}
                                        deleteUser={deleteUser}
                                    />
                                )}
                            </ContainerAdmin>}

                        {page === "editUser" &&
                            <ContainerAdmin titulo="Editar Usuario" linkTo="/admin/manage-users" subtitulo="Gestionar Usuarios" sep="&nbsp;/&nbsp;" subtitulo2="Editar Usuario">
                                <FormUser
                                    titulo="Datos del usuario a editar"
                                    createUser={createUser}
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
                                    createPredio={createPredio}
                                    updatePredio={updatePredio}
                                    setPredioToEdit={setPredioToEdit}
                                    btn_text="Crear"
                                />  {/* Children */}
                            </ContainerAdmin>}

                        {page === "managePredio" && <ContainerAdmin titulo="Gestionar Predios" linkTo="#">
                            {loading && <Loader />}
                            {error && (
                                <Message
                                    msg={`Error ${error.status}: ${error.statusText}`}
                                    bgColor="#dc3545"
                                />
                            )}
                            {usersDb && (
                                <TablePredios
                                    predios={prediosDb}
                                    setPredioToEdit={setPredioToEdit}
                                    deletePredio={deletePredio}
                                    linkTo={tipo === "admin" ? "/admin/manage-predio/edit" : "/user-int/manage-predio/edit"}
                                />
                            )}
                        </ContainerAdmin>}

                        {page === "editPredio" &&
                            <ContainerAdmin
                                titulo="Editar Predio"
                                linkTo={tipo === "admin" ? "/admin/manage-predio" : "/user-int/manage-predio"}
                                subtitulo="Gestionar Predios"
                                sep="&nbsp;/&nbsp;"
                                subtitulo2="Editar Predio">
                                <FormPredio
                                    titulo="Datos del predio a editar"
                                    createPredio={createPredio}
                                    updatePredio={updatePredio}
                                    predioToEdit={predioToEdit}
                                    setPredioToEdit={setPredioToEdit}
                                    btn_text="Editar"
                                />  {/* Children */}
                            </ContainerAdmin>}

                        {page === "fechaPagoDcto" &&
                            <ContainerAdmin titulo="Definir Fechas de Pago - Descuentos" subtitulo="Gestionar Predios" subtitulo2="Definir Fechas de Pago - Descuentos">
                                <FormFechaPagoDcto />  {/* Children */}
                            </ContainerAdmin>}

                        {page === "algoritmos" &&
                            <ContainerAdmin titulo="Ejecutar Algoritmos" subtitulo="Ejecutar Algoritmos">
                                <FormEjecutarAlgoritmo />  {/* Children */}
                            </ContainerAdmin>}

                        <FooterAdmin />
                    </main>
                </>

                :

                <Navigate to="/login" />

            }
        </>
    )
}

export default AdminUserIntPage;
