import React from "react";
import { Link } from "react-router-dom";

function TablePredioUserInt(props){
    const { data } = props;

    return(
        <>
        <section className="section">
            <div className="row">
                <div className="col-lg-12">

                <div className="card">
                    <div className="card-body">
                    <h5 className="card-title">Datatables</h5>                    

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
                        </div><div className="dataTable-search"><input className="dataTable-input" placeholder="Search..." type="text"/></div>
                    </div>

                    <div className="dataTable-container">
                    <table className="table datatable">
                        <thead>
                        <tr>
                            <th scope="col" data-sortable="" style={{width: "5.6902%;"}}>
                                <Link to="" className="dataTable-sorter">#</Link>
                            </th>
                            <th scope="col" data-sortable="" style={{width: "28.0295%;"}}>
                                <Link to="" className="dataTable-sorter">Codigo</Link>
                            </th>
                            <th scope="col" data-sortable="" style={{width: "37.7239%;"}}>
                                <Link to="" className="dataTable-sorter">Nombre Propietario</Link>
                            </th>
                            <th scope="col" data-sortable="" style={{width: "9.27292%;"}}>
                                <Link to="" className="dataTable-sorter">C.C Propietario</Link>
                            </th>
                            <th scope="col" data-sortable="" style={{width: "19.2835%;"}}>
                                <Link to="" className="dataTable-sorter">Direccion</Link>
                            </th>
                            <th scope="col" data-sortable="" style={{width: "19.2835%;"}}>
                                <Link to="" className="dataTable-sorter">Total</Link>
                            </th>
                            <th scope="col" data-sortable="" style={{width: "19.2835%;"}}>
                                <Link to="" className="dataTable-sorter">Opciones</Link>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                            {data.map(predio => {
                                return (
                                    <tr>
                                    <th scope="row">{predio.id}</th>
                                    <td>{predio.codigo}</td>
                                    <td>{predio.nom_prop}</td>
                                    <td>{predio.cc_prop}</td>
                                    <td>{predio.direccion}</td>
                                    <td>{predio.total}</td>
                                    <td align="center">
                                        <Link to="/home-user-int/manage-predio/edit">
                                            <i className="bi bi-pencil-fill"></i> 
                                        </Link>                                                             
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <Link to="/home-user-int/manage-predio/fecha-pago-descuentos">
                                            <i className="bi bi-calendar-check"></i>
                                        </Link>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <Link to="/home-user-int/manage-predio/ejecutar-algoritmos">
                                        <i className="bi bi-cpu"></i>
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

export default TablePredioUserInt;