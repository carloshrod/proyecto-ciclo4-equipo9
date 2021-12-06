import React from 'react';
import HeaderAdmin from '../HeaderAdmin';
import ContainerAdmin from '../ContainerAdmin';
import FormEditPredio from '../forms/FormEditPredio';
import FooterAdmin from '../FooterAdmin';
import { SidebarAdmin, SidebarUserInt } from "./HomeAdmin";

function EditPredio({ tipo }) {
    return (
        <>
            <HeaderAdmin />
            {tipo === "admin" ? SidebarAdmin : SidebarUserInt}
            <ContainerAdmin titulo="Editar Predio" subtitulo="Gestionar Predios" subtitulo2="Editar Predio">
                <FormEditPredio /> {/* Children */}
            </ContainerAdmin>
            <FooterAdmin />
        </>
    )
}

export default EditPredio;