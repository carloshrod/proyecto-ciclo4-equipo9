import React from 'react';
import HeaderAdmin from "../HeaderAdmin";
import Sidebar from "../Sidebar";
import ContainerAdmin from '../ContainerAdmin';
import Dashboard from '../Dashboard';
import FooterAdmin from "../FooterAdmin";

function HomeAdmin() {
    return (
        <>
        <HeaderAdmin/>
        <Sidebar/>
        <ContainerAdmin titulo="Dashboard" subtitulo="Dashboard">
            <Dashboard/> {/* Children */}
        </ContainerAdmin>
        <FooterAdmin/>
        </>
    )
}

export default HomeAdmin;
