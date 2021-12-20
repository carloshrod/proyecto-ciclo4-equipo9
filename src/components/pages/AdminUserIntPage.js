import React, { useEffect, useState } from 'react';
import HeaderAdmin from "../HeaderAdmin";
import HeaderUserInt from '../HeaderUserInt';
import { SidebarAdmin, SidebarUserInt } from "../Sidebar";
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

function AdminUserIntPage({ tipo, page }) {

    // ******************** CRUD Users ********************
    const [usersDb, setUsersDb] = useState([])
    const [userToEdit, setUserToEdit] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    let api = helpHttp();
    let url = "http://localhost:8080";

    const cantidadUsuarios = a => usersDb.filter((e) =>
        (e.rol === a)).length; //cuenta los usuarios segun el rol

    useEffect(() => {
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

    const cantidadPredios = prediosDb.length;

    const createPredio = (predio) => {
        predio.estado = 1;

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

    return (
        <>
            {auth() ?
                <>
                    <HeaderAdmin />
                    {tipo === "admin" ?
                        <> <HeaderAdmin />
                            {SidebarAdmin} </> :
                        <> <HeaderUserInt />
                            {SidebarUserInt} </>}

                    {page === "home" &&
                        <ContainerAdmin titulo="Dashboard" subtitulo="Dashboard">
                            <Dashboard
                                cantidadUsuarios={cantidadUsuarios}
                                cantidadPredios={cantidadPredios} />  {/* Children */}
                        </ContainerAdmin>}

                    {page === "myProfile" &&
                        <ContainerAdmin titulo="Mi Perfil" subtitulo="Mi Perfil">
                            <BodyMyProfile />  {/* Children */}
                        </ContainerAdmin>}

                    {page === "createUser" &&
                        <ContainerAdmin titulo="Crear Usuario" subtitulo="Crear Usuario">
                            <FormUser
                                titulo="Ingrese los datos del usuario"
                                createUser={createUser}
                                updateUser={updateUser}
                                setUserToEdit={setUserToEdit}
                                btn_text="Crear"
                            />  {/* Children */}
                        </ContainerAdmin>}

                    {page === "manageUsers" &&
                        <ContainerAdmin titulo="Gestionar Usuarios" subtitulo="Gestionar Usuarios">
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
                        <ContainerAdmin titulo="Editar Usuario" subtitulo="Gestionar Usuarios" subtitulo2="Editar Usuario">
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
                        <ContainerAdmin titulo="Crear Predio" subtitulo="Crear Predio">
                            <FormPredio
                                titulo="Ingrese los datos del predio"
                                createPredio={createPredio}
                                updatePredio={updatePredio}
                                setPredioToEdit={setPredioToEdit}
                                btn_text="Crear"
                            />  {/* Children */}
                        </ContainerAdmin>}

                    {page === "managePredio" && <ContainerAdmin titulo="Gestionar Predios" subtitulo="Gestionar Predios">
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
                            />
                        )}
                    </ContainerAdmin>}

                    {page === "editPredio" &&
                        <ContainerAdmin titulo="Editar Predio" subtitulo="Gestionar Predios" subtitulo2="Editar Predio">
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
                </>

                :

                <Navigate to="/login" />

            }
        </>
    )
}

export default AdminUserIntPage;
