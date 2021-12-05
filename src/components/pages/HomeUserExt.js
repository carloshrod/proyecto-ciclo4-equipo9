import React from 'react';
import HeaderUserExt from '../HeaderUserExt';
import Container from '../Container';
import BodyHomeUserExt from "../BodyHomeUserExt";
import Footer from "../Footer";

function HomeUserExt() {
    return (
        <>
            <HeaderUserExt />
            <Container titulo="Plataforma de Gestión Catastral">
                <BodyHomeUserExt /> {/* Children */}
            </Container>
            <Footer />
        </>
    )
}

export default HomeUserExt;
