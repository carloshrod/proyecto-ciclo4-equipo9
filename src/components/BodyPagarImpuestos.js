import React from 'react'
import './CompStyles.css';
import { Link } from "react-router-dom";

function BodyPagarImpuestos() {
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">CC Propietario: 123456789</h5>

                    <div className="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
                        {/* <!-- Table with stripped rows --> */}
                        <div className="dataTable-top">
                            <div className="dataTable-dropdown">
                                <label><select className="dataTable-selector">
                                    <option value="5" selected="true">5</option>
                                    <option value="10">10</option>
                                    <option value="15">15</option>
                                    <option value="20">20</option>
                                    <option value="25">25</option>
                                </select> entries per page</label>
                            </div><div className="dataTable-search"><input className="dataTable-input" placeholder="Search..." type="text" /></div>
                        </div>

                        <div className="dataTable-container">
                            <table className="table datatable">
                                <thead>
                                    <tr>
                                        <th scope="col" data-sortable="" style={{ width: "5.6902%;" }}>
                                            <span className="dataTable-sorter">#</span>
                                        </th>
                                        <th scope="col" data-sortable="" style={{ width: "28.0295%;" }}>
                                            <span className="dataTable-sorter">Código</span>
                                        </th>
                                        <th scope="col" data-sortable="" style={{ width: "37.7239%;" }}>
                                            <span className="dataTable-sorter">Nombre del Propietario</span>
                                        </th>
                                        <th scope="col" data-sortable="" style={{ width: "9.27292%;" }}>
                                            <span className="dataTable-sorter">Dirección del Predio</span>
                                        </th>
                                        <th scope="col" data-sortable="" style={{ width: "19.2835%;" }}>
                                            <span className="dataTable-sorter">Barrio</span>
                                        </th>
                                        <th scope="col" data-sortable="" style={{ width: "19.2835%;" }}>
                                            <span className="dataTable-sorter">Total span pagar</span>
                                        </th>
                                        <th scope="col" data-sortable="" style={{ width: "5.6902%;" }}>
                                            <span className=""></span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>PD46842354</td>
                                        <td>Sebastián Vargas</td>
                                        <td>Calle Falsa 123</td>
                                        <td>Los Olivos</td>
                                        <td>$523.890</td>
                                        <td align="center">
                                            <Link to="/modal-pago">
                                                <i class="bi bi-credit-card-2-back-fill"></i>
                                            </Link>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <Link to="/convenio">
                                                <i class="bi bi-pencil-square"></i>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>PD16542342</td>
                                        <td>Sebastián Vargas</td>
                                        <td>Calle Falsa 456</td>
                                        <td>Boston</td>
                                        <td>$705.900</td>
                                        <td align="center">
                                            <Link to="/modal-pago">
                                                <i class="bi bi-credit-card-2-back-fill"></i>
                                            </Link>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <Link to="/convenio">
                                                <i class="bi bi-pencil-square"></i>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>PD43852690</td>
                                        <td>Sebastián Vargas</td>
                                        <td>Calle Falsa 789</td>
                                        <td>Recreo</td>
                                        <td>$675.900</td>
                                        <td align="center">
                                            <Link to="/modal-pago">
                                                <i class="bi bi-credit-card-2-back-fill"></i>
                                            </Link>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <Link to="/convenio">
                                                <i class="bi bi-pencil-square"></i>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>PD43458104</td>
                                        <td>Sebastián Vargas</td>
                                        <td>Calle Falsa 410</td>
                                        <td>Prado</td>
                                        <td>$1'280.900</td>
                                        <td align="center">
                                            <Link to="/modal-pago">
                                                <i class="bi bi-credit-card-2-back-fill"></i>
                                            </Link>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <Link to="/convenio">
                                                <i class="bi bi-pencil-square"></i>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>PD36816700</td>
                                        <td>Sebastián Vargas</td>
                                        <td>Calle Falsa 816</td>
                                        <td>Miramar</td>
                                        <td>$1'780.700</td>
                                        <td align="center">
                                            <Link to="/modal-pago">
                                                <i class="bi bi-credit-card-2-back-fill"></i>
                                            </Link>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <Link to="/convenio">
                                                <i class="bi bi-pencil-square"></i>
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* <!-- End Table with stripped rows --> */}
                        </div>
                        <div className="dataTable-bottom">
                            <div className="dataTable-info">Showing 1 to 5 of 5 entries</div>
                            <nav className="dataTable-pagination">
                                <ul className="dataTable-pagination-list"></ul>
                            </nav>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default BodyPagarImpuestos;
