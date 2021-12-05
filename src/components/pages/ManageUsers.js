import React from 'react';
import HeaderAdmin from "../HeaderAdmin";
import Sidebar from "../Sidebar";
import ContainerAdmin from '../ContainerAdmin';
import TableUsers from "../TableUsers";
import FooterAdmin from "../FooterAdmin";

function ManageUsers() {
    return (
        <>
        <HeaderAdmin/>
        <Sidebar/>
        <ContainerAdmin titulo="Gestionar Usuarios" subtitulo="Gestionar Usuarios">
            <TableUsers/> {/* Children */}
        </ContainerAdmin>
        <FooterAdmin/>
        </>
    )
}

export default ManageUsers;
