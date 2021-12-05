import React from 'react';
import HeaderAdmin from '../HeaderAdmin';
import Sidebar from '../Sidebar';
import ContainerAdmin from '../ContainerAdmin';
import FormEditPredio from '../forms/FormEditPredio';
import FooterAdmin from '../FooterAdmin';

function EditPredio() {
    return (
        <>
        <HeaderAdmin/>
        <Sidebar/>
        <ContainerAdmin titulo="Editar Predio" subtitulo="Gestionar Predios" subtitulo2="Editar Predio">
            <FormEditPredio/> {/* Children */}
        </ContainerAdmin>
        <FooterAdmin/>
        </>
    )
}

export default EditPredio;