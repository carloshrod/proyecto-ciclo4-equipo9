import React from 'react';
import HeaderAdmin from '../HeaderAdmin';
import ContainerAdmin from '../ContainerAdmin';
import BodyMyProfile from '../BodyMyProfile';
import FooterAdmin from '../FooterAdmin';
import { SidebarAdmin, SidebarUserInt } from "./HomeAdmin";

function MyProfileAdmin({tipo}) {
    return (
        <>
            <HeaderAdmin />
            {tipo ==="admin" ? SidebarAdmin : SidebarUserInt}
            <ContainerAdmin titulo="Mi Perfil" subtitulo="Mi Perfil">
                <BodyMyProfile /> {/* Children */}
            </ContainerAdmin>
            <FooterAdmin />
        </>
    )
};

export default MyProfileAdmin;
