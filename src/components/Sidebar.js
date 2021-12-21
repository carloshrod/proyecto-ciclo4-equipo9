import React from 'react';
import SidebarItem from './SidebarItem';

export const SidebarAdmin = <Sidebar
                            item1={<SidebarItem linkTo="/home-admin" icono="bi bi-grid" titulo="Dashboard" />}
                            item2={<SidebarItem linkTo="/home-admin/my-profile" icono="bi bi-person-circle" titulo="Mi Perfil" />}
                            item3={<SidebarItem linkTo="/home-admin/create-user" icono="bi bi-person-plus-fill" titulo="Crear Usuarios" />}
                            item4={<SidebarItem linkTo="/home-admin/manage-users" icono="bi bi-pencil-fill" titulo="Gestionar Usuarios" />}
                            item5={<SidebarItem linkTo="/home-admin/create-predio" icono="bi bi-plus-circle-fill" titulo="Crear Predio" />}
                            item6={<SidebarItem linkTo="/home-admin/manage-predio" icono="bi bi-building" titulo="Gestionar Predios" />}
                            // item7={<SidebarItem linkTo="/home-admin/manage-predio/ejecutar-algoritmos" icono="bi bi-cpu" titulo="Ejecutar Algoritmos" />}
                            />

export const SidebarUserInt = <Sidebar
                            item1={<SidebarItem linkTo="/home-user-int" icono="bi bi-grid" titulo="Dashboard" />}
                            item2={<SidebarItem linkTo="/home-user-int/my-profile" icono="bi bi-person-circle" titulo="Mi Perfil" />}
                            item5={<SidebarItem linkTo="/home-user-int/create-predio" icono="bi bi-plus-circle-fill" titulo="Crear Predio" />}
                            item6={<SidebarItem linkTo="/home-user-int/manage-predio" icono="bi bi-pencil-fill" titulo="Gestionar Predios" />}
                            // item7={<SidebarItem linkTo="/home-admin/manage-predio/ejecutar-algoritmos" icono="bi bi-cpu" titulo="Ejecutar Algoritmos" />}
                            />

function Sidebar({ item1, item2, item3, item4, item5, item6, item7 }) {

    return (
        <>
            {/* <!-- ======= Sidebar ======= --> */}
            <aside id="sidebar" className="sidebar">

                <ul className="sidebar-nav" id="sidebar-nav">
                    <li className="nav-item">
                        {item1}
                    </li>
                    <li className="nav-item">
                        {item2}
                    </li>
                    <li className="nav-item">
                        {item3}
                    </li>
                    <li className="nav-item">
                        {item4}
                    </li>
                    <li className="nav-item">
                        {item5}
                    </li>
                    <li className="nav-item">
                        {item6}
                    </li>
                    <li className="nav-item">
                        {item7}
                    </li>
                </ul>

            </aside>
            {/* <!-- End Sidebar--> */}
        </>
    )
}

export default Sidebar;

