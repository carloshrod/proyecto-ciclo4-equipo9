import React from 'react';
import HeaderSystemOut from "../HeaderSystemOut";
import Container from '../Container';
import FormLogin from "../forms/FormLogin"; 
import Footer from "../Footer";

function Login() {
    return (
        <>
            <HeaderSystemOut />
            <Container>
                <FormLogin /> {/* Children */}
            </Container>
            <Footer />
        </>
    )
}

export default Login;
