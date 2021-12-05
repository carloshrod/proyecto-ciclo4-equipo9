import React from 'react';
import HeaderSystemOut from "../HeaderSystemOut";
import Container from '../Container';
import FormRegister from "../forms/FormRegister";
import Footer from "../Footer";

function Register() {
    return (
        <>
            <HeaderSystemOut />
            <Container>
                <FormRegister /> {/* Children */}
            </Container>
            <Footer />
        </>
    )
}

export default Register;
