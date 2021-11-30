import React from 'react';
import HeaderAdmin from "../HeaderAdmin";
import SidebarUserInt from "../SidebarUserInt";
import AdminTitle from "../AdminTitle";
import ColumnLeftDashboard from "../ColumnLeftDashboard";
import ColumnRightDashboard from "../ColumnRightDashboard";
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
                    <ColumnLeftDashboard/>
                    <ColumnRightDashboard/>
                </div>
            </section>
        </main>{/* <!-- End #main --> */}
        <FooterAdmin/>     
        </>
    )
}

export default HomeUserInt;
