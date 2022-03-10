import React, { useEffect, useState } from 'react';
import HeaderAdmin from "../HeaderAdmin";
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
import Swal from 'sweetalert2';
import { generatePassword } from '../../tools/generatePassword';
import { logout } from '../../auth/logout';

function AdminUserIntPage({ tipo, page }) {

    // ******************** CRUD Users ********************
    const [usersDb, setUsersDb] = useState([])
    const [userToEdit, setUserToEdit] = useState(null);
    const [error, setError] = useState(null);
    const [msgError, setMsgError] = useState();
    const [loading, setLoading] = useState(false);

    let api = helpHttp();
    let url = process.env.REACT_APP_API_URL;

    useEffect(() => {
        setLoading(true);
        api.get(url + process.env.REACT_APP_API_LISTAR)
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
        user.password = generatePassword(8);
        user.estado = 1;
        let endpoint = url + process.env.REACT_APP_API_GUARDAR;
        const token = localStorage.getItem("token");
        let options = {
            body: user,
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${token}`
            },
        };

        api.post(endpoint, options).then((res) => {
            if (!res.estado) {
                toast.error("No hay conexión con la base de datos!!!", { autoClose: 10000, theme: "colored" })
            }
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
        let endpoint = url + process.env.REACT_APP_API_EDITAR;
        const token = localStorage.getItem("token");
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

        Swal.fire({
            html: `¿Estás seguro que quieres eliminar el usuario con número de documento <b>${nro_doc}</b>?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#0b295e',
            cancelButtonColor: '#be0d1f',
            confirmButtonText: 'Sí, aceptar',
            cancelButtonText: 'Cancelar'
        }).then(res => {
            if (res.isConfirmed) {
                let endpoint = url + process.env.REACT_APP_API_ELIMINAR + nro_doc;
                const token = localStorage.getItem("token");
                let options = {
                    headers: {
                        "content-type": "application/json",
                        "authorization": `Bearer ${token}`
                    },
                };

                api.del(endpoint, options).then((res) => {
                    if (!res.estado) {
                        toast.error("No hay conexión con la base de datos!!!", { autoClose: 10000, theme: "colored" })
                    }
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
            }
        })
    };

    // ********** Cambiar Contraseña **********
    const changePassword = (user) => {
        let endpoint = url + process.env.REACT_APP_API_CAMBIAR_PASSWORD;
        const token = localStorage.getItem("token");
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

    // ******************** End CRUD Users ********************

    // ********************* CRUD predios *********************
    const [prediosDb, setPrediosDb] = useState([])
    const [predioToEdit, setPredioToEdit] = useState(null);


    useEffect(() => {
        setLoading(true);
        api.get(url + process.env.REACT_APP_API_LISTAR_P)
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
        let vrPredio = predio.valor_predio.replace(/[$.]/g, '');
        let vrPredial = vrPredio * 0.01;
        predio.valor_predial = Math.round(vrPredial);
        let endpoint = url + process.env.REACT_APP_API_GUARDAR_P;
        const token = localStorage.getItem("token");
        let options = {
            body: predio,
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${token}`
            },
        };

        api.post(endpoint, options).then((res) => {
            if (!res.estado) {
                toast.error("No hay conexión con la base de datos!!!", { autoClose: 10000, theme: "colored" })
            }
            if (!res.err) {
                if (res.data1) {
                    setPrediosDb([...prediosDb, res.data1]);
                    toast.success(res.msg);
                    let newData = usersDb.map((e) => (e._id === res.data2._id ? res.data2 : e));
                    setUsersDb(newData)
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
        let vrPredio = predio.valor_predio.replace(/[$.]/g, '');
        let vrPredial = vrPredio * 0.01;
        predio.valor_predial = Math.round(vrPredial);
        let endpoint = url + process.env.REACT_APP_API_EDITAR_P;
        const token = localStorage.getItem("token");
        let options = {
            body: predio,
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${token}`
            },
        };

        api.post(endpoint, options).then((res) => {
            if (!res.estado) {
                toast.error("No hay conexión con la base de datos!!!", { autoClose: 10000, theme: "colored" })
            }
            if (!res.err) {
                let newData = prediosDb.map((e) => (e._id === predio._id ? predio : e));
                setPrediosDb(newData);
                let newUsersData = usersDb.map((e) => (e._id === res.data._id ? res.data : e));
                setUsersDb(newUsersData)
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
        Swal.fire({
            html: `¿Estás seguro que quieres eliminar el predio con código <b>${codigo}</b>?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#0b295e',
            cancelButtonColor: '#be0d1f',
            confirmButtonText: 'Sí, aceptar',
            cancelButtonText: 'Cancelar'
        }).then(res => {
            if (res.isConfirmed) {
                let endpoint = url + process.env.REACT_APP_API_ELIMINAR_P + codigo;
                const token = localStorage.getItem("token");
                let options = {
                    headers: {
                        "content-type": "application/json",
                        "authorization": `Bearer ${token}`
                    },
                };

                api.post(endpoint, options).then((res) => {
                    if (!res.estado) {
                        toast.error("No hay conexión con la base de datos!!!", { autoClose: 10000, theme: "colored" })
                    }
                    if (!res.err) {
                        let newData = prediosDb.filter((el) => el.codigo !== codigo);
                        setPrediosDb(newData);
                        toast.success(res.msg);
                        let newUsersData = usersDb.map((e) => (e._id === res.data._id ? res.data : e));
                        setUsersDb(newUsersData)        
                    } else {
                        toast.error(res.msg);
                    }
                });
            }
        });
    };
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
                        <HeaderAdmin btn={<div onClick={() => { setInactive(!inactive) }}>
                            <i className="nav-home-ue bi bi-list toggle-sidebar-btn"></i>
                        </div>} />
                        {tipo === "admin" ?
                            <>
                                <Sidebar
                                />
                            </>
                            :
                            <>
                                <Sidebar
                                    // logo={<img src="../img/logo.png" alt="" className="logo-sidebar" />}
                                />
                            </>
                        }

                        {page === "home" &&
                            <ContainerAdmin titulo="Dashboard" linkTo="#">
                                <Dashboard
                                    cantidadUsuarios={usersDb ? countUsers() : countUsers}
                                    cantidadPredios={countPredios()}
                                    usersDb={usersDb}
                                    prediosDb={prediosDb}
                                    error={error && <Message msg={msgError} bgColor="#dc3545" />}
                                />  {/* Children */}
                            </ContainerAdmin>}

                        {page === "myProfile" &&
                            <ContainerAdmin titulo="Mi Perfil" linkTo="#" >
                                <BodyMyProfile
                                    changePassword={changePassword}
                                />  {/* Children */}
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
