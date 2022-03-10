import React from 'react';
import PrediosChart from './PrediosChart';
import UsersChart from './UsersChart';
import jwtDecode from 'jwt-decode';

function Dashboard({ usersDb, prediosDb, cantidadUsuarios, cantidadPredios, error }) {

    const token = localStorage.getItem("token");
    const payload = jwtDecode(token);

    return (
        <>
            {error}
            {/* <!-- Left side columns --> */}
            <div className="dashboard col-lg-12">
                <div className="row">

                    {payload.rol === 1 &&
                        <>
                            {/* <!-- Usuarios Internos --> */}
                            < div className="col-xxl-4 col-md-4">
                                <div className="card info-card sales-card">

                                    <div className="card-body">
                                        <h5 className="card-title">Usuarios Internos</h5>

                                        <div className="d-flex align-items-center justify-content-center">
                                            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                <i className="bi bi-people"></i>
                                            </div>
                                            <div className="ps-3">
                                                <h6>{cantidadUsuarios(2)}</h6>
                                                <span className="text-success small pt-1 fw-bold">Registrados</span>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>{/* <!-- End Usuarios Internos --> */}
                        </>
                    }

                    {/* <!-- Usuarios Externos --> */}
                    <div className={payload.rol !== 1 ? "col-xxl-6 col-md-6" : "col-xxl-4 col-md-4"}>
                        <div className="card info-card revenue-card">

                            <div className="card-body">
                                <h5 className="card-title">Usuarios Externos</h5>

                                <div className="d-flex align-items-center justify-content-center">
                                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                        <i className="bi bi-people"></i>
                                    </div>
                                    <div className="ps-3">
                                        <h6>{cantidadUsuarios(3)}</h6>
                                        <span className="text-success small pt-1 fw-bold">Registrados</span>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>{/* <!-- End Usuarios Externos --> */}

                    {/* <!-- Predios--> */}
                    <div className={payload.rol !== 1 ? "col-xxl-6 col-md-6" : "col-xxl-4 col-md-4"}>

                        <div className="card info-card customers-card">

                            <div className="card-body">
                                <h5 className="card-title">Predios</h5>

                                <div className="d-flex align-items-center justify-content-center">
                                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                        <i className="bi bi-building"></i>
                                    </div>
                                    <div className="ps-3">
                                        <h6>{cantidadPredios}</h6>
                                        <span className="text-success small pt-1 fw-bold">Registrados</span>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>{/* <!-- End Predios --> */}
                </div>
            </div>

            {/* <!-- Gráfica --> */}
            <div className="col-12 col-md-8">
                {payload.rol === 1 &&
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Actividad | Usuarios Internos</h5>
                            <UsersChart usersDb={usersDb} />
                            <div id="reportsChart"></div>
                        </div>
                    </div>
                }

                <div className="card">
                    <div className="ms-4">
                        <h5 className="card-title">Estadísticas | Predios</h5>
                    </div>
                    <div className="row">
                        <div className="card-body">
                            <PrediosChart prediosDb={prediosDb} />
                            <div id="reportsChart"></div>
                        </div>
                    </div>
                </div>
            </div>{/* <!-- End Gráfica --> */}

            {/* <!-- Right side columns --> */}
            <div className="dashboard col-12 col-md-4">
                {/* <!-- Recent Activity --> */}
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Actividad Reciente</h5>
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

                            {payload.rol === 1 &&
                                <>
                                    <div className="activity-item d-flex">
                                        <div className="activite-label">2 days</div>
                                        <i className='bi bi-circle-fill activity-badge text-warning align-self-start'></i>
                                        <div className="activity-content">
                                            Est sit eum reiciendis exercitationem
                                        </div>
                                    </div>{/* <!-- End activity item--> */}

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
                                </>
                            }
                        </div>

                    </div>
                </div>{/* <!-- End Recent Activity --> */}
            </div>
            {/* <!-- End Right side columns --> */}
        </>
    )
};

export default Dashboard;
