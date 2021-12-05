import React from 'react';
import HeaderAdmin from '../HeaderAdmin';
import Sidebar from '../Sidebar';
import ContainerAdmin from '../ContainerAdmin';
import BodyMyProfile from '../BodyMyProfile';
import FooterAdmin from '../FooterAdmin';

function MyProfileAdmin() {
    return (
        <>
        <HeaderAdmin/>
        <Sidebar/>
        <ContainerAdmin titulo="Mi Perfil" subtitulo="Mi Perfil">
            <BodyMyProfile/> {/* Children */}
        </ContainerAdmin>
        <FooterAdmin/>
        </>
    )
};

export default MyProfileAdmin;
