import React from 'react'
import HeaderUserExt from '../HeaderUserExt';
import Container from '../Container';
import TableAsociarPredios from "../TableAsociarPredios";
import Footer from "../Footer";

function AsociarPredios() {
    return (
        <>
            <HeaderUserExt />
            <Container titulo="Plataforma de Gestión Catastral">
                <TableAsociarPredios /> {/* Children */}
            </Container>
            <Footer />
        </>
    )
}

export default AsociarPredios;
