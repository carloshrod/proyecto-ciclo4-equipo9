import React from 'react';

function PageTitle() {
    return (
        <>
        <div className="pagetitle">
            <h1>Dashboard</h1>
            <nav>
                <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/home-admin">Home</a></li>
                <li className="breadcrumb-item active">Dashboard</li>
                </ol>
            </nav>
        </div>
        {/* <!-- End Page Title --> */}
        </>
    )
}

export default PageTitle;
