import React from 'react';
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
import TablePredio from '../TablePredio';
import TablePredioUserInt from '../TablePredioUserInt';
import FormEditPredio from '../forms/FormEditPredio';
import FormFechaPagoDcto from '../forms/FormFechaPagoDcto';
import FormEjecutarAlgoritmo from '../forms/FormEjecutarAlgoritmo';
import USERS from '../Mocks/Users';
import PREDIOS from '../Mocks/Predios';

function AdminUserIntPage({ tipo, page }) {

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
                    <FormCreateUser />  {/* Children */}
                </ContainerAdmin>}

            {page === "manageUsers" &&
                <ContainerAdmin titulo="Gestionar Usuarios" subtitulo="Gestionar Usuarios">
                    <TableUsers data={USERS} />  {/* Children */}
                </ContainerAdmin>}

            {page === "editUser" &&
                <ContainerAdmin titulo="Editar Usuario" subtitulo="Gestionar Usuarios" subtitulo2="Editar Usuario">
                    <FormEditUser />  {/* Children */}
                </ContainerAdmin>}

            {page === "createPredio" &&
                <ContainerAdmin titulo="Crear Predio" subtitulo="Crear Predio">
                    <FormCreatePredio />  {/* Children */}
                </ContainerAdmin>}

            {page === "managePredio" && <ContainerAdmin titulo="Gestionar Predios" subtitulo="Gestionar Predios">
                {tipo === "admin" ? <TablePredio data={PREDIOS} /> : <TablePredioUserInt data={PREDIOS} />}  {/* Children */}
            </ContainerAdmin>}

            {page === "editPredio" &&
                <ContainerAdmin titulo="Editar Predio" subtitulo="Gestionar Predios" subtitulo2="Editar Predio">
                    <FormEditPredio />  {/* Children */}
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
