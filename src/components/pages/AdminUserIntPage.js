import React, { useEffect, useState } from 'react';
import HeaderAdmin from "../HeaderAdmin";
import HeaderUserInt from '../HeaderUserInt';
import { SidebarAdmin, SidebarUserInt } from "../Sidebar";
import ContainerAdmin from '../ContainerAdmin';
import FooterAdmin from "../FooterAdmin";
import Dashboard from '../Dashboard';
import BodyMyProfile from '../BodyMyProfile';
import FormCreateUser from '../forms/FormCreateUser';
import TableUsers from '../TableUsers';
import FormEditUser from '../forms/FormEditUser';
import FormCreatePredio from '../forms/FormCreatePredio';
import TablePredios from '../TablePredios';
import FormEditPredio from '../forms/FormEditPredio';
import FormFechaPagoDcto from '../forms/FormFechaPagoDcto';
import FormEjecutarAlgoritmo from '../forms/FormEjecutarAlgoritmo';
import prediosDB from '../../mocks/predios';
import usersDB from '../../mocks/users';

function AdminUserIntPage({ tipo, page }) {

    // CRUD Users:
    const [usersData, setUsersData] = useState(usersDB)
    const [userToEdit, setUserToEdit] = useState(null);

    const createUser = (data) => {
        data.id = Date.now();
        //console.log(data);
        setUsersData([...usersData, data]);
    };

    const updateUser = (data) => {
        let newData = usersData.map((user) => (user.id === data.id ? data : user));
        setUsersData(newData);
    };

    const deleteUser = (id) => {
        let isDelete = window.confirm(
            `¿Estás seguro de eliminar el registro con el id '${id}'?`
        );

        if (isDelete) {
            let newData = usersData.filter((user) => user.id !== id);
            setUsersData(newData);
        } else {
            return;
        }
    };

    // CRUD predios:
    const [prediosData, setPrediosData] = useState(prediosDB)
    const [predioToEdit, setPredioToEdit] = useState(null);

    const createPredio = (data) => {
        data.id = Date.now();
        //console.log(data);
        setPrediosData([...prediosData, data]);
    };

    const updatePredio = (data) => {
        let newData = prediosData.map((predio) => (predio.id === data.id ? data : predio));
        setPrediosData(newData);
    };

    const deletePredio = (id) => {
        let isDelete = window.confirm(
            `¿Estás seguro de eliminar el registro con el id '${id}'?`
        );

        if (isDelete) {
            let newData = prediosData.filter((predio) => predio.id !== id);
            setPrediosData(newData);
        } else {
            return;
        }
    };


    // API Users:
    // useEffect(() => {
    //     fetch('http://localhost:3004/users')
    //         .then(response => response.json())
    //         .then(data => setUsers(data));
    // }, []);

    // // API predios:
    // const [prediosApi, setPrediosApi] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:3004/predios')
    //         .then(response => response.json())
    //         .then(data => setPrediosApi(data));
    // }, []);

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
                    <FormCreateUser
                        createData={createUser}
                    />  {/* Children */}
                </ContainerAdmin>}

            {page === "manageUsers" &&
                <ContainerAdmin titulo="Gestionar Usuarios" subtitulo="Gestionar Usuarios">
                    <TableUsers
                        data={usersData}
                        setDataToEdit={setUserToEdit}
                        deleteData={deleteUser}
                    />  {/* Children */}
                </ContainerAdmin>}

            {page === "editUser" &&
                <ContainerAdmin titulo="Editar Usuario" subtitulo="Gestionar Usuarios" subtitulo2="Editar Usuario">
                    <FormEditUser
                        updateData={updateUser}
                        dataToEdit={userToEdit}
                        setDataToEdit={setUserToEdit}
                    />  {/* Children */}
                </ContainerAdmin>}

            {page === "createPredio" &&
                <ContainerAdmin titulo="Crear Predio" subtitulo="Crear Predio">
                    <FormCreatePredio
                        createData={createPredio}
                    />  {/* Children */}
                </ContainerAdmin>}

            {page === "managePredio" && <ContainerAdmin titulo="Gestionar Predios" subtitulo="Gestionar Predios">
                <TablePredios
                    data={prediosData}
                    setDataToEdit={setPredioToEdit}
                    deleteData={deletePredio}
                /> {/* Children */}
            </ContainerAdmin>}

            {page === "editPredio" &&
                <ContainerAdmin titulo="Editar Predio" subtitulo="Gestionar Predios" subtitulo2="Editar Predio">
                    <FormEditPredio
                        updateData={updatePredio}
                        dataToEdit={predioToEdit}
                        setDataToEdit={setPredioToEdit}
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
