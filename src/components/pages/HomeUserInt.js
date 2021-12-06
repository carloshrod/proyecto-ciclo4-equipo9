import React from 'react';
import HeaderAdmin from "../HeaderAdmin";
import Sidebar from '../Sidebar';
import SidebarItem from '../SidebarItem';
import ContainerAdmin from '../ContainerAdmin';
import Dashboard from '../Dashboard';
import FooterAdmin from "../FooterAdmin";

function HomeUserInt() {
    return (
        <>
            <HeaderAdmin />
            <Sidebar
                item1={<SidebarItem linkTo="/home-user-int" icono="bi bi-grid" titulo="Dashboard" />}
                item2={<SidebarItem linkTo="/home-user-int/my-profile" icono="bi bi-person-circle" titulo="Mi Perfil" />}
                item5={<SidebarItem linkTo="/home-user-int/create-predio" icono="bi bi-plus-circle-fill" titulo="Crear Predio" />}
                item6={<SidebarItem linkTo="/home-user-int/manage-predio" icono="bi bi-pencil-fill" titulo="Gestionar Predios" />} 
            />
            <ContainerAdmin titulo="Dashboard" subtitulo="Dashboard">
                <Dashboard /> {/* Children */}
            </ContainerAdmin>
            <FooterAdmin />
        </>
    )
}

export default HomeUserInt;
