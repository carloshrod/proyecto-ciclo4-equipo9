import React from 'react';

function Dashboard(props) {
    return (
        <>
            {/* <!-- Left side columns --> */}
            <div className="col-lg-8">
                <div className="row">

                    {/* <!-- Sales Card --> */}
                    <div className="col-xxl-4 col-md-6">
                        <div className="card info-card sales-card">

                            <div className="filter">
                                <a className="icon" href="/" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                    <li className="dropdown-header text-start">
                                        <h6>Filter</h6>
                                    </li>

                                    <li><a className="dropdown-item" href="/">Today</a></li>
                                    <li><a className="dropdown-item" href="/">This Month</a></li>
                                    <li><a className="dropdown-item" href="/">This Year</a></li>
                                </ul>
                            </div>

                            <div className="card-body">
                                <h5 className="card-title">Usuarios Internos</h5>

                                <div className="d-flex align-items-center">
                                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                        <i className="bi bi-people"></i>
                                    </div>
                                    <div className="ps-3">
                                        <h6>{props.cantidadUsuarios(2)}</h6>
                                        <span className="text-success small pt-1 fw-bold">Registrados</span>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>{/* <!-- End Sales Card --> */}

                    {/* <!-- Revenue Card --> */}
                    <div className="col-xxl-4 col-md-6">
                        <div className="card info-card revenue-card">

                            <div className="filter">
                                <a className="icon" href="/" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                    <li className="dropdown-header text-start">
                                        <h6>Filter</h6>
                                    </li>

                                    <li><a className="dropdown-item" href="/">Today</a></li>
                                    <li><a className="dropdown-item" href="/">This Month</a></li>
                                    <li><a className="dropdown-item" href="/">This Year</a></li>
                                </ul>
                            </div>

                            <div className="card-body">
                                <h5 className="card-title">Usuarios Externos</h5>

                                <div className="d-flex align-items-center">
                                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                        <i className="bi bi-people"></i>
                                    </div>
                                    <div className="ps-3">
                                        <h6>{props.cantidadUsuarios(3)}</h6>
                                        <span className="text-success small pt-1 fw-bold">Registrados</span>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>{/* <!-- End Revenue Card --> */}

                    {/* <!-- Customers Card --> */}
                    <div className="col-xxl-4 col-xl-12">

                        <div className="card info-card customers-card">

                            <div className="filter">
                                <a className="icon" href="/" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                    <li className="dropdown-header text-start">
                                        <h6>Filter</h6>
                                    </li>

                                    <li><a className="dropdown-item" href="/">Today</a></li>
                                    <li><a className="dropdown-item" href="/">This Month</a></li>
                                    <li><a className="dropdown-item" href="/">This Year</a></li>
                                </ul>
                            </div>

                            <div className="card-body">
                                <h5 className="card-title">Predios</h5>

                                <div className="d-flex align-items-center">
                                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                        <i className="bi bi-building"></i>
                                    </div>
                                    <div className="ps-3">
                                        <h6>{props.cantidadPredios}</h6>
                                        <span className="text-danger small pt-1 fw-bold">Actuales</span>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>{/* <!-- End Customers Card --> */}

                    {/* <!-- Reports --> */}
                    <div className="col-12">
                        <div className="card">

                            <div className="filter">
                                <a className="icon" href="/" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                    <li className="dropdown-header text-start">
                                        <h6>Filter</h6>
                                    </li>

                                    <li><a className="dropdown-item" href="/">Today</a></li>
                                    <li><a className="dropdown-item" href="/">This Month</a></li>
                                    <li><a className="dropdown-item" href="/">This Year</a></li>
                                </ul>
                            </div>

                            <div className="card-body">
                                <h5 className="card-title">Reportes <span>/Today</span></h5>

                                {/* <!-- Line Chart --> */}
                                <div id="reportsChart"></div>
                            </div>

                        </div>
                    </div>{/* <!-- End Reports --> */}

                </div>
            </div>{/* <!-- End Left side columns --> */}
            
            {/* <!-- Right side columns --> */}
            <div className="col-lg-4">

                {/* <!-- Recent Activity --> */}
                <div className="card">
                    <div className="filter">
                        <a className="icon" href="/" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                            <li className="dropdown-header text-start">
                                <h6>Filter</h6>
                            </li>

                            <li><a className="dropdown-item" href="/">Today</a></li>
                            <li><a className="dropdown-item" href="/">This Month</a></li>
                            <li><a className="dropdown-item" href="/">This Year</a></li>
                        </ul>
                    </div>

                    <div className="card-body">
                        <h5 className="card-title">Actividad Reciente <span>| Today</span></h5>

                        <div className="activity">

                            <div className="activity-item d-flex">
                                <div className="activite-label">32 min</div>
                                <i className='bi bi-circle-fill activity-badge text-success align-self-start'></i>
                                <div className="activity-content">
                                    Quia quae rerum <a href="/" className="fw-bold text-dark">explicabo officiis</a> beatae
                                </div>
                            </div>{/* <!-- End activity item--> */}

                            <div className="activity-item d-flex">
                                <div className="activite-label">56 min</div>
                                <i className='bi bi-circle-fill activity-badge text-danger align-self-start'></i>
                                <div className="activity-content">
                                    Voluptatem blanditiis blanditiis eveniet
                                </div>
                            </div>{/* <!-- End activity item--> */}

                            <div className="activity-item d-flex">
                                <div className="activite-label">2 hrs</div>
                                <i className='bi bi-circle-fill activity-badge text-primary align-self-start'></i>
                                <div className="activity-content">
                                    Voluptates corrupti molestias voluptatem
                                </div>
                            </div>{/* <!-- End activity item--> */}

                            <div className="activity-item d-flex">
                                <div className="activite-label">1 day</div>
                                <i className='bi bi-circle-fill activity-badge text-info align-self-start'></i>
                                <div className="activity-content">
                                    Tempore autem saepe <a href="/" className="fw-bold text-dark">occaecati voluptatem</a> tempore
                                </div>
                            </div>{/* <!-- End activity item--> */}

                            <div className="activity-item d-flex">
                                <div className="activite-label">2 days</div>
                                <i className='bi bi-circle-fill activity-badge text-warning align-self-start'></i>
                                <div className="activity-content">
                                    Est sit eum reiciendis exercitationem
                                </div>
                            </div>{/* <!-- End activity item--> */}

                            <div className="activity-item d-flex">
                                <div className="activite-label">4 weeks</div>
                                <i className='bi bi-circle-fill activity-badge text-muted align-self-start'></i>
                                <div className="activity-content">
                                    Dicta dolorem harum nulla eius. Ut quidem quidem sit quas
                                </div>
                            </div>{/* <!-- End activity item--> */}

                        </div>

                    </div>
                </div>{/* <!-- End Recent Activity --> */}
            </div>
            {/* <!-- End Right side columns --> */}
        </>
    )
};

export default Dashboard;
