import React from 'react';
import HeaderAdmin from '../HeaderAdmin';
import ContainerAdmin from '../ContainerAdmin';
import FormFechaPagoDcto from '../forms/FormFechaPagoDcto';
import FooterAdmin from '../FooterAdmin';
import { SidebarAdmin, SidebarUserInt } from "./HomeAdmin";

function FechaPagoDcto({tipo}) {
    return (
        <>
        <HeaderAdmin/>
        {tipo ==="admin" ? SidebarAdmin : SidebarUserInt}
        <ContainerAdmin titulo="Definir Fechas de Pago - Descuentos" subtitulo="Gestionar Predios" subtitulo2="Definir Fechas de Pago - Descuentos">
            <FormFechaPagoDcto/> {/* Children */}
        </ContainerAdmin>
        <FooterAdmin/>
        </>
    )
};

export default FechaPagoDcto;
