import jwtDecode from 'jwt-decode';
import React from 'react';
import SidebarItem from './SidebarItem';

// export const SidebarAdmin = <>
//     item1={<SidebarItem linkTo="/admin/dashboard" icono="bi bi-grid" titulo="Dashboard" />}
//     item2={<SidebarItem linkTo="/admin/my-profile" icono="bi bi-person-circle" titulo="Mi Perfil" />}
//     item3={<SidebarItem linkTo="/admin/create-user" icono="bi bi-person-plus-fill" titulo="Crear Usuarios" />}
//     item4={<SidebarItem linkTo="/admin/manage-users" icono="bi bi-people-fill" titulo="Gestionar Usuarios" />}
//     item5={<SidebarItem linkTo="/admin/create-predio" icono="bi bi-plus-circle-fill" titulo="Crear Predio" />}
//     item6={<SidebarItem linkTo="/admin/manage-predio" icono="bi bi-building" titulo="Gestionar Predios" />}
// </>

const sbItemsAdmin = [
    {
        linkTo: "/admin/dashboard",
        icono: "bi bi-grid",
        titulo: "Dashboard"
    },
    {
        linkTo: "/admin/my-profile",
        icono: "bi bi-person-circle",
        titulo: "Mi Perfil"
    },
    {
        linkTo: "/admin/create-user",
        icono: "bi bi-person-plus-fill",
        titulo: "Crear Usuario"
    },
    {
        linkTo: "/admin/manage-users",
        icono: "bi bi-people-fill",
        titulo: "Gestionar Usuarios"
    },
    {
        linkTo: "/admin/create-predio",
        icono: "bi bi-plus-circle-fill",
        titulo: "Crear Predio"
    },
    {
        linkTo: "/admin/manage-predios",
        icono: "bi bi-building",
        titulo: "Gestionar Predios"
    },
]

// export const SidebarUserInt = <Sidebar
//     item1={<SidebarItem linkTo="/user-int/dashboard" icono="bi bi-grid" titulo="Dashboard" />}
//     item2={<SidebarItem linkTo="/user-int/my-profile" icono="bi bi-person-circle" titulo="Mi Perfil" />}
//     item4={<SidebarItem linkTo="/user-int/manage-users" icono="bi bi-people-fill" titulo="Gestionar Usuarios" />}
//     item5={<SidebarItem linkTo="/user-int/create-predio" icono="bi bi-plus-circle-fill" titulo="Crear Predio" />}
//     item6={<SidebarItem linkTo="/user-int/manage-predio" icono="bi bi-building" titulo="Gestionar Predios" />}
// />

const sbItemsUserInt = [
    {
        linkTo: "/user-int/dashboard",
        icono: "bi bi-grid",
        titulo: "Dashboard"
    },
    {
        linkTo: "/user-int/my-profile",
        icono: "bi bi-person-circle",
        titulo: "Mi Perfil"
    },
    {
        linkTo: "/user-int/manage-users",
        icono: "bi bi-people-fill",
        titulo: "Gestionar Usuarios"
    },
    {
        linkTo: "/user-int/create-predio",
        icono: "bi bi-plus-circle-fill",
        titulo: "Crear Predio"
    },
    {
        linkTo: "/user-int/manage-predios",
        icono: "bi bi-building",
        titulo: "Gestionar Predios"
    },
]

function Sidebar() {
    const token = localStorage.getItem("token");
    const payload = jwtDecode(token);

    return (
        <>
            {/* <!-- ======= Sidebar ======= --> */}
            <aside id="sidebar" className="sidebar">

                <img src="../img/logo.png" alt="" className="logo-sidebar" />
                <ul className="sidebar-nav" id="sidebar-nav">
                    {payload.rol === 1 ?
                        sbItemsAdmin.map((item) => (
                            <SidebarItem
                                linkTo={item.linkTo}
                                icono={item.icono}
                                titulo={item.titulo}
                            />
                        ))
                        :
                        sbItemsUserInt.map((item) => (
                            <SidebarItem
                                linkTo={item.linkTo}
                                icono={item.icono}
                                titulo={item.titulo}
                            />
                        ))
                    }
                </ul>

            </aside>
            {/* <!-- End Sidebar--> */}
        </>
    )
}

export default Sidebar;
