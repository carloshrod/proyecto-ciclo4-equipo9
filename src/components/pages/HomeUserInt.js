import React from 'react';
import HeaderAdmin from "../HeaderAdmin";
import SidebarUserInt from "../SidebarUserInt";
import AdminTitle from "../AdminTitle";
import Dashboard from '../Dashboard';
import FooterAdmin from "../FooterAdmin";

function HomeUserInt() {
    return (
        <>
        <HeaderAdmin/>
        <SidebarUserInt/>
        <main id="main" className="main">
            <AdminTitle/>
            <section className="section dashboard">
                <div className="row">
                    <Dashboard/>
                </div>
            </section>
        </main>{/* <!-- End #main --> */}
        <FooterAdmin/>     
        </>
    )
}

export default HomeUserInt;
