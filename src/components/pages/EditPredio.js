import React from 'react';
import HeaderAdmin from '../HeaderAdmin';
import AdminTitle from '../AdminTitle';
import Sidebar from '../Sidebar';
import FormEditPredio from '../forms/FormEditPredio';
import FooterAdmin from '../FooterAdmin';

function EditPredio() {
    return (
        <>
        <HeaderAdmin/>
        <Sidebar/>
        <main id="main" className="main">
            {/* <AdminTitle/> */}
            <div className="pagetitle">
                <h1>Editar Predio</h1>
                <nav>
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/home_admin">Home</a></li>
                    <li className="breadcrumb-item active">Editar Predio</li>
                    </ol>
                </nav>
            </div>
            <section className="section dashboard">
                <div className="row">
                    <FormEditPredio/>
                </div>
            </section>
        </main>{/* <!-- End #main --> */}
        <FooterAdmin/>            
        </>
    )
}

export default EditPredio;