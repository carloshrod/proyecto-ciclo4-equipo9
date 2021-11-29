import React from 'react';
import HeaderAdmin from "../HeaderAdmin";
import Sidebar from "../Sidebar";
import AdminTitle from "../AdminTitle";
import ColumnLeftDashboard from "../ColumnLeftDashboard";
import ColumnRightDashboard from "../ColumnRightDashboard";
import FooterAdmin from "../FooterAdmin";

function HomeAdmin() {
    return (
        <>
        <HeaderAdmin/>
        <Sidebar/>
        <main id="main" className="main">
            <AdminTitle/>
            <section className="section dashboard">
                <div className="row">
                    <ColumnLeftDashboard/>
                    <ColumnRightDashboard/>
                </div>
            </section>
        </main>{/* <!-- End #main --> */}
        <FooterAdmin/>
        </>
    )
}

export default HomeAdmin;
