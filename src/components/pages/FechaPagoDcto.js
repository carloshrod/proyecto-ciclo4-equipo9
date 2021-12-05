import React from 'react';
import HeaderAdmin from '../HeaderAdmin';
import Sidebar from '../Sidebar';
import ContainerAdmin from '../ContainerAdmin';
import FormFechaPagoDcto from '../forms/FormFechaPagoDcto';
import FooterAdmin from '../FooterAdmin';

function FechaPagoDcto() {
    return (
        <>
        <HeaderAdmin/>
        <Sidebar/>
        <ContainerAdmin titulo="Definir Fechas de Pago - Descuentos" subtitulo="Gestionar Predios" subtitulo2="Definir Fechas de Pago - Descuentos">
            <FormFechaPagoDcto/> {/* Children */}
        </ContainerAdmin>
        <FooterAdmin/>
        </>
    )
};

export default FechaPagoDcto;
