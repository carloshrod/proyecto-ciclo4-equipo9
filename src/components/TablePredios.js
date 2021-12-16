import React from "react";
import { Link } from "react-router-dom";
import TablePrediosRow from "./TablePrediosRow";

function TablePredios({predios, setPredioToEdit, deletePredio}) {

    return (
        <>
            <section className="section min-vh-100">
                <div className="row">
                    <div className="col-lg-12">

                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Predios Registrados</h5>

                                <div className="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
                                    {/* <!-- Table with stripped rows --> */}
                                    <div className="dataTable-top">
                                        <div className="dataTable-dropdown">
                                            <label><select className="dataTable-selector">
                                                <option defaultValue="5">5</option>
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
                                                    <th scope="col" data-sortable="">
                                                        <Link to="" className="dataTable-sorter">#</Link>
                                                    </th>
                                                    <th scope="col" data-sortable="">
                                                        <Link to="" className="dataTable-sorter">Codigo</Link>
                                                    </th>
                                                    <th scope="col" data-sortable="">
                                                        <Link to="" className="dataTable-sorter">Nombre Propietario</Link>
                                                    </th>
                                                    <th scope="col" data-sortable="">
                                                        <Link to="" className="dataTable-sorter">C.C Propietario</Link>
                                                    </th>
                                                    <th scope="col" data-sortable="">
                                                        <Link to="" className="dataTable-sorter">Direccion</Link>
                                                    </th>
                                                    <th scope="col" data-sortable="">
                                                        <Link to="" className="dataTable-sorter">Barrio</Link>
                                                    </th>
                                                    <th scope="col" data-sortable="">
                                                        <Link to="" className="dataTable-sorter">Opciones</Link>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {predios.length > 0 ?
                                                    predios.map((predio, index) => {
                                                        return (
                                                            <TablePrediosRow
                                                            key={predio.codigo}
                                                            nro_registro={index + 1}
                                                            predio={predio}
                                                            setDataToEdit={setPredioToEdit}
                                                            deleteData={deletePredio}
                                                            />
                                                        )
                                                    }) : (
                                                        <tr>
                                                            <td colSpan={7}><h2 className="text-center">No hay información</h2></td>
                                                        </tr>
                                                    )
                                                }
                                            </tbody>
                                        </table>
                                        {/* <!-- End Table with stripped rows --> */}
                                    </div>
                                    <div className="dataTable-bottom">
                                        <div className="dataTable-info">Showing 1 to 10 of 10 entries</div>
                                        <nav className="dataTable-pagination">
                                            <ul className="dataTable-pagination-list"></ul>
                                        </nav>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default TablePredios;
