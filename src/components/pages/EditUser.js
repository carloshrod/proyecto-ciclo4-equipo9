import React from 'react';
import HeaderAdmin from '../HeaderAdmin';
import AdminTitle from '../AdminTitle';
import Sidebar from '../Sidebar';
import FooterAdmin from '../FooterAdmin';
import FormEditUser from '../forms/FormEditUser';

function EditUser() {
    return (
        <>
        <HeaderAdmin/>
        <Sidebar/>
        <main id="main" className="main">
            {/* <AdminTitle/> */}
            <div className="pagetitle">
                <h1>Nombre del Usuario</h1>
                <nav>
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/home_admin">Home</a></li>
                    <li className="breadcrumb-item active">Gestionar Usuarios</li>
                    </ol>
                </nav>
            </div>
            <section className="section dashboard">
                <div className="row">
                    <FormEditUser/>
                </div>
            </section>
        </main>{/* <!-- End #main --> */}
        <FooterAdmin/>
        </>
    )
}

export default EditUser;
