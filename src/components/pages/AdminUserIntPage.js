import React from 'react';
import HeaderAdmin from "../HeaderAdmin";
import Sidebar from "../Sidebar";
import SidebarItem from '../SidebarItem';
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

export const SidebarAdmin = <Sidebar
                            item1={<SidebarItem linkTo="/home-admin" icono="bi bi-grid" titulo="Dashboard" />}
                            item2={<SidebarItem linkTo="/home-admin/my-profile" icono="bi bi-person-circle" titulo="Mi Perfil" />}
                            item3={<SidebarItem linkTo="/home-admin/create-user" icono="bi bi-person-plus-fill" titulo="Crear Usuarios" />}
                            item4={<SidebarItem linkTo="/home-admin/manage-users" icono="bi bi-pencil-fill" titulo="Gestionar Usuarios" />}
                            item5={<SidebarItem linkTo="/home-admin/create-predio" icono="bi bi-plus-circle-fill" titulo="Crear Predio" />}
                            item6={<SidebarItem linkTo="/home-admin/manage-predio" icono="bi bi-pencil-fill" titulo="Gestionar Predios" />}
                            />

export const SidebarUserInt = <Sidebar
                            item1={<SidebarItem linkTo="/home-user-int" icono="bi bi-grid" titulo="Dashboard" />}
                            item2={<SidebarItem linkTo="/home-user-int/my-profile" icono="bi bi-person-circle" titulo="Mi Perfil" />}
                            item5={<SidebarItem linkTo="/home-user-int/create-predio" icono="bi bi-plus-circle-fill" titulo="Crear Predio" />}
                            item6={<SidebarItem linkTo="/home-user-int/manage-predio" icono="bi bi-pencil-fill" titulo="Gestionar Predios" />}
                            />

function AdminUserIntPage({tipo, page}) {

    return (
        <>
            <HeaderAdmin />
            {tipo ==="admin" ? SidebarAdmin : SidebarUserInt}

            {page ==="home" && <ContainerAdmin  titulo="Dashboard" subtitulo="Dashboard">
            <Dashboard/>  {/* Children */}
            </ContainerAdmin> }

            {page ==="myProfile" && <ContainerAdmin  titulo="Mi Perfil" subtitulo="Mi Perfil">
            <BodyMyProfile/>  {/* Children */}
            </ContainerAdmin> }

            {page ==="createUser" && <ContainerAdmin  titulo="Crear Usuario" subtitulo="Crear Usuario">
            <FormCreateUser/>  {/* Children */}
            </ContainerAdmin> }

            {page ==="manageUsers" && <ContainerAdmin  titulo="Gestionar Usuarios" subtitulo="Gestionar Usuarios">
            <TableUsers/>  {/* Children */}
            </ContainerAdmin> }

            {page ==="editUser" && <ContainerAdmin  titulo="Editar Usuario" subtitulo="Gestionar Usuarios" subtitulo2="Editar Usuario">
            <FormEditUser/>  {/* Children */}
            </ContainerAdmin> }

            {page ==="createPredio" && <ContainerAdmin  titulo="Crear Predio" subtitulo="Crear Predio">
            <FormCreatePredio/>  {/* Children */}
            </ContainerAdmin> }

            {page ==="managePredio" && <ContainerAdmin  titulo="Gestionar Predios" subtitulo="Gestionar Predios">
            {tipo === "admin" ? <TablePredio/> : <TablePredioUserInt/>}  {/* Children */}
            </ContainerAdmin> }

            {page ==="editPredio" && <ContainerAdmin  titulo="Editar Predio" subtitulo="Gestionar Predios" subtitulo2="Editar Predio">
            <FormEditPredio/>  {/* Children */}
            </ContainerAdmin> }

            {page ==="fechaPagoDcto" && <ContainerAdmin  titulo="Definir Fechas de Pago - Descuentos" subtitulo="Gestionar Predios" subtitulo2="Definir Fechas de Pago - Descuentos">
            <FormFechaPagoDcto/>  {/* Children */}
            </ContainerAdmin> }

            {page ==="algoritmos" && <ContainerAdmin  titulo="Ejecutar Algoritmos" subtitulo="Gestionar Predios" subtitulo2="Ejecutar Algoritmos">
            <FormEjecutarAlgoritmo/>  {/* Children */}
            </ContainerAdmin> }










            
            <FooterAdmin />
        </>
    )
}

export default AdminUserIntPage;
