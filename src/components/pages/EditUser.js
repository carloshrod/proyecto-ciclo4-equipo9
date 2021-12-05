import React from 'react';
import HeaderAdmin from '../HeaderAdmin';
import Sidebar from '../Sidebar';
import FormEditUser from '../forms/FormEditUser';
import FooterAdmin from '../FooterAdmin';
import ContainerAdmin from '../ContainerAdmin';

function EditUser() {
    return (
        <>
        <HeaderAdmin/>
        <Sidebar/>
        <ContainerAdmin titulo="Editar Usuario" subtitulo="Gestionar Usuarios" subtitulo2="Editar Usuario">
            <FormEditUser/> {/* Children */}
        </ContainerAdmin>
        <FooterAdmin/>
        </>
    )
}

export default EditUser;
