import React from 'react';
import HeaderAdmin from "../HeaderAdmin";
import Sidebar from "../Sidebar";
import AdminTitle from "../AdminTitle";
import FooterAdmin from "../FooterAdmin";
import TableUsers from "../TableUsers";

function ManageUsers() {
    return (
        <>
        <HeaderAdmin/>
        <Sidebar/>
        <main id="main" className="main">
            {/* <AdminTitle/> */}
            <div className="pagetitle">
                <h1>Gestionar Usuarios</h1>
                <nav>
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/home-admin">Home</a></li>
                    <li className="breadcrumb-item active">Gestionar Usuarios</li>
                    </ol>
                </nav>
            </div>
            <section className="section dashboard">
                <div className="row">
                    <TableUsers/>
                </div>
            </section>
        </main>{/* <!-- End #main --> */}
        <FooterAdmin/>            
        </>
    )
}

export default ManageUsers;
