import React from 'react';
import HeaderAdmin from '../HeaderAdmin';
import Sidebar from '../Sidebar';
import FooterAdmin from '../FooterAdmin';
import FormEjecutarAlgoritmo from '../forms/FormEjecutarAlgoritmo';

export default function EjecutarAlgoritmo(){
    return(
        <>
        <HeaderAdmin/>
        <Sidebar/>
        <main id="main" className="main">
            {/* <AdminTitle/> */}
            <div className="pagetitle">
                <h1>Ejecutar Algoritmos</h1>
                <nav>
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/home_admin">Home</a></li>
                    <li className="breadcrumb-item active">Ejecutar Algoritmos</li>
                    </ol>
                </nav>
            </div>
            <section className="section dashboard">
                <div className="row">
                    <FormEjecutarAlgoritmo/>
                </div>
            </section>
        </main>{/* <!-- End #main --> */}
        <FooterAdmin/>
        </>
    )
}