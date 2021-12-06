import React from 'react';
import HeaderAdmin from '../HeaderAdmin';
import FooterAdmin from '../FooterAdmin';
import FormEjecutarAlgoritmo from '../forms/FormEjecutarAlgoritmo';
import ContainerAdmin from '../ContainerAdmin';
import { SidebarAdmin, SidebarUserInt } from "./HomeAdmin";

export default function EjecutarAlgoritmo({ tipo }) {
    return (
        <>
            <HeaderAdmin />
            {tipo === "admin" ? SidebarAdmin : SidebarUserInt}
            <ContainerAdmin titulo="Ejecutar Algoritmos" subtitulo="Gestionar Predios" subtitulo2="Ejecutar Algoritmos">
                <FormEjecutarAlgoritmo /> {/* Children */}
            </ContainerAdmin>
            <FooterAdmin />
        </>
    )
}