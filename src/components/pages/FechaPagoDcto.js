import React from 'react';
import HeaderAdmin from '../HeaderAdmin';
import Sidebar from '../Sidebar';
import FormFechaPagoDcto from '../forms/FormFechaPagoDcto';
import FooterAdmin from '../FooterAdmin';

function FechaPagoDcto() {
    return (
        <>
        <HeaderAdmin/>
        <Sidebar/>
        <main id="main" className="main">
            {/* <AdminTitle/> */}
            <div className="pagetitle">
                <h1>Definir Fecha de Pago / Descuentos</h1>
                <nav>
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/home_admin">Home</a></li>
                    <li className="breadcrumb-item active">Definir Fecha de Pago / Descuentos</li>
                    </ol>
                </nav>
            </div>
            <section className="section dashboard">
                <div className="row">
                    <FormFechaPagoDcto/>
                </div>
            </section>
        </main>{/* <!-- End #main --> */}
        <FooterAdmin/>
        </>
    )
};

export default FechaPagoDcto;
