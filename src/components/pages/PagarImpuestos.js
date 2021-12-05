import React from 'react'
import HeaderUserExt from '../HeaderUserExt';
import Container from '../Container';
import BodyPagarImpuestos from "../BodyPagarImpuestos";
import Footer from "../Footer";

function PagarImpuestos() {
    return (
        <>
            <HeaderUserExt />
            <Container titulo="Pagar Impuesto Predial">
                <BodyPagarImpuestos /> {/* Children */}
            </Container>
            <Footer />
        </>
    )
}

export default PagarImpuestos;
