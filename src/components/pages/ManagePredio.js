import React from "react";
import HeaderAdmin from "../HeaderAdmin";
import Sidebar from "../Sidebar";
import FooterAdmin from "../FooterAdmin";
import TablePredio from "../TablePredio";

export default function ManagePredio(){
    return(
        <>
        <HeaderAdmin/>
        <Sidebar/>
        <main id="main" className="main">
            {/* <AdminTitle/> */}
            <div className="pagetitle">
                <h1>Gestionar Predios</h1>
                <nav>
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/home-admin">Home</a></li>
                    <li className="breadcrumb-item active">Gestionar Predios</li>
                    </ol>
                </nav>
            </div>
            <section className="section dashboard">
                <div className="row">
                    <TablePredio/>
                </div>
            </section>
        </main>{/* <!-- End #main --> */}
        <FooterAdmin/>            
        </>
    )
}