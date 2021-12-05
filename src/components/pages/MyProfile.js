import React from 'react';
import HeaderUserExt from '../HeaderUserExt';
import Container from '../Container';
import BodyMyProfile from '../BodyMyProfile';
import Footer from '../Footer';

function MyProfile() {
    return (
        <>
            <HeaderUserExt />
            <Container titulo="Mi Perfil">
                <BodyMyProfile /> {/* Children */}
            </Container>
            <Footer />
        </>
    )
};

export default MyProfile;
