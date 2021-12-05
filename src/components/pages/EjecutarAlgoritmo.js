import React from 'react';
import HeaderAdmin from '../HeaderAdmin';
import Sidebar from '../Sidebar';
import FooterAdmin from '../FooterAdmin';
import FormEjecutarAlgoritmo from '../forms/FormEjecutarAlgoritmo';
import ContainerAdmin from '../ContainerAdmin';

export default function EjecutarAlgoritmo(){
    return(
        <>
        <HeaderAdmin/>
        <Sidebar/>
        <ContainerAdmin titulo="Ejecutar Algoritmos" subtitulo="Gestionar Predios" subtitulo2="Ejecutar Algoritmos">
            <FormEjecutarAlgoritmo/> {/* Children */}
        </ContainerAdmin>
        <FooterAdmin/>
        </>
    )
}