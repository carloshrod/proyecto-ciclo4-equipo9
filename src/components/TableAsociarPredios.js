import React from 'react'
import './CompStyles.css';
import { Link } from "react-router-dom";

function TableAsociarPredios() {
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Predios Registrados</h5>

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
                            <table className="table datatable text-center">
                                <thead>
                                    <tr>
                                        <th scope="col" data-sortable="" style={{ width: "2%" }}>
                                            <a href="#" className=""></a>
                                        </th>
                                        <th scope="col" data-sortable="" style={{ width: "5%" }}>
                                            <a href="#" className="dataTable-sorter">#</a>
                                        </th>
                                        <th scope="col" data-sortable="" style={{ width: "15%" }}>
                                            <a href="#" className="dataTable-sorter">Código</a>
                                        </th>
                                        <th scope="col" data-sortable="" style={{ width: "20%" }}>
                                            <a href="#" className="dataTable-sorter">CC del Propietario</a>
                                        </th>
                                        <th scope="col" data-sortable="" style={{ width: "20%" }}>
                                            <a href="#" className="dataTable-sorter">Dirección</a>
                                        </th>
                                        <th scope="col" data-sortable="" style={{ width: "20%" }}>
                                            <a href="#" className="dataTable-sorter">Barrio</a>
                                        </th>
                                        <th scope="col" data-sortable="" style={{ width: "15%" }}>
                                            <a href="#" className="dataTable-sorter">Total a pagar</a>
                                        </th>
                                        <th scope="col" data-sortable="" style={{ width: "3%" }}>
                                            <a href="#" className=""></a>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input className="form-check-input" type="checkbox" id="gridCheck1" /></td>
                                        <th scope="row">1</th>
                                        <td>PD46842354</td>
                                        <td>1147893052</td>
                                        <td>Calle Falsa 123</td>
                                        <td>Los Olivos</td>
                                        <td>$523.890</td>
                                        <td align="center">
                                            <Link to="">
                                                <i className="bi bi-link"></i>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><input className="form-check-input" type="checkbox" id="gridCheck1" /></td>
                                        <th scope="row">2</th>
                                        <td>PD16542342</td>
                                        <td>1147893052</td>
                                        <td>Calle Falsa 456</td>
                                        <td>Boston</td>
                                        <td>$705.900</td>
                                        <td align="center">
                                            <Link to="">
                                                <i className="bi bi-link"></i>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><input className="form-check-input" type="checkbox" id="gridCheck1" /></td>
                                        <th scope="row">3</th>
                                        <td>PD43852690</td>
                                        <td>75896015</td>
                                        <td>Calle Falsa 789</td>
                                        <td>Recreo</td>
                                        <td>$675.900</td>
                                        <td align="center">
                                            <Link to="">
                                                <i className="bi bi-link"></i>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><input className="form-check-input" type="checkbox" id="gridCheck1" /></td>
                                        <th scope="row">4</th>
                                        <td>PD43458104</td>
                                        <td>1045804932</td>
                                        <td>Calle Falsa 410</td>
                                        <td>Prado</td>
                                        <td>$1'280.900</td>
                                        <td align="center">
                                            <Link to="">
                                                <i className="bi bi-link"></i>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><input className="form-check-input" type="checkbox" id="gridCheck1" /></td>
                                        <th scope="row">5</th>
                                        <td>PD36816700</td>
                                        <td>1045804932</td>
                                        <td>Calle Falsa 816</td>
                                        <td>Miramar</td>
                                        <td>$1'780.700</td>
                                        <td align="center">
                                            <Link to="">
                                                <i className="bi bi-link"></i>
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
                                <ul className="pagination">
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                        </a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                    </div>

                </div>
            </div>
        </>

    )
}

export default TableAsociarPredios;
