import React from 'react';

function ContainerAdmin({ titulo, subtitulo, subtitulo2, children }) {
    return (
        <>
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>{titulo}</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/home-admin">Home</a></li>
                            <li className="breadcrumb-item active">{subtitulo}</li>
                            <li className="breadcrumb-item active">{subtitulo2}</li>
                        </ol>
                    </nav>
                </div>

                <section className="section dashboard">
                    <div className="row">
                        {children}
                    </div>
                </section>
            </main>{/* <!-- End #main --> */}
        </>
    )
};

export default ContainerAdmin;
