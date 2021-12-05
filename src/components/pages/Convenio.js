import React from 'react'
import HeaderUserExt from '../HeaderUserExt';
import FormConvenio from '../forms/FormConvenio';
import Footer from "../Footer";
import Container from '../Container';

function Convenio() {
    return (
        <>
            <HeaderUserExt />
            <div className="col-lg-8 m-auto">
            <Container titulo="Solicitar Convenio de Pago">
                <FormConvenio /> {/* Children */}
            </Container>
            </div>
            <Footer />
        </>
    )
}

export default Convenio;
