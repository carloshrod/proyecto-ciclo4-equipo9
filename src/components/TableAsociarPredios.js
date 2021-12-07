import React from 'react'
import './CompStyles.css';
import { Link } from "react-router-dom";

function TableAsociarPredios(props) {
    const { data } = props;

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
                                            <span className=""></span>
                                        </th>
                                        <th scope="col" data-sortable="" style={{ width: "5%" }}>
                                            <span className="dataTable-sorter">#</span>
                                        </th>
                                        <th scope="col" data-sortable="" style={{ width: "15%" }}>
                                            <span className="dataTable-sorter">Código</span>
                                        </th>
                                        <th scope="col" data-sortable="" style={{ width: "20%" }}>
                                            <span className="dataTable-sorter">CC del Propietario</span>
                                        </th>
                                        <th scope="col" data-sortable="" style={{ width: "20%" }}>
                                            <span className="dataTable-sorter">Dirección</span>
                                        </th>
                                        <th scope="col" data-sortable="" style={{ width: "20%" }}>
                                            <span className="dataTable-sorter">Barrio</span>
                                        </th>
                                        <th scope="col" data-sortable="" style={{ width: "15%" }}>
                                            <span className="dataTable-sorter">Total a pagar</span>
                                        </th>
                                        <th scope="col" data-sortable="" style={{ width: "3%" }}>
                                            <span className=""></span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map(predio => {
                                        return (
                                            <tr>
                                                <td><input className="form-check-input" type="checkbox" id="gridCheck1" /></td>
                                                <th scope="row">{predio.id}</th>
                                                <td>{predio.codigo}</td>
                                                <td>{predio.nom_prop}</td>
                                                <td>{predio.cc_prop}</td>
                                                <td>{predio.direccion}</td>
                                                <td>{predio.total}</td>
                                                <td align="center">
                                                    <Link to="">
                                                        <i className="bi bi-link"></i>
                                                    </Link>
                                                </td>
                                            </tr>
                                        )
                                    })}
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
                                        <Link to="" className="page-link" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                        </Link>
                                    </li>
                                    <li className="page-item"><Link to="" className="page-link">1</Link ></li>
                                    <li className="page-item"><Link to="" className="page-link">2</Link ></li>
                                    <li className="page-item"><Link to="" className="page-link">3</Link ></li>
                                    <li className="page-item">
                                        <Link to="" className="page-link" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                        </Link>
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
