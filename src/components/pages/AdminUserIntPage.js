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

function AdminUserIntPage({ tipo, page }) {

    // ******************** CRUD Users ********************
    const [usersDb, setUsersDb] = useState([])
    const [userToEdit, setUserToEdit] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    let api = helpHttp();
    let url = "http://localhost:8080";

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

    const createUser = (user) => {
        user.id = usersDb.length + 1;

        let endpoint = `${url}/users/guardar/`;

        let options = {
            body: user,
            headers: { "content-type": "application/json" },
        };

        api.post(endpoint, options).then((res) => {
            if (!res.err) {
                setUsersDb([...usersDb, res.data]);
            } else {
                setError(res);
            }
        });
    };

    const updateUser = (data) => {
        let endpoint = `${url}/users/editar/`;

        let options = {
            body: data,
            headers: { "content-type": "application/json" },
        };

        console.log(data)

        api.put(endpoint, options).then((res) => {
            console.log(res);
            if (!res.err) {
                let newData = usersDb.map((user) => (user._id === data._id ? data : user));
                setUsersDb(newData);
            } else {
                setError(res);
            }
        });

    };

    const deleteUser = (id) => {
        let isDelete = window.confirm(
            `¿Estás seguro de eliminar el registro con el id '${id}'?`
        );

        if (isDelete) {
            let endpoint = `${url}/users/eliminar/${id}`;
            let options = {
                headers: { "content-type": "application/json" },
            };

            api.del(endpoint, options).then((res) => {
                if (!res.err) {
                    let newData = usersDb.filter((el) => el._id !== id);
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
        helpHttp()
            .get(`${url}/predios/listar`)
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
        predio.nro_registro = prediosDb.length + 1;

        let options = {
            body: predio,
            headers: { "content-type": "application/json" },
        };
        console.log(predio);
        api.post(`${url}/predios/guardar`, options).then((res) => {
            console.log(res)
            if (!res.err) {
                setPrediosDb([...prediosDb, res.data]);
            } else {
                setError(res);
            }
        });
    };

    const updatePredio = (data) => {
        let endpoint = `${url}/predios/editar`;

        let options = {
            body: data,
            headers: { "content-type": "application/json" },
        };

        api.put(endpoint, options).then((res) => {
            if (!res.err) {
                let newData = prediosDb.map((predio) => (predio._id === data._id ? data : predio));
                setPrediosDb(newData);
            } else {
                setError(res);
            }
        });
    };

    const deletePredio = (id) => {
        let isDelete = window.confirm(
            `¿Estás seguro de eliminar el registro con el id '${id}'?`
        );

        if (isDelete) {
            let endpoint = `${url}/predios/eliminar/${id}`;
            let options = {
                headers: { "content-type": "application/json" },
            };

            api.del(endpoint, options).then((res) => {
                //console.log(res);
                if (!res.err) {
                    let newData = prediosDb.filter((el) => el._id !== id);
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
            <HeaderAdmin />
            {tipo === "admin" ?
                <> <HeaderAdmin />
                    {SidebarAdmin} </> :
                <> <HeaderUserInt />
                    {SidebarUserInt} </>}

            {page === "home" &&
                <ContainerAdmin titulo="Dashboard" subtitulo="Dashboard">
                    <Dashboard />  {/* Children */}
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
                        userToEdit={userToEdit}
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
                        predioToEdit={predioToEdit}
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
                <ContainerAdmin titulo="Ejecutar Algoritmos" subtitulo="Gestionar Predios" subtitulo2="Ejecutar Algoritmos">
                    <FormEjecutarAlgoritmo />  {/* Children */}
                </ContainerAdmin>}

            <FooterAdmin />
        </>
    )
}

export default AdminUserIntPage;
