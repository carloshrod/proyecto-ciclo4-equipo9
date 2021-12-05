import React from 'react';
import HeaderSystemOut from "../HeaderSystemOut";
import Container from '../Container';
import FormForgotPassword from "../forms/FormForgotPassword";
import Footer from "../Footer";

function ForgotPassword() {
    return (
        <>
            <HeaderSystemOut />
            <Container>
                <FormForgotPassword /> {/* Children */}
            </Container>
            <Footer />
        </>
    )
}

export default ForgotPassword;
