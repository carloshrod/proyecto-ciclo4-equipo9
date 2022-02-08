import React, { useEffect, useState } from 'react';
import HeaderAdmin from "../HeaderAdmin";
import HeaderUserInt from '../HeaderUserInt';
import Sidebar from "../Sidebar";
import SidebarItem from '../SidebarItem';
import ContainerAdmin from '../ContainerAdmin';
import FooterAdmin from "../FooterAdmin";
import Dashboard from '../Dashboard';
import BodyMyProfile from '../BodyMyProfile';
import FormUser from '../forms/FormUser';
import TableUsers from '../TableUsers';
import FormPredio from '../forms/FormPredio';
import TablePredios from '../TablePredios';
// import FormFechaPagoDcto from '../forms/FormFechaPagoDcto';
// import FormEjecutarAlgoritmo from '../forms/FormEjecutarAlgoritmo';
import { helpHttp } from '../../helpers/helpHttp';
import Loader from '../Loader';
import Message from '../Message';
import { auth } from '../../auth/auth';
import { Navigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';

function AdminUserIntPage({ tipo, page }) {

    // ******************** CRUD Users ********************
    const [usersDb, setUsersDb] = useState([])
    const [userToEdit, setUserToEdit] = useState(null);
    const [error, setError] = useState(null);
    const [msgError, setMsgError] = useState();
    const [loading, setLoading] = useState(false);

    let api = helpHttp();
    let url = process.env.REACT_APP_API_URL

    useEffect(() => {
        setLoading(true);
        api.get(`${url}/users/listar`)
            .then((res) => {
                if (!res.err) {
                    setError(null);
                    if (res.data) {
                        setUsersDb(res.data.slice(1));
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

    // ********** Crear Usuario **********
    const createUser = (user) => {
        user.rol = 2; // Rol 2 -> Usuario Interno
        user.password = process.env.REACT_APP_USER_PASS;
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
            if (!res.err) {
                if (res.data) {
                    setUsersDb([...usersDb, res.data]);
                    toast.success(res.msg)
                } else {
                    toast.error(res.msg)
                }
            } else {
                toast.error(res.msg)
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
            if (!res.err) {
                if (res.estado === "ok") {
                    let newData = usersDb.map((e) => (e._id === user._id ? user : e));
                    setUsersDb(newData);    
                    toast.success(res.msg)
                } else {
                    toast.error(res.msg)
                }
            } else {
                toast.error(res.msg)
            }
        });

    };

    // ********** Eliminar Usuario **********
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

            api.del(endpoint, options).then((res) => {
                if (!res.err) {
                    if (res.estado === "ok") {
                        let newData = usersDb.filter((el) => el.nro_doc !== nro_doc);
                        setUsersDb(newData);
                        toast.success(res.msg)    
                    } else {
                        toast.error(res.msg)
                    }
                } else {
                    toast.error(res.msg)
                }
            });
        } else {
            return;
        }
    };

    // ********** Cambiar Contraseña **********
    const changePassword = (user) => {
        user.password = user.newPassword;

        let endpoint = `${url}/users/cambiar-password/`;
        const token = localStorage.getItem("token");
        const payload = jwtDecode(token);
        user.nro_doc = payload.nro_doc;

        let options = {
            body: user,
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${token}`
            }
        };

        api.post(endpoint, options).then((res) => {
            if (!res.err) {
                let newData = usersDb.map((e) => (e.nro_doc === payload.nro_doc ? user : e));
                setUsersDb(newData);
                if (res.estado === "ok") {
                    toast.success(res.msg)
                } else {
                    toast.error(res.msg)
                }
            } else {
                toast.error(res.msg)
            }
        });
    };

    // ******************** End CRUD Users ********************

    // ********************* CRUD predios *********************
    const [prediosDb, setPrediosDb] = useState([])
    const [predioToEdit, setPredioToEdit] = useState(null);


    useEffect(() => {
        setLoading(true);
        api.get(`${url}/predios/listar`)
            .then((res) => {
                if (!res.error) {
                    setError(null);
                    if (res.data) {
                        setPrediosDb(res.data);
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

    // ********** Crear Predio **********
    const createPredio = (predio) => {
        predio.estado = 1;
        predio.valor_predial = predio.valor_predio * 0.01;
        predio.codigo = "PD" + predio.codigo;

        let endpoint = `${url}/predios/guardar/`;
        const token = localStorage.getItem("token");
        let options = {
            body: predio,
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${token}`
            },
        };

        api.post(endpoint, options).then((res) => {
            if (!res.err) {
                if (res.data) {
                    setPrediosDb([...prediosDb, res.data]);
                    toast.success(res.msg);
                } else {
                    toast.error(res.msg);
                }
            } else {
                toast.error(res.msg);
            }
        });
    };

    // ********** Editar Predio **********
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

        api.post(endpoint, options).then((res) => {
            if (!res.err) {
                let newData = prediosDb.map((e) => (e._id === predio._id ? predio : e));
                setPrediosDb(newData);
                if (res.estado === "ok") {
                    toast.success(res.msg)
                } else {
                    toast.error(res.msg)
                }
            } else {
                toast.error(res.msg);
            }
        });
    };

    // ********** Eliminar Predio **********
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
                if (!res.err) {
                    let newData = prediosDb.filter((el) => el.codigo !== codigo);
                    setPrediosDb(newData);
                    toast.success(res.msg);
                } else {
                    toast.error(res.msg);
                }
            });
        } else {
            return;
        }
    };
    // ******************* End CRUD predios *******************

    const countUsers = () => {
        if (usersDb) {
            const cantUsuarios = a => usersDb.filter((e) =>
                (e.rol === a)).length; //cuenta los usuarios segun el rol}
            return cantUsuarios;
        }
    }

    const countPredios = () => {
        if (prediosDb) {
            const cantPredios = prediosDb.length;
            return cantPredios;
        }
    }

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

    // Cerrar sesión:
    function logout() {
        localStorage.removeItem("token");
        window.location.href = "/login";
    }

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
                                    cantidadUsuarios={usersDb ? countUsers() : countUsers}
                                    cantidadPredios={countPredios()}
                                    error={error && <Message msg={msgError} bgColor="#dc3545" />}
                                />  {/* Children */}
                            </ContainerAdmin>}

                        {page === "myProfile" &&
                            <ContainerAdmin titulo="Mi Perfil" linkTo="#" >
                                <BodyMyProfile
                                    changePassword={changePassword}
                                    setUserToEdit={setUserToEdit} />  {/* Children */}
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
                                <TableUsers
                                    users={usersDb}
                                    setUserToEdit={setUserToEdit}
                                    deleteUser={deleteUser}
                                    error={error && <Message msg={msgError} bgColor="#dc3545" />}
                                />
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
                            <TablePredios
                                predios={prediosDb}
                                setPredioToEdit={setPredioToEdit}
                                deletePredio={deletePredio}
                                linkTo={tipo === "admin" ? "/admin/manage-predio/edit" : "/user-int/manage-predio/edit"}
                                error={error && <Message msg={msgError} bgColor="#dc3545" />}
                            />
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

                        {/* {page === "fechaPagoDcto" &&
                            <ContainerAdmin titulo="Definir Fechas de Pago - Descuentos" subtitulo="Gestionar Predios" subtitulo2="Definir Fechas de Pago - Descuentos">
                                <FormFechaPagoDcto />  Children */}
                            {/* </ContainerAdmin>} */}

                        {/* {page === "algoritmos" &&
                            <ContainerAdmin titulo="Ejecutar Algoritmos" subtitulo="Ejecutar Algoritmos">
                                <FormEjecutarAlgoritmo />  {/* Children */}
                            {/* </ContainerAdmin>} */}

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
