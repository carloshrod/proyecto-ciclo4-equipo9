import React from 'react';
import HeaderAdmin from '../HeaderAdmin';
import { SidebarAdmin} from "./HomeAdmin";
import ContainerAdmin from '../ContainerAdmin';
import FormCreateUser from '../forms/FormCreateUser';
import FooterAdmin from '../FooterAdmin';

function CreateUser() {
    return (
        <>
            <HeaderAdmin />
            {SidebarAdmin}
            <ContainerAdmin titulo="Crear Usuario" subtitulo="Crear Usuario">
                <FormCreateUser /> {/* Children */}
            </ContainerAdmin>
            <FooterAdmin />
        </>
    )
};

export default CreateUser;
